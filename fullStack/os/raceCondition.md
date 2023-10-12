## multiple threads needing to increment x

All that is necessary is for the first operation of each thread (loading the value of x into a register) to take place before the final operation of the other is finished. Both threads would load the same value in their register, so x only gets incremented once.

These threads that are accessing the same variable is an example of failing the mutual exclusion condition. Only one thread should be able to access a critical section.

solved with `locking` a variable, or defining as an `atomic variable`.

## buffers and semaphores

two rules: if the buffer is empty, no thread can read from it, and if the buffer is full, no thread can write to it.

have two semaphores: `num_free` and `num_occupied`

## Deadlocks

```table
thread_1 	            thread_2
lock(foo_mtx) 	      lock(bar_mtx)
lock(bar_mtx) 	      lock(foo_mtx)
Do something 	        Do something
unlock(foo_mtx)       unlock(bar_mtx)
unlock(bar_mtx)       unlock(foo_mtx)
```

After making their first lock, both threads now try to lock the second mutex. But this will never happen since neither thread will give up its first lock until it gets its second!

Our first recovery method is called termination. If two threads are deadlocked, one possible way to recover from that deadlock is to terminate one of the threads and release its locks. One of the drawbacks of this is that we lose any work the thread may have completed up to the point when we terminated it. The thread may also have been executing an important task that will now either not be completed or delayed.

Using the example above, that might mean terminating thread_1 so that it gives up its lock on foo_mtx. This would then allow thread_2 to receive it and finish executing. It is then up to the OS or the process itself to decide whether to respawn the terminated thread so that it may complete its task.

The second main way to recover from a deadlock is to, instead of terminating a thread and releasing all of its locks, simply release the lock on the shared resource which is causing the deadlock. However, here we run into a synchronization problem since, by releasing the lock early, we can no longer guarantee mutual exclusion.

Using the above example, thread_1 will release its lock on foo_mtx, which allows thread_2 to complete its task and then release its locks. This, in turn, allows thread_1 to get a lock on bar_mtx and execute its task.

The benefit here is that both threads execute their tasks without the inefficiency of having to destroy and respawn one of them; however, since thread_1 did not have a lock on foo_mtx at the time it completed its task, we have no guarantee of mutual exclusion. Therefore, we are now susceptible to race conditions