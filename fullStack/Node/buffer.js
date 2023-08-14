let buffer = Buffer.alloc(5);
console.log(buffer); // Ouput: [0, 0, 0, 0, 0]


buffer = Buffer.alloc(5, 'a');
console.log(buffer.toString()); // Output: aaaaa

buffer = Buffer.from('hello');
console.log(buffer); // Output: [104, 101, 108, 108, 111]

const buffer2 = Buffer.from('world'); // Output:[119, 111, 114, 108, 100]
const array = [buffer, buffer2];
const bufferConcat = Buffer.concat(array);
 
console.log(bufferConcat); // Output: [104, 101, 108, 108, 111, 119, 111, 114, 108, 100]