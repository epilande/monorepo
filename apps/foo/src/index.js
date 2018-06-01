const { multiply, add } = require('math');

function component(innerHTML) {
  const element = document.createElement('div');
  element.innerHTML = innerHTML;
  return element;
}

document.body.appendChild(component(`multiply(1, 2): ${multiply(1, 2)}`));
document.body.appendChild(component(`add(1, 2): ${add(1, 2)}`));
