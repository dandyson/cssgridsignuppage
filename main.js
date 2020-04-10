const emailInput = document.getElementById("emailInput");
const subButton = document.getElementById("subButton");
const errorMessage = document.getElementById("errorMessage");

const formValidation = () => {
  subButton.addEventListener("click", () => {
    if (emailInput.value === "") {
      errorMessage.textContent = "Please provide a valid email";
      emailInput.style.border = "2px solid red";
      emailInput.style.backgroundImage = "url('/images/icon-error.svg')";
      emailInput.style.backgroundRepeat = "no-repeat";
      emailInput.style.backgroundPosition = "83% 45%";
    }
  });
};

formValidation();
