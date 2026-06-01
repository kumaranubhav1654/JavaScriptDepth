const obj = {
  a: 1,
  b: {
    c: [2, 3, 4],
    d: new Date(),
  }
};

const deepClone = (obj) => {
let clone = {};
    for(let key in obj){
        const value = obj[key];
        if(value instanceof Date){
            clone[key] = new Date(value);
        }
        else if(Array.isArray(value)){
            let res = [];
            for(let val of value){
                res.push(val);
            }
            clone[key] = res;
        }
        else if(typeof(value) === "object"){
           clone[key] = {...deepClone(value)};
        }
        else{
            clone[key] = value;
        }
    }
    return clone;
}

const copy = deepClone(obj);
copy.a = 15;
copy.b.c[2] = 15;

console.log(obj);
console.log(copy);

// Why WeakMap: We use WeakMap because its keys are weakly held references. 
// Once an object becomes unreachable elsewhere, it can be garbage collected. 
// Since deep cloning only needs temporary tracking of visited objects, 
// WeakMap avoids unnecessary memory retention.

function deepClone(obj, visited = new WeakMap()) {
    if(obj === null || typeof obj !== "object") {
        return obj;
    }
    if(obj instanceof Date) {
        return new Date(obj);
    }
    if(visited.has(obj)) { // This Handles Self reference
        return visited.get(obj);
    }
    const clone = Array.isArray(obj) ? [] : {};
    visited.set(obj, clone);
    for(const key in obj) {
        clone[key] = deepClone(obj[key], visited);
    }
    return clone;
}


// A RegExp is an object.
const clonedRegex = new RegExp(
    regex.source,  // /hello/g
    regex.flags
)

// DeepCloning a set 
const clonedSet = new Set();
    for(const value of originalSet){
        clonedSet.add(deepClone(value));
    }

// DeepCloning a map
const clonedMap = new Map();

for(const [key, value] of originalMap){
    clonedMap.set(
        deepClone(key),  // key can also be an object
        deepClone(value)
    );
}

//  Why JSON.stringify + JSON.parse Fails : Date becomes a string, Function disappears, 
// Map and set are lost, TypeError: Converting circular structure to JSON
