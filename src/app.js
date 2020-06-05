import { checkPalindrome, showInformation, hideIcons } from "./utils";

const handleUserTyping = (e) => {
  const resultText = document.querySelector(".result");
  const inputValue = e.target.value;
  hideIcons();

  if (inputValue === "") {
    resultText.innerHTML = "";
    return;
  }

  if (checkPalindrome(inputValue)) {
    if (resultText.classList.contains("error")) {
      resultText.classList.remove("error");
    }
    showInformation(inputValue, resultText, true);
  } else {
    if (resultText.classList.contains("success")) {
      resultText.classList.remove("success");
    }
    showInformation(inputValue, resultText, false);
  }
};

const initApp = () => {
  const inputField = document.querySelector("#input");
  inputField.addEventListener("input", handleUserTyping);
};

initApp();
