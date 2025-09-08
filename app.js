console.log("hello world")

function sayHello() {
    console.log("hello world")
}

sayHello()
sayHello()

console.log("welcome to javascript")

function sayWelcome() {
    console.log("welcome to javascript")
}

sayWelcome()

function argumentFunction(argument1, argument2) {
    console.log(argument1, argument2);
}

function sayHelloTo(userName) {
    console.log("hello " + userName + "!");
}

sayHelloTo("hets");
sayHelloTo("tari gaan");

function sayWelcomeTo(userName) {
    console.log("welcome " + userName + "!");
}

sayWelcomeTo("maru gaan ma")
sayHelloTo("ISHUUUUU")

function greet(greeting, userName) {
    console.log(greeting + " " + userName + "!");
}

greet("Good morning", "Ishanpoo");
greet("Kemcho", "bada, majama");

//adding numbers
function add(a, b) {
    return a + b;
}
const result = add(1, 5);
console.log("the result is", result);
const anotherResult = add(80, 2);
console.log("another result is", anotherResult);

//subtracting numbers
function subtract(a, b) {
    return a - b;
}
const twoResult = subtract(50, 5);
console.log("the result is", twoResult);

//multiplying numbers
function multiply(a, b) {
    return a * b;
}
const threeResult = multiply(5, 5);
console.log("the result is", threeResult);

//dividing numbers
function divide(a, b) {
    return a / b;
}
const fourResult = divide(50, 5);
console.log("the result is", fourResult);

//altogether
function calculate(a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a,b);
    }
}

const fiveResult = calculate(1, 5, "+");
console.log("the result is", fiveResult);

const sixResult = calculate(50, 10, "/");
console.log("the result is", sixResult);
