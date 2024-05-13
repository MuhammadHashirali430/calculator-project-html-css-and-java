let display = document.getElementById("display");

function btn(input) {
  display.value += input;
}

function claerDisplay(input) {
  display.value = "";
}

function backSpace() {
  display.value = display.value.slice(0, -1);
}

function calculate(input) {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}
