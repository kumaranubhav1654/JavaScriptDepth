
// call
const obj = {
    name: 'John',
    age: 30
};

function greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
}

greet.call(obj, 'Hello'); // Output: Hello, my name is John


Function.prototype.myCall = function (obj, ...args){
    obj = obj || globalThis
    const fn = this;
    
    const uniqueKey = Symbol();
    obj[uniqueKey] = fn;
    
    const res = obj[uniqueKey](...args);
    
    delete obj[uniqueKey];
    return res;
}

greet.myCall(obj, 'Hello');


//APPLY
const obj2 = {
    name: 'Anubhav',
    age: 20
};

function greet2(greeting, respect) {
    console.log(`${greeting} ${respect}, I am ${this.age} year old`);
}

greet2.apply(obj2, ['Yo', 'namaskara']);


Function.prototype.myApply = function (obj, args = []){
    obj = obj || globalThis
    const fn = this;
    
    const uniqueKey = Symbol();
    obj[uniqueKey] = fn;
    
    const res = obj[uniqueKey](...args);
    
    delete obj[uniqueKey];
    return res;
}

greet2.myApply(obj2, ['Yo', 'namaskara']);

//BIND
const obj3 = {
    name: 'Anubhav',
    age: 20
};

function greet3(greeting) {
    console.log(`${greeting}, I am ${this.name}`);
}

const newfn = greet3.bind(obj3, 'Heyo');
newfn();


Function.prototype.myBind = function (obj, ...args){
    const fn = this;
    
    return function (){
        fn.call(obj, ...args);
    }
}

const fn = greet3.myBind(obj3, 'Heyo');
fn();
