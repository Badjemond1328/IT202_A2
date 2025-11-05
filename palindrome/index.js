function isPalin(userInput) {
  userInput = Number(userInput); 
  if (isNaN(userInput) || userInput < 0) return "This is not a Palindrome";
  let og = userInput;
  let bckwrd = 0;
  while (userInput > 0) {
    let digit = userInput % 10;
    bckwrd = bckwrd * 10 + digit;
    userInput = Math.floor(userInput / 10);
  }

  if (og === bckwrd) return "A PALINDROME!!!";
  else return "This is not a Palindrome";
  
}

document.getElementById("pallin").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("numInput").value;
  const result = isPalin(input);
  document.getElementById("result").textContent = result
});
