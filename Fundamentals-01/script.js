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

