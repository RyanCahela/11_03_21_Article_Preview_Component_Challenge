//get buttons
const shareIcon = document.querySelector(".js-card__share-icon");

const shareWidget = document.querySelector(".js-card__share-widget");

//set click listener on buttons
shareIcon.addEventListener("click", (e) => {
  //toggle on removes class
  console.log("sharIcon clicked");
  shareWidget.classList.toggle("transparent");
});

//toggle off adds class
shareWidgetToggleOff.addEventListener("click", (e) => {
  console.log("toggleOff clicked");
  shareWidget.classList.add("transparent");
});
