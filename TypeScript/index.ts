// TYPESCRIPT BASICS

let age: number = 12;

if(age < 50) age+=10;

console.log(age);


let num: number[] = [1,2,3];

let mut = num.map((n)=> n.toString())

console.log(mut);

//Tuple
// 1, Ponu

let user: [number, string] = [21, 'Anubhav'];

// user.push is a GAP in typescript which should be fixed
user.push("PONU");

//Enum

enum Size {Small = 's', Medium = 'm', Large = 'l'}; // const enum can also be used to help js to generate mall code

let mySize: Size = Size.Medium;

console.log(mySize);

//Functions:

function calculateTax(income: number, taxYear: number = 2019) : number{
   if(taxYear < 2022) return income*1.2;
   else return income*1.3;
}

calculateTax(50000);

// Objects:

let employees : {
    readonly id: number,
    name: string,
    retire: (date: Date) => void;
} = {
    id: 1,
    name: 'Yo',
    retire: (date: Date)=>{
        console.log(date);
    }
}

// employees.id = 7; NOT possible

employees.name = "No Yo"



//Advance TS

// Type Alias

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void;
}

let employees1 : Employee = {
    id: 1,
    name: 'Yo',
    retire: (date: Date)=>{
        console.log(date);
    }
}

console.log(employees1);


//Union

function kgToLbs(weight: string | number): number {
    if(typeof(weight) === 'number') return weight*2.2;
    else{
        return parseInt(weight)*2.2;
    }
}

console.log(kgToLbs(21));


// Intersection types

type Draggable = {
    drag: ()=> void
}

type Resizaable = {
    resize: ()=>void
}

type UiWid = Draggable & Resizaable;

const box: UiWid = {
    drag() {
        
    },
    resize() {
        
    },
}

console.log(box);

// Literal types

type Metric = 'cm' | 'inch';

const len: Metric = 'cm'

console.log(len);


// Nullable Types

function greet(name: string | null){
    if(name)
        console.log(name.toUpperCase());
    else
        console.log('Hola');
}

// greet(null); -> error if null type was not added

greet('Anubhav');

// Optional Channing

type Customer = {
    birthday: Date
}

function getCust(id: number) : Customer | null | undefined{
    return id===0 ? null : {birthday: new Date()}
}

let cus = getCust(0)

// if(cus !== null && cus !== undefined)
    console.log(cus?.birthday?.getFullYear());


// Optional element access operator

//customer?.[0]