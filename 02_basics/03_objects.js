

JsUser = {
    name: "Enku"
}

JsUser.greeting = function(){
    console.log("Welcome Enku");
}

// JsUser.greeting();

JsUser.greetingWithName = function(){
    console.log(`Welcome to Js ${this.name}`);
    
}

// JsUser.greetingWithName()
// console.log(JsUser.greeting);


let obj1 = {1: "a", 2: "b"}
let obj2 = {2: "c", 4: "d"}
// let obj3 = Object.assign({}, obj1, obj2)
let obj3 = {...obj1, ...obj2}
console.log(obj3);


