// Part 4 (Data Structures)
// Stack

class Stack{
    constructor(){
        this.stack = [];
        this.top = 0;
    }
    
    push(val){
        this.stack[this.top] = val;
        this.top++;
    }
    
    pop(){
        this.top--;
        const value = this.stack[this.top];
        delete this.stack[this.top];
        return value;
    }
    
    peek(){
        return this.stack[this.top-1];
    }
    
    getSize(){
        return this.top;
    }
}


// Queue

class Queue{
    constructor(){
        this.queue = [];
    }
    
    push(val){
        this.queue.push(val);
    }
    
    pop(){
        if(this.queue.length == 0) return null;
        this.queue.splice(0, 1);
    }
    
    peek(){
        return this.queue[0];
    }
    
    getSize(){
        return this.queue.length;
    }
}

// Binary Search

const a = [1,2,4,5,6,7,9];
const target = 3;

function binarySearch(arr, target){
let start = 0;
let end = arr.length-1;

while(start<=end){
    let mid = Math.floor(start + (end-start)/2);
    
    if(arr[mid]==target) return mid;
    else if(arr[mid] > target) end = mid -1;
    else start = mid + 1;
}
return -1;
}

console.log(binarySearch(a, target));

// Bubble Sort

const arr = [2,1,4,9,6,8,5];

function bubbleSort(arr){
    let len = arr.length;
    
    for(let i = 0; i < len - 1; i++){
        for(let j = 0; j < len - i - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr))


