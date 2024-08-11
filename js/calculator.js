document.addEventListener("DOMContentLoaded", () => {
	const display = document.querySelector('input[type="number"]');
	const buttons = document.querySelectorAll(".btn");

	function updateDisplay(value) {
		if (display.value === "0") {
			display.value = value;
		} else {
			display.value += value;
		}
	}

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const value = button.value;
			console.log("Button clicked:", value);
			updateDisplay(value);
		});
	});
});
