console.log("Let's Begin...");

var a = 5;       //js automatically detects a's datatype that its a number
var b = 7;
var c = "Vaibhav";  //JavaScript automatically consideres it a string a sits in double quotes(collection of characters)
console.log(a+b+8); //basic arhtimetic is possible through js

//in order to find the datatype of a variable we use the 'typeof' keyword
console.log(typeof a, typeof b, typeof c, 8+2 + " Vaibhav");



//variable naming rules are same as Java 
//we can only use _, $ and a letter in the beginning, 

//-------------var VS let VS const---------------//

//var is globally scoped whereas as let and const are block-scoped
//if you declare let outside any block so it also becomes globally scoped
//thus let is very felxible and its recommeded to use let instead of var in most of the cases
//const is used when you don't want to change the value of a particular variable even not accidently by your future self

const a1 = 6;
// a1=a1+1;   //updation not allowed //Uncaught TypeError: Assignment to constant variable.


//  Redeclaration Rules with Examples:
// 'var' allows redeclaration — this will not throw an error
var city = "Delhi";
var city = "Mumbai"; // No error

// 'let' and 'const' do NOT allow redeclaration in the same block
let country = "India";
// let country = "Bharat"; //  Error: Identifier 'country' has already been declared

const pinCode = 110001;
// const pinCode = 560001; //  Error: Identifier 'pinCode' has already been declared



//scope demonstration
console.log("Scope Demonstration --------->")
let x = 10;
{
    let x = 12;
    console.log(x);   //this will pick the nearest scope
}

{
    console.log(x);   //global decalartion works inside blocks too until explicitly changed the former one
}

console.log(x);  //prints the global instance only




// ---------------------dataypes------------------------->
/*
In Javascript, we have have two types of datatypes:
    ->primitive datatypes: These are some basic datatypes which act as the basic building blocks for other data types

    ->there are 7 primitive datatypes in Javascript:
        ->Null: means nothing
        ->Number: Includes both integers and decimals numbers
        ->String: Anything that is within double quotes " "
        ->Symbol: We'll learn about it later
        ->Undefined: Its declaration without initialization i.e. we defined a variable but with no value  (since var,let, const all determine dataypes through the values stored in them)
        ->Boolean: that has 2 values -> true and false
        ->BigInt: helps in storing big integers

    ->objects (non-primitive datatypes): These are user-defined datatypes and you can make your favourite datatype with the help of primitive datatypes

*/

// Note: In Javascript, we have a Javascript linter in VS code which tells where you are doing wrong, and this process is called as linting
// Ex: If you are re-declaring a const or let variable then it will highlight with red (as the browser warns you that you are doing it wrong)


let p  = "Tithi" ;
let q = 19;
let r = 3.55;
const s = true;
let t = undefined;
let u = null;

console.log(p, q, r, s, t, u)
console.log(typeof p, typeof q, typeof r, typeof s, typeof t, typeof u)

//as you can see that everything seems good. But, the datatype of null is shown to be object in Javascript and it has a story behind this and its also popular interview question
// You can check the answer out in this link:
// https://stackoverflow.com/questions/18808226/why-is-typeof-null-object

//----------------objects in JavaScript-------------------//
/*
 An object in JavaScript is nothing but a combination of key-value pairs
*/
let obj = {
    name: "Vaibhav",  //we could have put name is double quotes but its not required since it has no spaces in between

    "job role": "Entreprenuer",  //here putting job role in double quoutes was necessary it has space in b/w ad I had to take it as a single word only
    //but this valid for keys only and as for values if I am taking a word be it with or without spaces the I need to put it in double quotes always

    age: 19,

    is_succesful:  true  //just to show that boolean values can also be added

}

console.log(obj);

obj.salary = "1000 Billion Dollars";  //new key-value pair added
console.log(obj);

obj.name = "RV Raunak";  //existing value was modified
console.log(obj);


//thus we can add new key-value pairs and can even modify the existing ones, in fact later we'll discover that the value in key-value pairs can be any primitive dataype, even it can also be an object and can even be a function