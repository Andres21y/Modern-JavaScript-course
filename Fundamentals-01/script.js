{/**-------Values and Variables -------*/ }


let firstName = 'Pepito';
let second_name = 'Pinocho';
let $fistUser = 'Super Man';
let fruits = ['mango', 'coconut'];
let firstNumber = 23;
let secondNumber = 57;


{/**-------practice -------*/ }

{/** LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions)
2. Log their values to the console */}


let country = 'colombia';
let continent = 'America';
let population = '30000000'


let data = `data===> ${country} is on the  ${continent}, it's a number population about ${population} people.`
console.log(data)



{/**-------Data Types -------*/ }

let varNumber = 43;
let varstring = 'Batman';
let varBoolean = varNumber > 20 ?? varNumber;
let varUndefine;


//-1 Number
console.log('varNumber==>', typeof varNumber);

//-2 String
console.log('varstring==>', typeof varstring);

//-3 Boolean
console.log('varBoolean==>', typeof varBoolean);

//-4 Undefine
console.log('varUndefine==>', typeof varUndefine);

//dinamic typing
varUndefine = null;
console.log('varUndefine==>', typeof varUndefine);

varUndefine = 'hi!';
console.log('varUndefine==>', typeof varUndefine);



{/**-------Let, Const and Var -------*/ }

let age = 30;
age = 31

console.log('age==>', age);

const agetwo = 30;
//agetwo = 31 /**----------error, we can not assign the constants */

let races;  /**---------declarations doesn't need to be initialized with let

// const races;     /**---------declarations must be initialized with const*/

var type = 'fast';

type = 'electric'

console.log('age==>', type);


{/**-------Basic Operators -------*/ }

const lastYear = 2027;

/**minus */
const currentAge = lastYear - 1990;

/**plus */
const plusAge = lastYear + 10;

/**multiply */
const mulYear = lastYear * 2;

/**divide */
const divYeare = 131 / 2;
console.log(Math.floor(divYeare))


/**remainder */
const divYear = 131 % 2;
divYear


/** assignment operators */

let x = 10 + 5;
x += 10 /** x = ( x + 10 )*/
x *= 10 /** x = ( x * 10 )*/
x++ /**add in one */
x-- /**minus in one */


/** camparison operators */
console.log(10 > 100);
console.log(10 < 100);
console.log(100 >= 100);
console.log(10 <= 100);
console.log(10 > 100);

/** Precedence operators */


let number = 1;
let numberOne = 0;



console.log(numberOne >= number)
console.log(numberOne > number)

console.log(numberOne === number)

console.log(numberOne <= number)
console.log(numberOne < number)


let xe, ye;

xe = ye = 25 - 10 - 5;

console.log(xe, ye)

let agefirst = 10;
let ageSecond = 25

const operation = (ageSecond + agefirst) / 2;

operation