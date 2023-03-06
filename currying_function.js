/*
* currying function is a function that takes multiple arguments one at a time.
* It returns a new function that takes the next argument until all the arguments have been fulfilled.
* f(a, b, c) = f(a)(b)(c) like Add(2, 3, 5) to Add(2)(3)(5)
* */

// Example 1
function add(a, b, c) {
    return a + b + c;
}

console.log(add(2, 3, 5));

// Add(2, 3, 5) = Add(2)(3)(5) by nesting functions

function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c);
            }
        }
    }
}

let curriedAdd = curry(add);
console.log(curriedAdd(2)(3)(5));