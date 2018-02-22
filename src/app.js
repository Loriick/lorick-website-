//pour le rechargement de ParcelJS
if (module.hot) {
  module.hot.accept(function() {
    window.location.reload();
  });
}
//Variables
const mailmeText = document.querySelector(".mailme__text");
const mailmeSpan = document.querySelector(".mailme__text--span");
const variableText = ["drink a coffee", "talk about life or code", "a job"];
const title = document.querySelector(".presentation__title");
var counter = 0;

//Span
setInterval(() => {
  mailmeSpan.textContent = variableText[counter];
  counter++;
  if (counter === variableText.length) {
    counter = 0;
  }
}, 2000);

//title animation
window.addEventListener("load", () => {
  title.style.animation =
    "tracking-in-expand 1.5s cubic-bezier(0.215, 0.61, 0.355, 1)";
});
