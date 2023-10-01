//add tests
function add(a, b) {
    return a + b;
};
console.log("1+7=8", add(1, 7) === 8)
//subtract tests
function subtract(a, b) {
    return a - b;
}
console.log("100-200=-100", subtract(100, 200) === -100)
//multiply tests
function multiply(a, b) {
    return a * b;
}
console.log("2 * 3= 6", multiply(2, 3) === 6)
//divide tests
function divide(a, b) {
    return a / b;
}
console.log("10/5=2", divide(10, 5) === 2)


function operate(a, operator, b) {
    if (operator === "+")
        return add(a, b);
    else if (operator === "-")
        return subtract(a, b);
    else if (operator === "*")
        return multiply(a, b);
    else if (operator === "/")
        return divide(a, b);
}
console.log("2-2=0", operate(2, "-", 2) === 0)

const one = document.querySelector('.one');
const display1 = document.querySelector('.display');
one.addEventListener("click", function () {
    display1.textContent = '1';
});

const two = document.querySelector('.two');
const display2 = document.querySelector('.display');
two.addEventListener("click", function () {
    display2.textContent = '2';
});

const three = document.querySelector('.three');
const display3 = document.querySelector('.display');
three.addEventListener("click", function () {
    display3.textContent = '3';
});

const four = document.querySelector('.four');
const display4 = document.querySelector('.display');
four.addEventListener("click", function () {
    display4.textContent = '4';
});

const five = document.querySelector('.five');
const display5 = document.querySelector('.display');
five.addEventListener("click", function () {
    display5.textContent = '5';
});

const six = document.querySelector('.six');
const display6 = document.querySelector('.display');
six.addEventListener("click", function () {
    display6.textContent = '6';
});

const seven = document.querySelector('.seven');
const display7 = document.querySelector('.display');
seven.addEventListener("click", function () {
    display7.textContent = '7';
});

const eight = document.querySelector('.eight');
const display8 = document.querySelector('.display');
eight.addEventListener("click", function(){
    display8.textContent = '8';
});

const nine = document.querySelector('.nine');
const display9 = document.querySelector('.display');
nine.addEventListener("click", function(){
    display9.textContent = '9';
});

const zero = document.querySelector('.zero');
const display0 = document.querySelector('.display');
zero.addEventListener("click", function(){
    display0.textContent = '0';
});

const division = document.querySelector('.division');
const displayD = document.querySelector('.display');
division.addEventListener("click", function(){
    displayD.textContent = '/';
});

const times = document.querySelector('.times');
const displayT = document.querySelector('.display');
times.addEventListener("click", function(){
    displayT.textContent = 'x';
});

const minus = document.querySelector('.minus');
const displayM = document.querySelector('.display');
minus.addEventListener("click", function(){
    displayM.textContent = '-';
});

const plus = document.querySelector('.plus');
const displayP = document.querySelector('.display');
plus.addEventListener("click", function(){
    displayP.textContent = '+';
});

const equal = document.querySelector('.equal');
const displayE = document.querySelector('.display');
equal.addEventListener("click", function(){
    displayE.textContent = '=';
});