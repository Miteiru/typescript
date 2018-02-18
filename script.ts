//string
let myName = 'Natalie';
//number
let myAge = 25;
//boolean
let hasHobbies: boolean = true;

//assign Types
let myRealAge: number;
myRealAge = 27;
// myRealAge = "27";

//array
let hobbies: any[] = ["Cooking", "Piano"];
hobbies = [100];
console.log(typeof hobbies)

//tuples(array with mixed types and limited number)
let address: [string, number] = ["Superstreet", 90];

//enum (make numbers more expressive)
enum Color {
  Gray,
  Green = 100,
  Blue
}

let myColor: Color = Color.Blue;//displays 101
console.log(myColor);

//any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

//functions
function returnMyName(): string {
  return myName;
}
console.log(myName);

//void (no return statement)
function sayHello(): void {
  console.log("Hello!")
}

//argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
// console.log(multiply(2,"Max"));
console.log(multiply(2, 10));

//function types (assigning by ES6 arrow syntaxis)
let myMultiply: (val1: number, val2: number) => number;//defines arguments and return types
myMultiply = multiply;
console.log(multiply(5, 2));

//objects
let userData: { name: string, age: number } = {
  name: "Max",
  age: 27
};

//complex objects
//data is an array of numbers
//output is a boolean function with one boolean type argument which return array of numbers
let complex: { data: number[], ouput: (all: boolean) => number[] } = {
  data:[100, 99, 98],
  ouput: function(all: boolean): number[] {
    return this.data;
  }
}
console.log(complex);

//alias for storing types
type Complex = { data: number[], ouput: (all: boolean) => number[] };

let complex2: Complex = {
  data:[100, 99, 98],
  ouput: function(all: boolean): number[] {
    return this.data;
  }
}

//multiple types with union types (assigns with OR(single pipe line))
let myRealRealAge: number | string = 27;
myRealRealAge = "27";

//check types
let finalValue = 20;
if (typeof finalValue == "number") {
  console.log("Final value is a number");
}

//never type (TypeScript 2.0)
//not to get confused with void!
//not returns nothing, but never returns anything
function neverReturns(): never{
  throw new Error("an Error!")
}

//nullable types(TypeScript 2.0)
let canBeNull = 12; // automatically assigns number type, but null can be assigned as type
// canBeNull = null;
let canAlsoBeNull; //any type
canAlsoBeNull = null;
let canThisBeAny = null;
// canThisBeAny = 12;

//type excercise
//original
// let bankAccount = {
//   money: 2000,
//   deposit(value) {
//     this.money += value;
//   }
// };
//
// let myself = {
//   name: "Natalie",
//   bankAccount: bankAccount,
//   hobbies: ["Piano", "Games"]
// };
//
// myself.bankAccount.deposit(3000);
// console.log(myself);

//with types
type BankAccount = {money: number, deposit: (value: number) => void};

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value:number): void {
    this.money += value;
  }
};

let myself: {name: string, bankAccount: BankAccount, hobbies: string[]} = {
  name: "Natalie",
  bankAccount: bankAccount,
  hobbies: ["Piano", "Games"]
};

myself.bankAccount.deposit(3000);
console.log(myself);
