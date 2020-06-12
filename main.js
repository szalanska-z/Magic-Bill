const ball = document.querySelector(".img-ball");
const input = document.querySelector(".question-area input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const answerArray = [
  "To nie jest prawda..:(",
  "Tak!",
  "Nie!",
  "To jest prawda!",
  "Ciężko powiedzieć...",
  "Musisz sam sobie odpowiedzieć na to pytanie...",
  "Odpowiedź nadejdzie wkrótce",
  "Twój przyjaciel zna odpowiedź",
];

const shakeBall = () => {
  ball.classList.add("shake-animation");
  setTimeout(checkInput, 1000);
};

const checkInput = () => {
  if (input.value !== "" && input.value.slice(-1) === "?") {
    generateAnswer();
    error.textContent = "";
  } else if (input.value !== "" && input.value.slice(-1) !== "?") {
    error.textContent = 'Pytanie musi być zakończone znakiem "?"';
    answer.textContent = "";
  } else {
    error.textContent = "Musisz zadać pytanie!";
    answer.textContent = "";
  }
  ball.classList.remove("shake-animation");
  input.value = "";
};

const generateAnswer = () => {
  const index = Math.floor(Math.random() * answerArray.length);
  answer.innerText = answerArray[index];
};

ball.addEventListener("click", shakeBall);
