console.log("Let's Learn Loops")   
//we use loops to perform basic functions of JavaScript
//Harry strictly says to study his notes specially regarding such concepts to have better and complete clarity

let a = 1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);
// console.log("\n");
//now if I go on explaining writing this a million times then it would both be  hectic and inefficient and probably after so many lines my editor will hang (Thus we have constructed loops for our repetitive tasks)


//We have 5-types of loops here

//for loop //Use the abbrevation to write it and press tab to chnage name of counter and the array(if present)
for (let i = 0; i < 100; i++) {
    console.log(a + i)
}



//for in loop : It gives us the keys of an object
let obj = {
    name: "Vaibhav",
    role: "Entrepreneur",
    company: "RV Group Of Industries"
}



for (const key in obj) {
        const element = obj[key];
        console.log("Key-Value Pair:", key, element); //so here < , > works acts like space (kinda works like C++ too)
    }



//for-of loop
//It used for iterable data-structures like Strings, Arrays etc.
for (const iterator of "RV Raunak") {
    console.log(iterator)
    
}



//while loop
{
let i = 1;
while(i<6){
    console.log(i);
    i++;
}
}






//do-while loop
//Not much used and is usually avoided
//but it fits directly in some use-cases like when we have to run a loop at least once

let i = 10;
do {
    console.log(i);
    i++;
} while (i<6);

//so the flow is like this: it moves through the do part(no matter what the condtion is and then after running for the first time it starts checking the condition)
//thus here even 10>6 still it executed for once but since it didn't pass the condtion so it didn't continue