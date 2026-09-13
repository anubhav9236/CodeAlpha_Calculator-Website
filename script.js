const display = document.getElementById("display");

function appendValue(value) {
    if (display.innerText === "0" && value !== ".") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}

function calculate() {
    try {
        let expression = display.innerText;
        expression = expression.replace(/%/g, "/100");

        let result = eval(expression);

        if (!isFinite(result)) {
            display.innerText = "Error";
        } else {
            display.innerText = result;
        }
    } catch {
        display.innerText = "Error";
    }
}

document.addEventListener("keydown", function(event) {
    const key = event.key;

    if ("0123456789.+-*/%".includes(key)) {
        appendValue(key);
    }

    if (key === "Enter" || key === "=") {
        calculate();
    }

    if (key === "Escape") {
        clearDisplay();
    }

    if (key === "Backspace") {
        deleteLast();
    }
});