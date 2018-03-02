//pour le rechargement de ParcelJS
if (module.hot) {
  module.hot.accept(function() {
    window.location.reload();
  });
}
//Variables
const mailmeText = document.querySelector(".mailme__text");
const mailmeSpan = document.querySelector(".mailme__text--span");
const variableText = [
  "drink a coffee",
  "chit chat about coding",
  "propose a job offer"
];
const title = document.querySelector(".presentation__title");
var counter = 0;

//Span
setInterval(() => {
  mailmeSpan.textContent = variableText[counter];
  counter++;
  if (counter === variableText.length) {
    counter = 0;
  }
}, 2500);

//title animation
window.addEventListener("load", () => {
  title.classList.add("presentation__animation");
});
