// Utils.js

function createElement(type, id, content, events = {}) {
  const element = document.createElement(type);
  element.id = id;
  element.textContent = content;

  for (const [fn, handle] of Object.entries(events)) {
    element.addEventListener(fn, handle);
  }
  document.body.appendChild(element);
  return element;
}
