const price = document.querySelector(".price");
const quantity = document.getElementById("quantity");
const taxRate = document.getElementById("taxRate");
const btn2 = document.getElementById("submit2");
const result2 = document.getElementById("result2");
console.log("result - ", result2.textContent);
btn2.addEventListener("click", (event) => {
  event.preventDefault();
  calculateTotalCost(price, quantity, taxRate)
});


function calculateTotalCost( price, quantity, taxRate) {
  /*
  if (lastName.value.trim().length === 0 || firstName.value.trim().length === 0)
    return (result2.innerText = "Invalid name input.");
  console.log(firstName.textContent, lastName.textContent);
  */
 const priceValue = Number(price.value)
 const quantityValue =  Number(quantity.value);
 const taxRateValue =  Number(taxRate.value);
  const totalCost = (priceValue * quantityValue) * (1 + taxRateValue)
  console.log(priceValue * quantityValue);
  console.log(1 + taxRateValue);
  console.log(totalCost)

  result2.innerText = `Result: ${totalCost}`;
}
