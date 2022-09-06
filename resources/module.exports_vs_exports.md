# this is for ES6 modules/imports/exports

# module.exports
- module is a plain JavaScript Object representing the current module
- It is local to each module and also it is private. 
- It has exports property 
- Usecases
    export a single class/variable/function from one module to another module, we use module.exports


# exports
- exports is not returned by require().  It is just a reference to module.exports
- Usecases
    export multiple variables/functions from one module to another


# Points to remember
- You can only have 1 default export per file.
- `import default exports` without using curly braces
- `import named exports` with curly braces
- 

-------------------------------------------------------------------------------------------------------------------------
# Example 01

// file1.js
export default function sum(a, b) { return a + b; }

// file2.js
import { sum } from './index.js';               // WRONG
import sum from './index.js';                   // RIGHT        dont use curly braces

-------------------------------------------------------------------------------------------------------------------------
# Example 02

export function sum(a, b) { return a + b; }
import { sum } from './index.js';               // RIGHT        use curly braces for named exports

-------------------------------------------------------------------------------------------------------------------------
# Example 03

export const num = 100;                                             // named export
export default function sum(a, b) { return a + b; }                 // default export

import sum, {num} from './index.js';

-------------------------------------------------------------------------------------------------------------------------
# Example 04

If you're exporting a variable as a default export, 
    you have to declare it on 1 line and export it on the next. 
    You can't declare and default export a variable on the same line.


const str = 'hello';
export default str;             // RIGHT

