const cards = document.querySelectorAll(".card");
const overlay = document.querySelector('.overlay');
console.log(overlay);
const resetButton = document.querySelector('.reset');
console.log(cards);

//variables
var isFlipped = false;
var firstCard;
var secondCard;
var matches = 0;

cards.forEach((card) => card.addEventListener("click", flip));

resetButton.addEventListener('click', () => {
  resetGame();
});

function resetGame() {
  window.location.reload();
}

function flip() {
  //   console.log("Card flipped");
  // console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    checkIt();
  }
}

function checkIt() {
  //   console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
    matches = matches + 1;
  } else {
    fail();
  }
}

function success() {
    // console.log("Success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  
  reset();
}

function fail() {
    // console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 500);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
  console.log(matches);
  if(matches === 7){
    overlay.classList.remove('hidden');
    console.log(matches);
  }
}

//TODO: shuffle

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
  console.log("shuffle!");
})();