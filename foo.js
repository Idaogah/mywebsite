// 1) What does typeof a and typeof b evaluate to in the following JS snippet?
function foo(){
    let a = b = 0;
    a++;
    return a;
}

foo();
typeof a; // => ???
typeof b; // => ???

// call the function in the terminal by running
// const foo = require('./foo')

// 2) What is the content of "numbers" array in the following JS snippet?
const length = 4;
const numbers = [];
for (var i = 0; i < length; i++) {
   numbers.push(i+1);
}

console.log(numbers); // => ???



