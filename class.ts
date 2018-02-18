class Person {
  public name: string;
  private type: string;
  protected age: number = 25;
                            //creating new property in constructor
  constructor(name: string, public userName: string){
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

const person =new Person("Natalie","nata");
console.log(person.name);
console.log(person.userName);
person.printAge();
person.setType("Nice girl");
