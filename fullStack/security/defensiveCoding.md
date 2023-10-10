# Defensive coding

## eval

```js
// This user input causes an infinite loop to run
const user_input = "while(true) ;";
eval(user_input);

// This user input closes the application
import safeEval from "safe-eval";
const user_input = "process.exit(0)";
eval(user_input);
```

The functions, setInterval(), setTimeout(), and new Function() use eval() in their implementations, and should be used with the same caution.

```js
// Using safeEval will throw an error, since it does not have access to process
const user_input = "process.exit(0)";
safeEval(user_input);
```

## exec

`exec` runs shell scripts.

```js
// print all js files to terminal
user_input = "cat *.js";
exec(user_input);
```

Safer:

```js
import { exec, execFile } from "child_process";

// Spawns a shell with the input as is
exec("ls -lah /tmp");

// Requires a command and specified arguments to execute
execFile("ls", ["-lah", "/tmp"]);
```

## fs

```js
// delete a file
const user_input = "./example.txt";
fs.unlinkSync(user_input);
```

```js
const user_input = "example.txt"
const root_directory = process.cwd();   
// Hard-code path to restrict scope
const filePath = path.join(root_directory , fileName);
fs.unlinkSync(filePath);
```

## Regular expression Denial of Service (ReDoS). 

Backtacking when checking some inputs can have O(huge)

To prevent this danger, we can use the `validator` npm package. It provides a library of string validators and sanitizers for things like IP addresses, emails, and phone numbers. For Regex expression we must write ourselves, we can use tools like the `safe-regex` npm package to detect dangerous regular expressions.

## Strict mode

Using strict mode throws errors that would otherwise be silent, which can help reveal vulnerabilities.

```js
// Runs fine without strict mode
x = "codecademy";

// Throws “ReferenceError” with strict mode
"use strict";
x = "codecademy";

// Runs fine with strict mode if the variable is declared with let, var, or const
"use strict";
var x = "codecademy";
```

## linters

`eslint-plugin-security` is a plugin that adds rules to detect several security vulnerabilities including all of the aforementioned security risks in this lesson