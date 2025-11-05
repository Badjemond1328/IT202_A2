

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const subtotal = Number(document.getElementById("subtotal").value);
  const tipPercent = Number(document.getElementById("tip%").value);
  const result = document.getElementById("result");

  if (subtotal < 0) {
    result.textContent = "Enter a valid non-negative subtotal.";
    return;
  }
  else if (tipPercent < 0) {
    result.textContent = "Enter a valid non-negative tip percentage.";
    return;
  }

  const tip = subtotal * (tipPercent / 100);
  const total = subtotal + tip;
  const res = total.toFixed(2);

  result.innerHTML = `
    <div><strong>Total:</strong> $${res}</div>
  `;
});
