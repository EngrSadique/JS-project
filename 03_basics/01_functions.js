// function myName (){
//     console.log("Sadique");
    
// }

// myName()

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
    
// }

// addTwoNumber(15, 15)


// function addTwoNumber(number1, number2) {
//      return number1 + number2  
// }

//  let result = addTwoNumber(15, 15)
// console.log("result: ", result);


function userLogInMessage (userName) {
    if(userName == undefined){
        console.log("please logged in");
        return
    }
    return `${userName} is just logged in`
}
console.log(userLogInMessage())