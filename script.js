const input = document.getElementById("input");
const button = document.getElementById("button");
const p = document.getElementById("p");

const isPalindrome = palabra => {
  palabra = palabra.toLowerCase();
  const palindrome = palabra.split("").reverse().join("");
  return palindrome === palabra;
}

const checkPalindrome = () => {
  const value = input.value;
  if (!value) {
    alert("Please enter a word")
  } else if (isPalindrome(value)) {
    p.textContent = `${value} is a palindrome`;
  } else {
    p.textContent = `${value} is not a palindrome`;
  }

  button.classList.add("clicked");
  setTimeout(() => {
    button.classList.remove("clicked");
  }, 1000);
};

button.addEventListener("click", checkPalindrome);

input.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    checkPalindrome();
  }
});
