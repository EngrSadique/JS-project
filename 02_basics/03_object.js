const mysmbl = Symbol("This is a symbol value")

const obj1 = {
    name: "Siddique",
    age: 28,
    email: "jattsiddique@gmail.com",
    location: "Sargodha",
    isLoggedIn: false,
    [mysmbl]: "value",
    arr: ["Monday", "tuesday"]
}

obj1.greeting = function() {
    console.log("Assalam-o-Alaikum");
}

obj1.greetingTwo = function() {
    console.log(`Assalam-o-Alaikum, ${this.name}`);
}

// Object.freeze(obj1);

// obj1.email= "Ali@gmail.com"

// console.log(obj1);

console.log(obj1.greeting());
console.log(obj1.greetingTwo());














