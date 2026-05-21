//Map Polyfill
const arraySample1 = [1,2,4,7,9];

const newArrWithOrigionalMap = arraySample1.map((ele)=>{
return ele*2;
})
console.log(newArrWithOrigionalMap);

Array.prototype.myMap = function (callback) {
    const result = [];
    const arr = this;

    arr.forEach((ele, i)=>{
        result[i] = callback(ele);
    })
    return result;
}

const myMapOutput = arraySample1.myMap((ele)=>{
   return ele*2;
})

console.log(myMapOutput);


//My filter
const arraySample2 = [1,2,4,7,9];

const newArrWithOrigionalFilter = arraySample2.filter((ele)=> ele>3)
console.log(newArrWithOrigionalFilter);

Array.prototype.myFilter = function (callback) {
    const result = [];
    const arr = this;

    arr.forEach((ele, i)=>{
        if(callback(ele))
        result.push(ele);
    })
    return result;
}

const myFilterOutput = arraySample2.myFilter((ele)=> ele > 3)

console.log(myFilterOutput);

//My Reduce
const arraySample3 = [1,2,4,7,9];

const newOrigionalReduce = arraySample2.reduce((ele1, ele2)=> ele1+ele2, 0)
console.log(newOrigionalReduce);

Array.prototype.myReduce = function (callback, initialVal) {
    let result = initialVal;
    const arr = this;

    let startIndex = 0;

    if (initialVal === undefined) {
        result = arr[0];
        startIndex = 1;
    } else {
        result = initialValue;
    }

    for (let i = startIndex; i < arr.length; i++) {
        result = callback(result, arr[i]);
    }
    return result;
}

const myReduceOutput = arraySample3.myReduce((ele1, ele2)=> ele1+ele2);

console.log(myReduceOutput);


//My ForEach
const arraySample4 = [1,2,4,7,9];

arraySample4.forEach((ele1)=> ele1 === 2 && console.log("GOTCHA"))
console.log(arraySample4);

Array.prototype.myForEach = function (callback) {
    const arr = this;

    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

arraySample4.myForEach((ele1)=> ele1 === 2 && console.log("GOTCHA"));

console.log(arraySample4);


//My Find
const arraySample5 = [1,2,4,7,9];

const res = arraySample5.find((ele1)=> ele1 > 2)
console.log(res);

Array.prototype.myFind = function (callback) {
    const arr = this;

    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) return arr[i];
    }
}

const myRes = arraySample4.myFind((ele1)=> ele1 > 2);

console.log(myRes);