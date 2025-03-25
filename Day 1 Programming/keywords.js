

//! let const var



// var a; //Declaration --> possible
// a = 10; // Intialization --> possible 

// var a = 10; // Intitlaze and declare in same line --> possible 

// var a = 20; // redeclare and reintialize is also possible 

// console.log(a)


//! let keyword

// let a; // Declaration => possible
// a = 10; // Intitalzation => possible

// let b = 10; // declare and intialize in the same line 

// let a; // Not possible to redeclare // Uncaught SyntaxError

// b = 30; // reintiliaze is possible in let keyword


// console.log(b)


//! const keyword

// const a ; // Declaration => not possible 
// a = 10 ; // Intialize => not possible 

const key = 20; // declare and initialize in the same line ==> possible
key = 100; // not possible to reintialize //  Uncaught TypeError

console.log(key)


// const key; //Cannot redeclare block-scoped variable 
