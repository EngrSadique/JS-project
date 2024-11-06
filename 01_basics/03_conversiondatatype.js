// All datatype convert into Number
let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33xyz" => NaN
// Null => 0
// true => 1; fasle => 0
// undefined => NaN



// All datatype convert into Bollean
let isLoggedIn = 1

let bolleanIsLoggedIn = Boolean(isLoggedIn)
console.log(bolleanIsLoggedIn);

// Conversion to Boolean
// 1 => true
// 0 => false
// "" => false
// "Siddique" => true
// Null => false
// undefined => false