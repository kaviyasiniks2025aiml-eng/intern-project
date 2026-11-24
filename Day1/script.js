function showMyMessage(){
    var a = 10;
    var b= 20;
    console.log(a+b);
}

// in java we can redeclare a variable using var, and reassign the value
//Data types in javascript
//1.primitives:number, string, boolean,null, undefined, symbol, bigint
//1.number
let c = 30;
let d= 40;
console.log(d);
//a2.String
let e ="Hello World";
let str1=`Hello World`;
let str2=`Hi Everyone`;
console.log(e);
console.log(str1);
console.log(str2);
//3.boolean
let isTrue=true;
console.log(isTrue);
console.log(typeof isTrue);
//4.null
let isValid=null;
let age = 27;
if(age>=18){
    isValid=true;
}
console.log(isValid);
console.log(typeof isValid);
//5.Undefined
let isAvailable;
console.log(isAvailable);
console.log(typeof isAvailable);
//6.Symbol
let sym=Symbol("Hello");
console.log(sym);
console.log(typeof sym);
//symbol is a unique and immutable primitive value and may be 
//used as the key of an object property
//7.BigInt
let bigInt = BigInt(123456789012345678901234567890);
console.log(bigInt);
console.log(typeof bigInt);
//2. non-primitives: object, array, function
//1.object
const person={
    name:"John",
    age: 30,
    isStudent: false,
    college:"sri eshawar college of engineering",
    address:{
        city:"chennai",
        state:"tamilnadu",
        },
        contactNumbers:[1234567890,9874563201]
}
console.log(person.age);//accessing particular value
console.log(person);//displaying all
person.college = "sri eshawar college of engineering";///update
delete person.isStudent;//delete
console.log(person);
//Array
const num = [1,2,3,4,5];
let age1= new Array(5);
for(let i = 0; i<age1.length;i++){
    console.log(age1[i]);
}
//built in array
//1.push
num.push(6);
for(let i =0;i<num.length;i++){
    console.log(num[i]);
}
console.log(num.pop());
//2.unshift
num.unshift(0);
for(let i =0;i<num.length;i++){
    console.log(num[i]);
}
//pop
num.pop();
for(let i = 0;i < num.length;i++){
    console.log(num[i]);
}
//slice
const numCopy=num.slice(2,5);
console.log(numCopy);
//functions
function name(){
    console.log("Hello World");
}
name();
name();
name();
name();
let a = 30;
let b = 40;
function add(n1, n2){
    return n1 + n2;
}
let c1 = add(a, b);
console.log(c1);
//arrow function
const multiply=(a,b)=>{
 return a*b;
}
console.log(multiply(3,5));
const divide=(a,b)=>{
    return a/b;
}
console.log(divide(50,5));
// callback function
function greet(name, callback){
    console.log("Hello "+name);
    callback();
}
function sayGoodbye(){
    console.log("Goodbye!");
}
greet("John",sayGoodbye);
//synchronous
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
//asynchronous programming
console.log("Task 1");
setTimeout(()=>{
    console.log("Task 2");
},2000);
console.log("Task 3");