export const checkPalindrome = (str) => {
  const cleanStr = str.replace(/[\W_]/g, "").toLowerCase();
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
};

export const hideIcons = () => {
  const icons = Array.from(document.querySelectorAll(".icon"));
  icons.forEach((icon) => icon.classList.add("hidden"));
};

const displayIcon = (iconType) => {
  const showIcon = Array.from(document.querySelectorAll(".icon")).find((icon) => icon.classList.contains(iconType));
  showIcon.classList.remove("hidden");
};

export const showInformation = (inputValue, element, isValid) => {
  if (isValid) {
    element.classList.add("success");
    element.innerHTML = `<strong><em>${inputValue}</em> it's a palindrome</strong>`;
    element.setAttribute("aria-hidden", "false");
    displayIcon("success-icon");
  } else {
    element.classList.add("error");
    element.innerHTML = `<strong><em>${inputValue}</em> it's not a palindrome</strong>`;
    displayIcon("error-icon");
  }
};
