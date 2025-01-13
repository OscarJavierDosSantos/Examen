const buttonSend = document.querySelector(".send");
const buttons = document.querySelectorAll(".circular-button");
const questionDiv = document.querySelector(".question");
const resultDiv = document.querySelector(".result");
const elementP = document.querySelector(".result .selected p");
let numberSelected = 0;

buttonSend.addEventListener("click", (event) => {
    event.preventDefault();
    questionDiv.classList.add("hidden");
    resultDiv.classList.remove("hidden");
    buttons.forEach((button) => {
        if (button.classList.contains("selected")) {
            numberSelected = button.attributes["data-number"].value;
            elementP.innerHTML = `<p>Seleccionastes ${numberSelected} de 5</p>`;
        }
    });
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("selected");
    });
});
