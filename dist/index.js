"use strict";
//Basic Types
let id = 5;
let userName = "Joseph";
let isCool = true;
//'any' type can change as you go
let x = "First a String";
x = 1;
//You don't have to initialize it
let userName2;
//Define type of els in an array
let userIds = [1, 2, 3, 4, 5];
//Tuples
let person = [1, "Joe", true];
//Tuples assignment must be in the correct order
//let person: [number, string, boolean] = [1, true, "Joe"];
//Error: 'Type boolean is not assignable to string'
//Tuple array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jim"],
];
//Union
//Allows a variable to hold more than one type
let newId = 22;
newId = "22";
//Enum
/*Allows us to define a set of defined constants, either numeric or string*/
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up); // 0;
//Objects
const user = {
    id: 5,
    name: "Jim",
};
const user2 = {
    id: 5,
    name: "John",
};
/*--- Type Assertion ---*/
let cid = 1;
let customerId;
customerId = cid;
/*Assert the type being assinged to customerId, otherwise type of 'any' would be
assigned to customerId*/
console.log(customerId);
