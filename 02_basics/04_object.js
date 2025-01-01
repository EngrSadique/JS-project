//let obj1 = new Object () // SingleTon Object

//let obj2 = {}   // Object Litral

// console.log(obj1);
// console.log(obj2);


let whatsappUser = {}

whatsappUser.id = "1234";
whatsappUser.name = "Siddique";
whatsappUser.isLoggedIn = false;

// console.log(whatsappUser);

let Username = {
    fullname: {
        userfullname: {
            firstName: "Muhammad",
            lastName: "Siddique",
        }
    }
}

// console.log(Username.fullname.userfullname.firstName);


// let obj1 = {1: "a", 2: "b"}
// let obj2 = {3: "c", 4: "d"}
// let obj3 = {5: "c", 6: "d"}

// let obj4 = Object.assign( {}, obj1, obj2, obj3)

// console.log(obj4)

let obj5 = {1: "Siddique", 2: "Sid@gmail.com",}

let obj6 = {3: "Usman", 4: "Us@gmail.com",}

let obj7 = {5: "Ali", 6: "Ali@gmail.com",}


let obj8 = Object.assign(obj5 , obj6 , obj7)


// console.log(Object.keys(obj8));
// console.log(Object.values(obj8));
// console.log(Object.entries(obj8));



// Objest Destructure 

let course = {
    courseName: "Js Master",
    price: "999",
    courseInstructor: "Siddique",
}


const {courseName: name} = course

// console.log(courseInstructor);
console.log(name);

