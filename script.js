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
console.log("2-2=0",operate(2, "-", 2)=== 0)
