# Create a function called append_size that has one parameter named my_list.

# The function should append the size of my_list (inclusive) to the end of my_list. The function should then return this new list.

#Write your function here
def append_size(arr):
    arr.append(len(arr))
    return arr

#Uncomment the line below when your function is done
print(append_size([23, 42, 108]))




# *************************************
def append_sum(arr):
    arr.append(sum(arr))
    return arr
print(append_sum([1, 1, 2]))





# *************************************
# Write a function named larger_list that has two parameters named my_list1 and my_list2.

# The function should return the last element of the list that contains more elements. If both lists are the same size, then return the last element of my_list1.

#Write your function here
def larger_list(list1, list2):
    if (len(list2) > len(list1)):
        return list2[-1]
    else:
        return list1[-1]

#Uncomment the line below when your function is done
print(larger_list([4, 10, 2, 5], [-10, 2, 5, 10]))


# *************************************
# Create a function named more_than_n that has three parameters named my_list, item, and n.

# The function should return True if item appears in the list more than n times. The function should return False otherwise.

#Write your function here
def more_than_n(my_list, item, n):
    return my_list.count(item) > n

#Uncomment the line below when your function is done
print(more_than_n([2, 4, 6, 2, 3, 2, 1, 2], 2, 3))




# *************************************
# Write a function named combine_sort that has two parameters named my_list1 and my_list2.

# The function should combine these two lists into one new list and sort the result. Return the new sorted list.

#Write your function here
def combine_sort(a, b):
    c = a + b
    c.sort()
    return c

#Uncomment the line below when your function is done
print(combine_sort([4, 10, 2, 5], [-10, 2, 5, 10]))