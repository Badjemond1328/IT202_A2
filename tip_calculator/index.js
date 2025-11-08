
function calculateTip(a,b){
  let tip = a * (b/100);
  let res =  a + tip;
  return  res.toFixed(2); 
}

function isNotValid(r, a, b){
  if (a<0){
    r.textContent = "Enter a valid non-negative subtotal.";
    return true;
  }
  else if (b<0){
    r.textContent = "Enter a valid non-negative tip percentage.";
    return true;
  }
  return false;
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const subtotal = Number(document.getElementById("subtotal").value);
  const tipPercent = Number(document.getElementById("tip%").value);
  const result = document.getElementById("result");

  if (isNotValid(result, subtotal,tipPercent)) {
    return;
  }
 
  result.innerHTML = `
    <div><strong>Total:</strong> $${calculateTip(subtotal,tipPercent)}</div>
  `;
});
