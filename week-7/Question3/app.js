const reactElement = {
  type: "a",
  textContent: "Click to view Google",
  href: "https://google.co.in",
};

const generateHtmlCode = (reactElementObject) => {
  const element = document.createElement(reactElementObject.type);
  element.href = reactElementObject.href;
  element.textContent = reactElementObject.textContent;
  return element;
};

const customRender = (reactElementObject, htmlPath) => {
  const path = `#${htmlPath}`;
  const targetEl = document.querySelector(path);

  const element = generateHtmlCode(reactElementObject);

  targetEl.appendChild(element);
};

customRender(reactElement, "root");
