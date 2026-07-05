// Test

function searchAPI(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Success");
        },1000);
    });
}

function debounce(fn){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(...args);
        },300);
    }
}

const debounced = debounce(searchAPI);
const result = debounced();
console.log(result); // undefined


//Does SetTimeout return anything?
let timer;
function test() {
    timer = setTimeout(() => {
        return 100;
    }, 1000);
}

console.log("test",test());
console.log("timer",timer);



LEVEL 1 — Function vs Function Call
Q1
function searchAPI() {
    return "Success";
}

const x = searchAPI;

console.log(x);
Q2
function searchAPI() {
    return "Success";
}

const x = searchAPI();

console.log(x);
Q3
function searchAPI() {
    return "Success";
}

console.log(searchAPI);
console.log(searchAPI());
Q4
function searchAPI() {
    console.log("API Called");
    return "Success";
}

const fn = searchAPI;

fn();
LEVEL 2 — Function Returning Promise
Q5
function searchAPI() {
    return Promise.resolve("Success");
}

const x = searchAPI;

console.log(x);
Q6
function searchAPI() {
    return Promise.resolve("Success");
}

const x = searchAPI();

console.log(x);
Q7
function searchAPI() {
    return Promise.resolve("Success");
}

searchAPI();

What happens?

Q8
function searchAPI() {
    return Promise.resolve("Success");
}

searchAPI().then(console.log);
Q9
function searchAPI() {
    return Promise.resolve("Success");
}

const result = await searchAPI();
console.log(result);

Assume this is inside an async function.

LEVEL 3 — Creating Promise Manually
Q10
function searchAPI() {

    return new Promise((resolve) => {

        resolve("Success");

    });

}

console.log(searchAPI());
Q11
function searchAPI() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Success");

        },1000);

    });

}

console.log(searchAPI());
Q12
function searchAPI() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Success");

        },1000);

    });

}

searchAPI().then(console.log);
LEVEL 4 — async Functions
Q13
async function searchAPI() {

    return "Success";

}

console.log(searchAPI());
Q14
async function searchAPI() {

    return "Success";

}

searchAPI().then(console.log);
Q15
async function searchAPI() {

    return Promise.resolve("Success");

}

console.log(await searchAPI());
Q16
async function searchAPI() {

    return new Promise(resolve=>{

        resolve("Success");

    });

}

console.log(await searchAPI());
LEVEL 5 — Function Returning Function
Q17
function searchAPI(){

    return function(){

        return "Success";

    }

}

const x = searchAPI();

console.log(x);
Q18
function searchAPI(){

    return function(){

        return Promise.resolve("Success");

    }

}

const x = searchAPI();

console.log(x());
Q19
function searchAPI(){

    return function(){

        return Promise.resolve("Success");

    }

}

searchAPI()().then(console.log);
LEVEL 6 — Promise Resolving Function
Q20
function searchAPI(){

    return Promise.resolve(function(){

        return "Success";

    });

}

console.log(searchAPI());
Q21
const fn = await searchAPI();

console.log(fn());
LEVEL 7 — setTimeout Confusion

These are the questions where almost everyone makes mistakes.

Q22
function searchAPI(){

    return Promise.resolve("Success");

}

setTimeout(() => {

    return searchAPI();

},1000);

What is returned?

Q23
const x = setTimeout(() => {

    return Promise.resolve("Success");

},1000);

console.log(x);
Q24
const x = setTimeout(() => {

    return "Hello";

},1000);

console.log(x);
Q25
function test(){

    setTimeout(()=>{

        return "Success";

    },1000);

}

console.log(test());
LEVEL 8 — Debounce (Most Asked)
Q26
function debounce(fn){

    return function(){

        setTimeout(()=>{

            fn();

        },300);

    }

}

What does

debouncedFn()

return?

Q27
function debounce(fn){

    return function(){

        return setTimeout(()=>{

            fn();

        },300);

    }

}

What is returned now?

Q28
function debounce(fn){

    return function(){

        setTimeout(()=>{

            return fn();

        },300);

    }

}

What is returned?

Q29
function debounce(fn){

    return function(){

        return fn();

    }

}

If fn returns a Promise, what does debouncedFn() return?

Q30 (Final Boss ⭐⭐⭐⭐⭐)
function searchAPI(){

    return new Promise(resolve=>{

        setTimeout(()=>{

            resolve("Success");

        },1000);

    });

}

function debounce(fn){

    let timer;

    return function(...args){

        clearTimeout(timer);

        timer = setTimeout(()=>{

            fn(...args);

        },300);

    }

}

const debounced = debounce(searchAPI);

const result = debounced();

console.log(result);