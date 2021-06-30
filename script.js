console.log("hello world")


// let is a keyworkd that tell js we are setting up a variable
// x is the name of the variable sometimes called reference
// = is known as the assign operator
// 5 is the literal value, otherwise what the x will represent
let x = 5;

// whenyou set up a variable it is known as a declaration
let y;
// when you set  a value thats known as initialization
y = 3;

let z = 6 + 7;

console.log("the value of z is " + z)

console.log(`the value of x is ${x}`)

console.log("the value of y is " + y)

const MY_CONST = 7

console.log(MY_CONST)
// MY_CONST = 9 would not work, you can not reassign const

let myString = "this is a string value"
console.log(myString)

//below is a number
//numbers will generally respect arithmetic
let myNumber = 100;
let myDecimalValue = 0.45;

//boolean is true or false,, show or do not show. they can be nothing else
// they align neatly with the state of a bit
// which is either 0 or 1

let myBoolean = true
let myOtherBoolean = false

let myVariable ="abc";
console.log(typeof myVariable);

myVariable = 1
console.log(typeof myVariable);

let coercedVariable = 7 + 7 + 7
console.log(`the value of coercedVariable is ${coercedVariable}`)

// challenge 3
for (let i = 99; i >= 0; i--)
console.log(`${i} bottles of beer on the wall`);
    // if (i === 0)
    // console.log('we need more beer')

    // trying to commit