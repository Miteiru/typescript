// //let & const
// let variable = "Test";//block scope
// console.log(variable);
// variable = "Another value";
//
// const maxLevel = 100;
// console.log(maxLevel);
// // maxLevel = 99; can't change a constant
//
// //block scope
// function reset() {
//   let variable = null;
//   console.log(variable);
// }
// reset();
// console.log(variable);
//
// //Arrow functions
// //usual
// console.log("Arrow Functions")
// const addNumbers = function(num1: number, num2: number): number {
//   return num1 + num2;
// };
// console.log(addNumbers(5, 10));
// //with arrow
// const multiplyNumbers = (num1: number, num2: number) => num1 * num2;
// console.log(multiplyNumbers(2, 5));
// //with no arguments
// const greet = () => {
//   console.log("Hello");
// }
// greet();
// //with only 1 argument
// const greetFriend = friend => console.log(friend);
// greetFriend("Olya");
//
// //default parameters
// console.log("Default Parameters");
// const countDown = (start: number = 10): void => {
//   console.log(start);
//   while (start > 0) {
//     start--;
//   }
//   console.log("Done", start);
// }
// countDown(20);
//
// //Rest & Spread operators
// console.log("Rest & Spread");
// const numbers = [1, 23, 4];//array
// console.log(Math.max(3, 99, 10, -3));//list
// console.log(Math.max(...numbers))//spread (spreads an array as single values)
//
// function makeArray(...args: number[]) {//rest (in homebrew function)
//   return args;
// }
// console.log(makeArray(1, 2, 14));
//
// //Destructuring
// //arrays
// console.log("Desctructuring");
// const myHobbies = ["Piano", "Games"];
// const [hobby1, hobby2] = myHobbies;//destructuring(making separte arrays)
// console.log(hobby1, hobby2);
// //objects
// const usrData = {
//   userName: "Natalie",
//   age: 25
// }
// const {userName, age} = usrData;//make sure that values have same names
// console.log(userName, age);
//
// //Template Literals
// console.log("Template Literals");
// const usrName = "Natalie";
// const greeting = `Hello,
// I'm ${usrName}!
// It's nice to see you!`;
// console.log(greeting);

//Excercises
// Exercise 1 - Maybe use an Arrow Function?
const double = (value: number) => value * 2;
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
const greet = (name: string = "Max") => (console.log("Hello, " + name));
greet();
greet("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4 - I have to think about Exercise 3 ...
const newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5 - That's a well-constructed array.
const testResults = [3.89, 2.99, 1.38];
const [res1, res2, res3] = testResults;
console.log(res1, res2, res3);

// Exercise 6 - And a well-constructed object!
var scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);
