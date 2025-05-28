console.log("Fun With Functions")
//Sometimes, our code gets repetitive and if this happens then we have to package a particular code in a function
//we can also pass various arguments to function to do various chores 

//we can also access the pre-defined function template using the snippet (JS Abbrevation(Auto-Completion)) just like loops

//refer Harry's notes for getting even better ideas about terminolgies and concepts that are missed here

function Welcome(name) {
    console.log("Hey " + name + ". Welcome to the world of JavaScript and you're gonna achieve your potential now" );
}


function add(a,b) {
    console.log(a+b);
}

function sum(a,b, c=0, d=0, e=0) {  //c, d, e are parameters having a default value
    return (a+b+c+d+e); //we can remove the brackets as well
}

Welcome("Vaibhav"); //function call or function invocation
Welcome("Madhav");
add(67,33);
add("Vaibhav and ", "Madhav are brothers");


let a = 2, b = 3;
let result = sum(a,b);
// let result = (a,b);   //this would only print but don't assign the value as it doesn't have return
console.log("The Sum of", a + " And " + b, "is: " + result);    //Combination of + and commas


//reusability of the same code using functions
result1 = sum(5,5,5);
result2 = sum(10,9,11,1);
result3 = sum(4,7, 1, 8, 1);
console.log("The Sum of the three numbers is:", result1);
console.log("The Sum of the four numbers is:", result2);
console.log("The Sum of the five numbers is:", result3);


//unique way of handling missed values
//suppose if you don't pass a mandatory parameter (i.e. it doesn't have a default value), then value is which you didn't pass is taken as 'undefined' by default and whenever we use undefined in any operations (like sum, sub etc.) then the result is NaN (i.e. Not a Number)
//example
result0 = sum(5);
console.log("The Sum of the numbers is:", result0);
//so also its kind of an erro but still it works fine 
//refer the screenshot within the same folder for better understanding





//Arrow Functions
//fancy syntax to trap a function inside a variabl e
//These Functions are similar to Lambda Functions
//These functions have a quick and convenient syntax amd we can make a function as well as store it as a variable at the same time

//So, both func1 and func2 are also variable and function (at the same time)
//The benefit of doing is that we can pass a function in another function

//without parameters
const func1 = ()=>{
    console.log("I am an arrow function");
}



//with parameters
const func2 = (x)=>{
    console.log("I am an arrow function",x);
}



func1();
func2(24);
func2(48);
func2(100);