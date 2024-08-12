document.addEventListener("DOMContentLoaded", () => {
	const display = document.querySelector('input[type="number"]');
	const buttons = document.querySelectorAll(".btn");

	const operations = {
		"+": (a, b) => a + b,
		"-": (a, b) => a - b,
		"*": (a, b) => a * b,
		"/": (a, b) => a / b,
		"%": (a) => a / 100,
		"=": () => {
			try {
				display.value = eval(display.value);
			} catch (e) {
				display.value = "Error";
			}
		},
		C: () => {
			display.value = "0";
		},
		CE: () => {
			if (display.value.length > 1) {
				display.value = display.value.slice(0, -1);
			} else {
				display.value = "0";
			}
		},
		"+/-": () => {
			display.value = parseFloat(display.value) * -1;
		},
	};

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const value = button.value;

			if (operations[value]) {
				if (value === "=" || value === "C" || value === "CE" || value === "+/-") {
					operations[value]();
				} else {
					display.value += value;
				}
			} else {
				if (display.value === "0") {
					display.value = value;
				} else {
					display.value += value;
				}
			}

			console.log("Button Clicked: ", value)
		});
	});
});
