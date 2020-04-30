function getText() {
  fetch('./readme.txt')
  .then((response) => response.text().then(setText)).catch((error) => {
    printError();
  });;
}

function setText(text) {
  var element = document.getElementById("readmecontent");
  if (text === "") {
    element.innerHTML = "<h2>Your readme is empty, at least write your name!</h2>"
  } 
  else {
    element.innerHTML = "<h4>" + text + "</h4>"
  }
}

function printError() {
  var element = document.getElementById("readmecontent");
  element.innerHTML = "<h2>You don't even have a readme! Make sure it's named readme.txt and in the same folder as your index.html.</h2>"
}

setInterval(getText, 1000);

