//task is to make a faulty calculator using JavaScript

/*
This faulty calculator does the following:
 1. It takes two numbers as input from the user
 2. It performs wrong operations as follows:
    + ----> -
    * ----> +
    - ----> /
    / ----> **
    ** ----> *

 3. But, here is a catch: It operations wrong operations 10% of the times
 (Refer the reference pdf to understand about random function in order to achieve it)

 ->Thus, all you need to do is use some if-else statements and the random function to achieve the desired results for this task


*/


function faulty() {
    if(option=="+"){
        alert("Result: " + (num1-num2));
    }
    
    else if(option=="-"){
        alert("Result: " + (num1/num2));
    }
    
    else if(option=="*"){
        alert("Result: " + (num1+num2));
    }
    
    else if(option=="/"){
        alert("Result: " + (num1**num2));
    }
    
    else if(option=="**"){
        alert("Result: " + (num1*num2));
    }
}


function not_faulty() {
    if(option=="+"){
        alert("Result: " + (num1+num2));
    }
    
    else if(option=="-"){
        alert("Result: " + (num1-num2));
    }
    
    else if(option=="*"){
        alert("Result: " + (num1*num2));
    }
    
    else if(option=="/"){
        alert("Result: " + (num1/num2));
    }
    
    else if(option=="**"){
        alert("Result: " + (num1**num2));
    }

}


//IMPORTANT ALERT: Do refer the Doubts and Discussion pdf within the same folder in order to know about lexical scoping and copying code through functions. It's very imp as it clears a very basic but fundamental doubt I had while making this program. And clarification of that is equally relevant to other languages like C++, Java and Python. (So, You must refer it)

let num1, num2, probability;
var UseAgain = true;      //this seems better here as declaring it as true inside while loop seems like an error (although its not and can be performed too)
while(UseAgain)
{
    probability=Math.random()
    num1 = prompt("Enter First Number: ")
    num2 = prompt("Enter Second Number: ")
    option = prompt("Enter the Sign Of Operation")
    
    
    //as prompt returns string by default so we must change its dataype to perform operations
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    

    //we didn't pass parameters in funcs as the parameters are declared globally so both the functions can access them
    if(probability>0.1){
        not_faulty();  
        console.log("Calculator is NOT Faulty this time")
    }

    else{
        faulty();
        console.log("Calculator is Faulty this time")
    }

    UseAgain = confirm("Do want to Continue Again?");
    if(UseAgain == false) break;
    
}