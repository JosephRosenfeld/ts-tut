/*This tutorial is based on the youtube video hosted at:
 - https://www.youtube.com/watch?v=BCg4U1FzODs&ab_channel=TraversyMedia
 */

//Basic Types
let id: number = 5;
let userName: string = "Joseph";
let isCool: boolean = true;

//'any' type can change as you go
let x: any = "First a String";
x = 1;

//You don't have to initialize it
let userName2: string;

//Define type of els in an array
let userIds: number[] = [1, 2, 3, 4, 5];

//Tuples
let person: [number, string, boolean] = [1, "Joe", true];

//Tuples assignment must be in the correct order
//let person: [number, string, boolean] = [1, true, "Joe"];
//Error: 'Type boolean is not assignable to string'

//Tuple array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jim"],
];

//Union
//Allows a variable to hold more than one type
let newId: string | number = 22;
newId = "22";

//Enum
/*Allows us to define a set of defined constants, either numeric or string*/
enum Direction1 {
  Up, // 0 by default
  Down, // 1
  Left, // 2
  Right, // 3
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction1.Up); // 0;

//Objects
const user: {
  id: number;
  name: string;
} = {
  id: 5,
  name: "Jim",
};
//But the above method looks a bit messy so we can actually just define types

type User = {
  id: number;
  name: string;
};

const user2: User = {
  id: 5,
  name: "John",
};

/*--- Type Assertion ---*/
let cid: any = 1;
let customerId = <number>cid;
/*Assert the type being assinged to customerId, otherwise type of 'any' would be 
assigned to customerId*/
//Also can assert like this
let customerId2 = cid as number;

/*--- Functions ---*/
//An error will occur if no type is assigned for func params
//The last 'number' here is the return type of the func
function sum(x: number, y: number): number {
  return x + y;
}

//If the function returns nothing, use the void type
function log(message: string | number): void {
  console.log(message);
}

/*--- Interfaces ---*/
//Somewhat like a custom type shown above
interface UserInterface {
  id: number;
  name: string;
}

const user3: UserInterface = {
  id: 1,
  name: "john",
};

/*So from this they basically look the same as a custom type. However one of the key
differences is that interfaces can't be used with primitives or for unions*/

//This works
type Point = number | string;
const p1: Point = 5;

//This doesn't
// interface Point2 = number | string;
// const p2: Point2 = 5;

interface UserInterface2 {
  readonly id: number;
  name: string;
  age?: number;
}

const user4: UserInterface2 = {
  id: 2,
  name: "Walt",
};

//user4.id = 10;
//Error: Cannont assing to 'id' because it is read-only

//You can also use interfaces with functions
interface MathFunc {
  (x: number, y: number): number;
}

//Interfaces with Classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string; //declaring a function on the class
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

/*--- Generics ---*/
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["John", "Jim", "Tim"]);
