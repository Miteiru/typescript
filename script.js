"use strict";
//string
var myName = 'Natalie';
//number
var myAge = 25;
//boolean
var hasHobbies = true;
//assign Types
var myRealAge;
myRealAge = 27;
// myRealAge = "27";
//array
var hobbies = ["Cooking", "Piano"];
hobbies = [100];
console.log(typeof hobbies);
//tuples(array with mixed types and limited number)
var address = ["Superstreet", 90];
//enum (make numbers more expressive)
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue; //displays 101
console.log(myColor);
//any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
//functions
function returnMyName() {
    return myName;
}
console.log(myName);
//void (no return statement)
function sayHello() {
    console.log("Hello!");
}
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2,"Max"));
console.log(multiply(2, 10));
//function types (assigning by ES6 arrow syntaxis)
var myMultiply; //defines arguments and return types
myMultiply = multiply;
console.log(multiply(5, 2));
//objects
var userData = {
    name: "Max",
    age: 27
};
//complex objects
//data is an array of numbers
//output is a boolean function with one boolean type argument which return array of numbers
var complex = {
    data: [100, 99, 98],
    ouput: function (all) {
        return this.data;
    }
};
console.log(complex);
var complex2 = {
    data: [100, 99, 98],
    ouput: function (all) {
        return this.data;
    }
};
//multiple types with union types (assigns with OR(single pipe line))
var myRealRealAge = 27;
myRealRealAge = "27";
//check types
var finalValue = 20;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
//never type (TypeScript 2.0)
//not to get confused with void!
//not returns nothing, but never returns anything
function neverReturns() {
    throw new Error("an Error!");
}
//nullable types(TypeScript 2.0)
var canBeNull = 12; // automatically assigns number type, but null can be assigned as type
// canBeNull = null;
var canAlsoBeNull; //any type
canAlsoBeNull = null;
var canThisBeAny = null;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Natalie",
    bankAccount: bankAccount,
    hobbies: ["Piano", "Games"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
