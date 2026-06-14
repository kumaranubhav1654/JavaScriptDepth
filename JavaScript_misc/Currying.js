// Currying is a technique that transforms a function taking multiple arguments into a sequence 
// of functions that each take one or more arguments until all required arguments are collected, 
// after which the original function is executed.

// uses concept of CLOSURE, where each returned function retains access to the arguments passed 
// to the previous functions in the chain.


function add(a,b,c){
   return a+b+c;
}

const curry = (fn) => {
    const argsCount = fn.length;
    
    return function curried(...args){
        if(args.length === argsCount){
            return fn(...args);
        }
        return function (...nextArgs){
            return curried(...args, ...nextArgs);
        }
    }
}

const fn1 = curry(add);
const fn2 = fn1(1);
const fn3 = fn2(2);
const fn4 = fn3(3);

console.log(fn1, fn2, fn3, fn4);

console.log(curry(add)(1)(2)(3))
console.log(curry(add)(1,2)(3))
console.log(curry(add)(1)(2,3))
console.log(curry(add)(1,2,3))