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

const arrRot = [1, 2, 3, 4, 5];

function rotateArr(arr, k) {
    let len = arr.length;
    k = k % len; // Handles cases where k is greater than array length

    // Helper function to reverse a section of the array
    function reverse(start, end) {
        while (start < end) {
            let tmp = arr[start];
            arr[start] = arr[end];
            arr[end] = tmp;
            start++;
            end--;
        }
    }

    reverse(0, len - 1); // Step 1: Reverse whole array -> [5, 4, 3, 2, 1]
    reverse(0, k - 1);   // Step 2: Reverse first k -> [4, 5, 3, 2, 1]
    reverse(k, len - 1); // Step 3: Reverse the rest   -> [4, 5, 1, 2, 3]

    return arr;
}

console.log("Rotate: ", rotateArr(arrRot, 2)); // Output: [4, 5, 1, 2, 3]


function rotateArrSlicing(arr, k) {
    let len = arr.length;
    k = k % len;
    
    // Take the last 'k' elements and put them in front of the rest
    return [...arr.slice(len - k), ...arr.slice(0, len - k)];
}

console.log("Rotate: ", rotateArrSlicing([1, 2, 3, 4, 5], 3)); // Output: [4, 5, 1, 2, 3]

// Move Zeros
function moveZeros(arr) {
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[index], arr[i]] = [arr[i], arr[index]];
            index++;
        }
    }
    return arr;
}

console.log(moveZeros([0,1,0,3,12]));

// Merge Sorted Arrays

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;

    const result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length)
        result.push(arr1[i++]);
    while (j < arr2.length)
        result.push(arr2[j++]);
        
    return result;
}

console.log(merge([1,3,5],[2,4,6]));

// Two Sum

const arrSum = [-4, 2, 7, 6, 5, 4, 1];

function targetSum(arr, target){
    const mp = new Map();
    
    for(let i = 0; i < arr.length; i++){
        const compliment = target - arr[i];
        
        if(mp.has(compliment)) return [mp.get(compliment), i];
        
        mp.set(arr[i], i);
    }
    
    return [-1, -1];
}

console.log("TargetSum, ", targetSum(arrSum, 9));

// Maximum Subarray (Kadane)
const mix = [-2,1,-3,4,-1,2,1,-5,4];

function maxSum(arr){
    let mx = arr[0];
    let tmp = arr[0];
    for(let i = 1; i < arr.length; i++){
        tmp =  Math.max(tmp + arr[i], arr[i]);
        mx = Math.max(mx, tmp);
    }
    return mx;
}

console.log("maxSum",maxSum(mix));

// Nth Largest num

//No duplicates
const sample = [1,-4,2,54,6,7,77,34,99,1000]

function nthLargest(arr, n){
    arr.sort((a, b) => b - a);
    const len = arr.length;
    return arr[n-1];
}

console.log("nthLargest",nthLargest(sample, 5))

//With duplicates

const sample1 = [1,-4,2,54,6,7,77,77,77,77,34,34,34,99]

function nthLargestDup(arr, n){
    arr = [...new Set(arr)];
    arr.sort((a, b) => b - a);
    const len = arr.length;
    return arr[n-1];
}

console.log("nthLargest",nthLargestDup(sample1, 3))

// Flatten Array

const nestd = [1,2,[3,[4,5,[9],8]],7];

function flatn(arr){
    return arr.flat(Infinity);
}

console.log("Flatten: ",flatn(nestd));

//Recursive FLatn
const nestd2 = [1,2,[3,[4,5,[9],8]],7];

function flatnRec(arr, level = 1){
    const result = [];
    
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i]) && level > 0){
            result.push(...flatnRec(arr[i], level-1));
        }
        else{
            result.push(arr[i]);
        }
    }
    
    return result;
}

console.log("Flatten Reccursive: ",flatnRec(nestd2));