let arr = [1,2,3,4,5] //arr is like a variable only in JS
console.log(arr)   //prints the whole array like python
console.log(arr.length, typeof arr)  //gives the length of array //has the length constant like Java 
//typeof an array is given as 'object' is JS

//--------concept of mutabililty and immutability-----------//
//if I want to make changes in the same array then we can do that
//this is because arrays are mutable (changes are reflected within the same array)
//this is unlike strings which are immutable in JS as the changes are never reflected within the same string rather a new string is always generated


//accessing the elements through index
console.log(arr[0])
console.log(arr[2])
console.log(arr[4])
console.log(arr[5]) //out of range index gives undefined objects

//modifying the values in array
arr[0] =  1536; //this changes/modifies the value within the same array
console.log(arr);

//testing the same with strings
let a = "Vaibhav"; 
a[0] = 'K';
console.log(a[0])
console.log(a); //it still remains the same
console.log(a[0]);
//hence the immutability is proved

//array methods

//----1: toString(): this converts the array into strings
console.log(arr.toString());
console.log(arr.toString()[4]); //this is the 4th index value of the converted string 

//----2: join(): This replace the comma with the desired value in an array
console.log(arr.join(" and ")) 
//this method useful to display any on the frontend UI

//----3: pop(): pops and returns the last element 
console.log(arr.pop());
console.log(arr);
console.log("---------------------")
//----4: push(): pushes a new element at the last
arr.push(100);
console.log(arr.push("Vaibhav"))//this prints the element number/position (not index) and also pushes simulataneosly
console.log(arr);

