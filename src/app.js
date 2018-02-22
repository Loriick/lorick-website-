if (module.hot) {
  module.hot.accept(function() {
    window.location.reload();
  });
}

const mailmeText = document.querySelector(".mailme__text");
const mailmeSpan = document.querySelector(".mailme__text--span");
const variableText = ["drink a coffee", "talk about life or code", "a job"];
var counter = 0;

setInterval(() => {
  mailmeSpan.textContent = variableText[counter];
  counter++;
  if (counter === variableText.length) {
    counter = 0;
  }
}, 2000);
