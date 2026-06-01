// Flattening Array or Object

const nestedObj = {
    a:{
        b:{c: 5},
        d: 6,
        e:{ f:{ g: 9}}
    }, 
    h: 10,
}

const nestedArr = [1,[2], [3, [4, [5]]]];

const myFlatArr = function (arr, depth = 1) {
    const result = [];
    for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i]) && depth > 0) result.push(...myFlatArr(arr[i], depth-1));
        else result.push(arr[i]);
    }
    return result;
}

console.log(myFlatArr(nestedArr, 5));

const myFlatObj = function(obj, parentKey = "") {
    let result = {};
    for(const key in obj){
        const value = obj[key];
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        
        if(typeof(obj[key]) == "object") {
           result = {...result, ...myFlatObj(value, newKey)};
        }
        else{
            result[newKey] = value;
        }
    }
    return result;
}

console.log(myFlatObj(nestedObj));