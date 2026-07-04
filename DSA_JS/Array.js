// Part 1 (Arrays) ✅

// Reverse Array
//Using new array

const arr = [1,2,3,4,5];

function reverseArr(arr){
    const result = [];
    
    let start = 0;
    let end = arr.length - 1;
    
    while(end >= 0){
        result[start] = arr[end];
        start++;
        end--;
    }
    
    return result;
}

//Using same array
function reverseArrOrig(arr){
    let start = 0;
    let end = arr.length - 1;
    
    while(end >= start){
        let tmp = arr[start];
        arr[start] = arr[end];
        arr[end] = tmp;
        start++;
        end--;
    }
    
    return arr;
}

console.log(reverseArr(arr));
console.log(reverseArrOrig(arr));


// Remove Duplicates

const dup = [1,2,2,2,2,3,3,3,4,4,4,5,6,6];


// using include
function removeDuplicates(arr){
    const result = [];
    
    for(let i = 0; i < arr.length; i++){
        if(!result.includes(arr[i])) result.push(arr[i]);
    }
    
    return result;
}

//using set
function removeDup(arr){
    const result = [...new Set(arr)];
    return result;
}

console.log(removeDuplicates(dup));
console.log(removeDup(dup));



// Rotate Array

const arr = [1,2,3,4,5];
const k = 2;


// Move Zeros
// Merge Sorted Arrays
// Two Sum
// Maximum Subarray (Kadane)
// Flatten Array