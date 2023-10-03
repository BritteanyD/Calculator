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
    a = parseFloat(a);
    b = parseFloat(b);
    if (operator === "+")
        return add(a, b);
    else if (operator === "-")
        return subtract(a, b);
    else if (operator === "x")
        return multiply(a, b);
    else if (operator === "/")
        return divide(a, b);
};

let num1 = '';
let num2 = '';
let operators = '';

const display = document.querySelector('.display');

function showDisplay() {
    display.textContent = num1 + operators + num2;
}

const one = document.querySelector('.one');
one.addEventListener("click", function () {
    if (!operators) {
        num1 += '1';
    } else {
        num2 += '1';
    }
    showDisplay();
});

const two = document.querySelector('.two');
two.addEventListener("click", function () {
    if (!operators) {
        num1 += '2';
    } else {
        num2 += '2';
    }
    showDisplay();
});

const three = document.querySelector('.three');
three.addEventListener("click", function () {
    if (!operators) {
        num1 += '3';
    } else {
        num2 += '3';
    }
    showDisplay();
});

const four = document.querySelector('.four');
four.addEventListener("click", function () {
    if (!operators) {
        num1 += '4';
    } else {
        num2 += '4';
    }
    showDisplay();
});

const five = document.querySelector('.five');
five.addEventListener("click", function () {
    if (!operators) {
        num1 += '5';
    } else {
        num2 += '5';
    }
    showDisplay();
});

const six = document.querySelector('.six');
six.addEventListener("click", function () {
    if (!operators) {
        num1 += '6';
    } else {
        num2 += '6';
    }
    showDisplay();
});

const seven = document.querySelector('.seven');
seven.addEventListener("click", function () {
    if (!operators) {
        num1 += '7';
    } else {
        num2 += '7';
    }
    showDisplay();
});

const eight = document.querySelector('.eight');
eight.addEventListener("click", function () {
    if (!operators) {
        num1 += '8';
    } else {
        num2 += '8';
    }
    showDisplay();
});

const nine = document.querySelector('.nine');
nine.addEventListener("click", function () {
    if (!operators) {
        num1 += '9';
    } else {
        num2 += '9';
    }
    showDisplay();
});

const zero = document.querySelector('.zero');
zero.addEventListener("click", function () {
    if (!operators) {
        num1 += '0';
    } else {
        num2 += '0';
    }
    showDisplay();
});

const division = document.querySelector('.division');
division.addEventListener("click", function () {
    operators = '/';
    showDisplay();
});

const times = document.querySelector('.times');
times.addEventListener("click", function () {
    operators = 'x';
    showDisplay();
});

const minus = document.querySelector('.minus');
minus.addEventListener("click", function () {
    operators = '-';
    showDisplay();
});

const plus = document.querySelector('.plus');
plus.addEventListener("click", function () {
    operators = '+';
    showDisplay();
});

const equal = document.querySelector('.equal');
equal.addEventListener("click", function () {
    if (num1 && num2 && operators) {
        const result = operate(num1, operators, num2);
        num1 = String(result);
        operators = '';
        num2 = '';
        showDisplay();
    }
});

