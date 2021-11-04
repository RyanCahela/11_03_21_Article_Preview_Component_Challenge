//get buttons
const shareWidgetToggleOn = document.querySelector(
  ".js-card__share-icon--toggle-on"
);

const shareWidgetToggleOff = document.querySelector(
  ".js-card__share-icon--toggle-off"
);

const shareWidget = document.querySelector(".js-card__share-widget");

//set click listener on buttons
shareWidgetToggleOn.addEventListener("click", (e) => {
  //toggle on removes class
  console.log("toggleOn clicked");
  shareWidget.classList.remove("hidden");
});

//toggle off adds class
shareWidgetToggleOff.addEventListener("click", (e) => {
  console.log("toggleOff clicked");
  shareWidget.classList.add("hidden");
});
