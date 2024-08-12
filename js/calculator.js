let currentNumber = "";
let previousNumber = "";
let operator = "";
const display = document.querySelector("input[type='text']");

function handleNumberClick(num) {
	num = num.toString();

	if (display.value === "0" && num !== ".") {
		currentNumber = num;
	} else if (num === "." && !currentNumber.includes(".")) {
		currentNumber += num;
	} else if (num !== ".") {
		currentNumber += num;
	}

	display.value = currentNumber;
}

function handleOperatorClick(op) {
	if (currentNumber !== "") {
		previousNumber = currentNumber;
		currentNumber = "";
		display.value = op;
	}
	operator = op;
}

function handleClear() {
	currentNumber = "";
	previousNumber = "";
	operator = "";
	display.value = "0";
}

function handleClearEntry() {
	currentNumber = "";
	display.value = "0";
}

function handleModuloClick() {
	currentNumber = currentNumber / 100;
	display.value = currentNumber;
}

function handleSymbolClick() {
	if (currentNumber !== "") {
		currentNumber = (-parseFloat(currentNumber)).toString();
		display.value = currentNumber;
	}
}

function handleDotClick() {
	if (currentNumber === "") {
		display.value = 0 + ".";
	} else {
		display.value = currentNumber + ".";
	}
}

function handleEqualsClick() {
	if (previousNumber && operator && currentNumber) {
		const result = calculate(parseFloat(previousNumber), parseFloat(currentNumber), operator);
		display.value = result;
		currentNumber = result.toString();
		previousNumber = "";
		operator = "";
	}
}

function calculate(a, b, op) {
	switch (op) {
		case "+":
			return a + b;
		case "-":
			return a - b;
		case "*":
			return a * b;
		case "/":
			return a / b;
		default:
			return b;
	}
}
