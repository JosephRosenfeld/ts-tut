/*This tutorial is based on the youtube video hosted at:
 - https://www.youtube.com/watch?v=BCg4U1FzODs&ab_channel=TraversyMedia
 */
//Basic Types
var id = 5;
var userName = "Joseph";
var isCool = true;
//'any' type can change as you go
var x = "First a String";
x = 1;
//You don't have to initialize it
var userName2;
//Define type of els in an array
var userIds = [1, 2, 3, 4, 5];
//Tuples
var person = [1, "Joe", true];
//Tuples assignment must be in the correct order
//let person: [number, string, boolean] = [1, true, "Joe"];
//Error: 'Type boolean is not assignable to string'
//Tuple array
var employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jim"],
];
//Union
//Allows a variable to hold more than one type
var newId = 22;
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
var user = {
    id: 5,
    name: "Jim"
};
var user2 = {
    id: 5,
    name: "John"
};
/*--- Type Assertion ---*/
var cid = 1;
var customerId = cid;
/*Assert the type being assinged to customerId, otherwise type of 'any' would be
assigned to customerId*/
//Also can assert like this
var customerId2 = cid;
/*--- Functions ---*/
//An error will occur if no type is assigned for func params
//The last 'number' here is the return type of the func
function sum(x, y) {
    return x + y;
}
//If the function returns nothing, use the void type
function log(message) {
    console.log(message);
}
var user3 = {
    id: 1,
    name: "john"
};
var p1 = 5;
var user4 = {
    id: 2,
    name: "Walt"
};
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
/*--- Generics ---*/
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(["John", "Jim", "Tim"]);
