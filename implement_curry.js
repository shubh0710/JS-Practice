// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */

// main fn
function curry(fn) {

    // inner fn
    return function curried(...args) {
        // also base case for recursion
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function (...moreArgs) {
                const collected = [...args, ...moreArgs];
                // recursive call
                return curried(...collected);
            };
        }
    };
};

// callback fn
const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}

const curriedJoin = curry(join);

// testing
console.log(curriedJoin(1, 2, 3));
console.log(curriedJoin(1)(2, 3));
console.log(curriedJoin(1, 2)(3));
console.log(curriedJoin(1)(2)(3));
console.log(curriedJoin(1, 2, 3, 4));