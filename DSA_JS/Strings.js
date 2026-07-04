// Part 2 (Strings)
// Character Frequency
const Input= "javascript";

function freq(str){
    const res = {}
    for(let i = 0; i < str.length; i++){
        res[str[i]] = (res[str[i]] || 0) + 1;
    }
    return res;
}

console.log("Freq", freq(Input))

// Reverse String

function rev(str){
    let ans = ""; 
    let i = str.length-1;

    while(i>=0){
        ans = ans + str[i];
        i--;
    }
    return ans;
}


console.log("reverse:", rev(Input))

// Palindrome

const palinCheck = (str) => {
    let i = 0;
    let j = str.length-1;
    
    while(i<=j){
        if(str[i]!==str[j]) return "NOT A PALINDROME";
        i++;
        j--;
    }
    
    return "PALINDROME";
}

console.log("IsPalindrome", palinCheck("hoooqh"))


// Anagram

const AnaCheck = (str1, str2) => {
    const freq = {};
    
    if(str1.length !== str2.length) return false;
    
    for(let i = 0; i < str1.length; i++){
        freq[str1[i]] = (freq[str1[i]] || 0) + 1;
    }
    
    for(let i = 0; i < str2.length; i++){
        if(!freq[str2[i]]) return false;
        freq[str2[i]]--;
    }
    
    return true;
}

console.log("Anagram", AnaCheck("oo", "ii"))


// First Non-Repeating Character
function firstNonRepeating(str) {
    const freq = {};
    for (const ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    for (const ch of str) {
        if (freq[ch] === 1) {
            return ch;
        }
    }

    return null;
}

console.log(firstNonRepeating("swiwss"));


// Reverse Words

const reverseWords = (sen) => {
    return sen.trim().split(" ").reverse().join(" ");
}

console.log(reverseWords("Hello I am Here!!  "))


// Valid Parentheses

function paren(p){
    if(p.length % 2 !== 0) return false;
    const stack = [];
    
    const pairs = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    
    for(let i = 0; i < p.length; i++){
        if(p[i] == "(" || p[i] == "{" || p[i] == "[") stack.push(p[i]);
        
        else{
            if(stack.pop() !== pairs[p[i]]) return false;
        }
    }
    if(stack.length ===0)
    return true;
    
    return false;
}


console.log(paren("[](){}[)"))