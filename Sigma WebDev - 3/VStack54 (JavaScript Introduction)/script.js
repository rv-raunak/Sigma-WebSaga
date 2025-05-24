alert("Welcome To My Page");

//now apart from alert we also have console.log() which has imp use-cases

console.log("Code is running")
//it logs the message in the console
//open inspect and go to console section to see the message being printed there(its just like output creen or command prompt used by other programming languages)
//btw apart from this we also have console.error, console.warning but console.log is the most widely used
console.log("Code is  still running")
console.log("Code is gonna run till the end")
//thus, using console.log, you can check until where your script execution has reached which makes debugging a lot easier



// unlike html and css, which usually gets updated automatically, we have to reload the page manually again to see the new chnages




//now as of now, we're not gonna learn about variables so we'll just be creating them using the var keyword. Other keywords like 'let' or 'const'
var age = prompt("Enter your Number")
console.log("Your age is " + age)
//so prompt here beasically takes input from the user and we store the input in variable age and then we print it using console.log

var isTrue = confirm("Do you want to be among the Greatest People On This Planet?")

if(isTrue){
    console.log("Let's do it then. And now, you are going to be among the greatest Entrepreneurs in the world too.")
}
else{
    console.log("An average life awaits for you. Good Luck Wasting Your Potential.")
}


//----------we can also change styles of Javascript----------//

document.title = "Title Modification By JS"
//this changes the title of document (Modifies the pre-set title by title tag in html)

//we also have css styling properties counterparts available in JavaScript
//remember, it adds inline-css in body tag for changing the background color


document.body.style.backgroundColor = 'gold'
//Note:Every New Styling or modification appears only after the alert, prompt, confirm boxes are loaded and passed(Find the reason behind it and the cure for it if its available)



//Until now it was meant to show, what JavaScript was actually capable of. As Harry mentioned, our goal would be to learn Javascript (as for frontend rigth now) enough to manipulate the working of buttons, play with DOM, id, class and query selectors etc. and at the we can make interactive websites.




//------------------installing node.js-------------------//
// Rememeber: as per Harry we didn't select the "automatically install necessary tools section" as he says that it takes a lot of time (So, I might re-install it in the future if necessary)

// Now, after installing it, just go the terminal as type: node --version  (to check the version to know if its correctly installed or not)

//New Tip: You can Right Click on Window Start Icon to open erminal (in fact theere are many options there)

/*
Now, what is node.js exactly?
->Now Chrome uses JavaScript's V8 engine that to run your script. And a software engineer named Ryan Dahl removed it and put JavaScript's Runtime in C++ Program. And after that, a great thing happened as JavaScript's powers could be used in our Computer as well (i.e. it was possible to use it or server directly ). 

-> This means that just we run programs in C++, Java or Python, now we can also run a JavaScript program with the help of Node. (You can check it by running this scrip in VS Code after installing node and restarting VS code)

//------>Important points while running ---->
->Just like you like <g++ -o filename.cpp> for c++
similary use just have to write <node filename.js>

->But, remember that this particular script won't the same as browser, as particular elements that are mentioned here like prompt, confirm, alert etc. are only available in the browser (and the node compiler/interpreter (search about it) will not recognise those keywords). And thus, we would make a seperate new.js file with on console.log statements so that we can test the functioning appropriately.

*/


/*
Power of node.js
->Whatever work that I could do inside a browser can now also be done in script.js(or any other filename) file within my computer.

-> I can practice Javascript here by running the js script throught this node

->We using nodejs can write programs like:
 ->organizing your folder content
 ->Make new folders
 ->Moving files from one folder to another
 ->Connecting to internet and downloading a file
 (so we can make softwares to do the above chores and even more)
 (so all these things are possible as you just have to write a javascript program and run it with node...thus, the possibilities of nodejs is endless)
 ->We'll also learn hwo to make the backend of a website with the help of nodejs

*/


/*
NPM-Node Package Manager
->This helps in installing packages in node.js
->If someone else has written a package or code then we can use it in our node(i.e. javascript) programs.
->And as per Harry, it's a very amazing thing because we will use a lot of things as a package. And while making websites, we'll install and use  packages as we will not write every code again and again. Thus, we will solve our problem at hand

By setting up nodejs, we have setted up NPM by default too
->Just write 'npm' on the run terminal and you'll get eveything about it and you can also check it by wriite 'npm --version'


*/



/*
Summary:
->JavaScript can be used in both backend and frontend
    -> For backend (by Using nodejs)
    -> For frontend (by using script tag or linking the script file by including in your html file as shown in earlier)
-> Now, the JavaScript that is running in node.js and the Javascript that is running in your browser have a lot of difference since we get some extra elements in the browser like prompt, confirm, document.getElementById, window object, document object etc. (We'll learn about them afterwards) which are not avaiable for backend javacript. But backend javascript has its own features that is not possible to access through frontend javascript like we can read, alter, print etc. the content of a file or folder.

So in a nutshell, althought they are not same but they have a very high similarlity since both are javascript, both have exactly same syntax. Its just that nodejs uses javascript in the backend whereas the content in script.js (which is included in your html file) so that javascript is meant to run in a browser and thus in accordance to it, elements are available in it.


*/ 

    