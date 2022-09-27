const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const ratingSelected = document.getElementById("rating-selected");
const buttonClicked = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

buttonClicked.forEach((rating) => {
  rating.addEventListener("click", () => {
    ratingSelected.innerHTML = rating.innerHTML;
  });
});
