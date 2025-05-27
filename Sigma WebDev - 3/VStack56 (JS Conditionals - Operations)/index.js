console.log("Let's start again with the Analysis Session On JavaScript Conditionals")
//do referthe pdf notes by Harry

//fun-fact: Semi-colon is optional in JavaScript
{

    let age = 17;
    let grace = 2;
    
    
    
    //conditional statements
    if((age+grace)>=18 /*this is a condtion*/)  //--->This is the if statement
    {
        console.log("You Can Drive")
        //The whole block = if block
    }
    else{
        
        console.log("You Can't Drive") 
    }
    
    //arithmetic operators
    console.log(age+grace);
    console.log(age-grace);
    console.log(age*grace);
    console.log(age/grace);
    console.log(age**grace);  //exponentiation same as Python //base**power
    console.log(age%grace);  
    
}



//assignment operators
let age = 17;
let grace = 2;

age+=grace;  //increment-assignment operator
if((age)==18){  //comparsion operator here (not included in assignment operators)

    console.log("You Are Eligible")
}

else if(age==0){
    console.log("Are You Kidding?")
}

else{
    console.log("You Are Not Eligible") 
}
//the above is called as the if-else if -else ladder just as in python we have if-elif-else ladder
//And only one block of code is executed here
//Multiple else-if statements can be there

//About node js REPL (Read_Evaluate Print Loop)
//Just like we have IDLE for python (For performing quick checks and operations), similarly in the same way we have REPL for JavaScript

//We can access REPL through terminal by just typing node and then the REPL division opens and it has JavaScript Engine that runs behind

//Here we can use it as a calculator
//we can even ssign values to the variables with using let, const or var and we can use those variables anywhere and they can be updated any time.








//Differemce b/w == and ===?

//The former one only compares the value and not the dataype whereas the latter one compares both the value as well as the dataype



//logical operators (see the images)























//JavaScript Ternary Operators
//Its kind of like a short-hand that is capable of applying if else ladder within one line ony

a=6;
b=8;
let c = a>b ? (a-b): (b-a);
console.log(c);
/*
the above code translates to:
if(a>b){ 
    let c=a-b
}
else{   
    let c=b-a
}

*/
/*
Explanation:

In this code, 'a' and 'b' are assigned values without using 'let', 'const', or 'var'. 
In non-strict mode, JavaScript treats such variables as implicit global variables, 
which is why the code runs without errors.

However, this is bad practice because:
- It pollutes the global scope,
- It causes bugs in larger programs,
- It breaks in strict mode ("use strict").

The variable 'c' is declared properly using 'let', and the ternary operator calculates 
the absolute difference between 'a' and 'b'.

Always use 'let', 'const', or 'var' to declare variables properly.
*/
