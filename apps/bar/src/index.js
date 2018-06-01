const { multiply, subtract } = require('math');
const { slugify } = require('utils');

function component(innerHTML) {
  const element = document.createElement('div');
  element.innerHTML = innerHTML;
  return element;
}

document.body.appendChild(component(slugify('Hello World')));
document.body.appendChild(component(`multiply(3, 4): ${multiply(3, 4)}`));
document.body.appendChild(component(`subtract(3, 4): ${subtract(3, 4)}`));
