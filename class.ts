class Person {
  public name: string;
  private type: string;
  protected age: number = 25;
  //creating new property in constructor
  constructor(name: string, public userName: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age)
  }

  setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const user = new Person("Natalie", "nata");
console.log(user.name);
console.log(user.userName);
user.printAge();
user.setType("Nice girl");

//inheritance
class Natalie extends Person {
  constructor(userName: string) {
    super("Natalie", userName);
    this.age = 17;
  }
}

const natalie = new Natalie("nata");
console.log(natalie);

//Getters and Setters
class Plant {
  private _species: string = "Default";

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "ABCD";
console.log(plant.species);

//Ststic Properties an methods
class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}
console.log(2 * Helpers.PI);//no need to create object for static
console.log(Helpers.calcCircumference(8));

//abstract classes
abstract class Project {
  projectName: string;
  budget: number = 1000;

  abstract changeName(name: string): void;//abstract methods only define form with no logic

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {//must override abstract method!
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

//private constructors
class OnlyOne {
  private static instance: OnlyOne;
  private constructor(public readonly name: string) { }
  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("The Only One");
    }
    return OnlyOne.instance;
  }
}

//let wrong = new OnlyOne("The Only One");//Error
let right = OnlyOne.getInstance();
console.log(right.name);
//right.name = "Something Else";can't assign becaouse readonly
console.log(right.name);

//excercise
// Exercise 1 - How was your TypeScript Class?
class Car {
  name: string;
  acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk() {
    console.log("Toooooooooot!");
  }

  accelerate(speed: number) {
     this.acceleration += speed;
  }
}

const car1 = new Car("BMW");
car1.honk();
console.log(car1.acceleration);
car1.accelerate(10);
console.log(car1.acceleration);

// Exercise 2 - Two objects, based on each other ...
class BaseObject {
  width: number = 0;
  length: number = 0;
};

class Rectangle extends BaseObject {
   calcSize() {
    return this.width * this.length;
  }
};

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 5;
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
  private _firstName: string;

  get firstName() {
    return this._firstName;
  }

  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    }
    else {
      this._firstName = "";
    }
  }
};
const user = new Person();
console.log(user.firstName);//empty
user.firstName = "Ma";//empty
console.log(user.firstName);
user.firstName = "Maximilian";
console.log(user.firstName);
