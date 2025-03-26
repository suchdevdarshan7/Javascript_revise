

// let a = 10;
// let b = 20;

// let c = a + b; // Writing again and again!


// let d = 30;
// let f = 50;

// let sum = d + f; // Writing again and again


// Functions use dry principle ==> Do not repeat yourself!


// function sum(a, b) {
//     console.log(a + b);
// }


// let a = 10;
// let b = 20;
// sum(a, b);

// let c = 30;
// let d = 50;
// sum(c, d);

// ! 1. Anonymous function:

// function (){

// }

// ! 2. Named functions

// function MethodToBeCreated() // Function declaration :

// Inside paranthesis is called as function definition
// {
//     console.log("Method created successfully !")
// }

// MethodToBeCreated(); // Function call


// ! 3. Function with expression:

// let a = function () {
//     console.log("Hello world !")
// }

// a();

//! 4. Arrow functions

// let a = ()=>{
//     console.log("Hello world !")
// }
// a();

//! 5. IIFE Immediately invoked function expression 

(function () {
    console.log("Mongo Db is connected successfully !");
})();

//! 6. Higher Order function 

//! A function which accepts a function as an argument or returns a function is called as higher order function!

function HOF(cb) {
    cb();
    console.log("The higher order function is working")
}


//! 7. Callback function 

//! A function which is passed to another function as an argument

function Callback() {
    console.log("The callback function is working!")
}


HOF(Callback);

// FunctionCall(arguments,arguments2);

// function SampleFunction(parameters){}
