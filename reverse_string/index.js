//I'm assuming you don't want us to use the .reverse() function...
function backward(userInput) {
  let result = "";
  let index = userInput.length - 1;
  for (let i = 0; i < userInput.length; i++) {
    result += userInput[index - i];
  }
  return result;
}


document.getElementById("reverse").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("textInput").value;
  const reversed = backward(input);
  document.getElementById("result").textContent = reversed || "";
});
