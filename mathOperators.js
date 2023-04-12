

// + plus operator
// - minus
// * times
// / divide
// % modulo

let num = 6;
let num2 = 8;

let sum = num + num2;
let product = num * num2;
let difference = num - num2;
let quotient = num / num2;

let remainder = 100 % num;

console.log(sum, product, difference, quotient, remainder);

// ===
// ==
// >
//<
// >=
// <=
// !==

if(sum >= difference){
    console.log("difference in the OG");
}else{
    console.log("sum trumps all");
}


if(4 !== 4){
    console.log("Math is broken");
}else{
    console.log("Math still works");
}

if(-1){
    console.log("is truthy")
}else{
    console.log("is falsey")
}

if(num2 % 2 === 0){
    console.log("num2 is even")
}else{
    console.log("num2 is odd")
}

num2 % 2 === 0 ? console.log("num2 is even"): console.log("num2 is odd");

// ternary

4 === 4? console.log(true); console.log(false);