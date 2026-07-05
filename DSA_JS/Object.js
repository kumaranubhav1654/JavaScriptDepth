// Part 3 (Objects)
// Deep Clone

const objOrig = {
    a: 1,
    b:{
        c:{
            d: 4
        },
        e:5
    }
} 


function deepClone(obj){
    const res = {}
    
    for(key in obj){
        if(typeof obj[key] !== "object") res[key] = obj[key];
        else{
            res[key] = deepClone(obj[key]);
        }
    }
    
    return res;
}

const objClone = deepClone(objOrig);
objClone.b.c.d = 9;

console.log("DeepClone with 1 value changed",objClone);
console.log("Origional",objOrig);

// Deep Equal

const a = {
    a1:{
        b1: "Yup",
    },
    d1: "yupyup"
}
const b = {
    a1:{
        b1: "Yup",
    },
    d1: "yupyup"
}


function deepCompare(a, b){
    if(a === b) return true;
    
    if(a === null || b === null || typeof a !== "object" || typeof b !== "object" ) return false;
    
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if(aKeys.length !== bKeys.length) return false;
    
    for(key in a){
        if(!deepCompare(a[key], b[key])) return false;
    }
    return true;
}

console.log("DeepCompare", deepCompare(a,b));


// Flatten Object

const obj = {
    a:{
        b:{
            d:{
                e: 9
            },
            g: 5
        },
        c: "Yo"
    },
    f: 7
}


function flatn(obj, parentKey = ""){
    let res = {};
    
    for(key in obj){
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        if(typeof(obj[key]) === "object"){
            res = {...res, ...flatn(obj[key], newKey)};
        }
        else res[newKey] = obj[key];
    }
    
    return res;
}

console.log(flatn(obj));