"use strict";
var Person = /** @class */ (function () {
    //creating new property in constructor
    function Person(name, userName) {
        this.userName = userName;
        this.age = 25;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Natalie", "nata");
console.log(person.name);
console.log(person.userName);
person.printAge();
person.setType("Nice girl");
