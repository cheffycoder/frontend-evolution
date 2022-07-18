import { createElement } from "./utils";

var count = 0;

function inc() {
  count += 1;
  document.getElementById("h1").textContent = count;
}

// Making button Element
var $button = createElement('button', null, "Increment", {
  click: () => {
    inc();
  },
});

var $h1 = createElement('h1', 'h1', "0");
