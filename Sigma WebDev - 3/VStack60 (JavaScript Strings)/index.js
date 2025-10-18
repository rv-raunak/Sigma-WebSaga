console.log("This is Strings Analysis");
let a = "Vaibhav";

console.log(a); //prints the whole string 
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);


console.log(a[20]);   
//since it is outside the string so it returns undefined //JS is known as a very forgiving language as unlike c++ and c it doesn't halt the program and try give the least errors possible as original it was made for browsers


console.log(a.length);

//I am not using name as variable as it might give error since name used to be a global object in JS (Explore More if required and possible)
let name1 = "Vaibhav";
let name2 = "RV Raunak";
console.log(name1 + " and " + name2 + " are one and the same");

//this is known as template literals which were made to ease the life of developers by directly inserting the variables within the single line
console.log(`${name1} and ${name2} are one and the same`);
//look closely as its neither single nor double quotes rather but here it works with the backtic symbol (below the esc key) 
//besides, inserting the variables directly in template literal is called string interpolation

//escape sequences lke \n
//usually escape sequences are not much used in the code thsus ypu must know about them
 name3 = "RV\nRaunak";
 console.log(name3);


 //string properties and functions---------------->



 console.log(name2.toUpperCase()); //they are funcs 
 console.log(name2.toLowerCase());
 console.log(name2.length); //it is a property which gives a particular value
 



//  string slicing (very imp and will be used much)
console.log(name1.slice(1,5)); //same as python slicing [start, end)
console.log(name1.slice(2)); //it will slice from the given the index till the end of the string


//string replacement
console.log(name2.replace("RV" , "Rinku-Vikas"));
//if the subtring or letter to be replaced has more than one occurences then only the foremost/first occurence is replaced

//string concatenation
console.log(name1.concat(name2));
console.log(name1.concat("No One", "None", "WhoKnows?"))
//we can even use + operator here but it is more convenient 



//this removes all the whitespaces in a string(but not in between)
console.log("   Tes ter   ".trim().concat("(Testing the Gap)"));
//concat func is not necessary here it was just meant to the show if the whitespaces are there or not so it is optional and was added for the purpose of analysis


//IMP POINTS
// -> Strings are immutable in JavaScript (Thus, changes are not done in the same string)
// (hence, once the string has been created by declaration and initialization (and now its memory is allocted) so now it remains conserved and whatever funcs you apply on it actually creates a new string)

// -> Everything that can be printed can be returned to a new variable too


//Now there are many more such methods that we can explore by ourselves for which we can access the REPL of any webpages through the console window (and just clear the previous commands and then just experiment our things just like on a Python IDLE) (Refer screenshots for more clarity)
//On the JS REPL you can create a string by letting a variable which then you can put a dot after that and then the browser will show you the hell lot of options which you can explore from (even more options than the VS Code itself ig although it also works good in displaying different property options)
// EX=  b = "Vaibhav";
// b._  //the browser will show the hell lot of options, underscore is not the part of the syntax, it is just meant for analysis

//TIP FROM HARRY
// You don't need to learn/memorize these funcs by heart, just practice writing code that you will instinctively know them so well, you should/must know the easiest ways to do things efficiently so that you enjoy both life and coding
//I guess this is same thing that can be applied on DSA...just questions and practice enough that the algos become your second hand

console.log(name1, name2); //as you can see the og strings remain unaffected and thus immutability is proven here
//also space is autimatically put in between them when you use comma for no space use '+' (for concatenation)