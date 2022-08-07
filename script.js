let count = 0;
const appendBoard = document.getElementById("append-board");

function appendHTML(containerElement, content) {
  containerElement.innerHTML += content;
}

function replaceHTML(containerElement, content) {
  containerElement.innerHTML = content;
}

function checkButtonClick() {
  //   appendHTML(appendBoard, `<h1> Clicks: ${count++} </h1>`);
  replaceHTML(appendBoard, `<h1> Clicks: ${count++} </h1>`);
}
