//Debounce

const sum = (a,b) => {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("Enter", a+b)
            res(`Success ${a+b}`);
        }, 300)  
    })
}


function debounce(fn , delay = 300){
    let timerId;
    
    return function(...args){
        if(timerId) clearTimeout(timerId);
        
        timerId = setTimeout(()=>{
             fn(...args)
        }, delay)
    }
}


const debounced = debounce(sum);

debounced(1, 2);
debounced(3, 5);

//Throttle

function throttle (fn, delay = 300) {
    let executed = false;

    if(executed) return;
    
    return function(...args){
        if(!executed) {
            fn(...args);
            executed = true;
        }
        
        setTimeout(()=>{
            executed = false;
        }, delay)
    }
}

const throttled = throttle(sum, 500);

throttled(8,9);
throttled(8,19);
throttled(8,19);

// Polyfill MAP


Array.prototype.myMap = function(callBackFn){
    const arr = this;
    console.log("this", arr);
    const result = [];
    
    arr.forEach((value, indx)=>{
        result[indx] = callBackFn(value, indx, arr);
    })
    
    return result;
}

const ar = [1,2,3,4,5,6];

// const newArr = ar.map((a)=>{
//     return a*2;
// })

// console.log("orig", newArr)


const arMy = ar.myMap((a)=>{
    return a*2;
})

console.log("MYMAP", arMy);


// Polyfill reduce


const arRed = [1,2,4,7,9];

// const red = arRed.reduce((a,b)=>{
//     return a*b;
// })

// console.log("OrigReduce", arRed, red)

Array.prototype.myReduce = function(callBackFn, initialValue){
    
    const arr = this;
    let result = initialValue || arr[0];
    let key = initialValue ? 0 : 1;
    
    for(let i = key; i < arr.length; i++){
        result = callBackFn(result, arr[i]);
    }
    
    return result;
}


const red = arRed.myReduce((a,b)=>{
    return a*b;
}, 0);

console.log("MyReduce", red)