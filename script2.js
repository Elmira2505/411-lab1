const price = document.querySelector(".price");
const quantity = document.getElementById("quantity");
const taxRate = document.getElementById("taxRate");
const btn2 = document.getElementById("submit2");
const result2 = document.getElementById("result2");
console.log("result - ", result12.textContent);
btn.addEventListener("click", (event) => {
  event.preventDefault();
  formatFullName(firstName, lastName);
});
btn.document.addEventListener("keyup", (event) => {
  if (event.code === "Enter") console.log("enter was pressed");
});

function calculateTotalCost( price, quantity, taxRate.) {
  if (lastName.value.trim().length === 0 || firstName.value.trim().length === 0)
    return (result1.innerText = "Invalid name input.");
  console.log(firstName.textContent, lastName.textContent);
  const firstNameFormat =
    firstName.value.trim().slice(0, 1).toUpperCase() +
    firstName.value.trim().slice(1).toLowerCase();
  const lastNameFormat =
    lastName.value.trim().slice(0, 1).toUpperCase() +
    lastName.value.trim().slice(1).toLowerCase();
  console.log(firstNameFormat);

  result1.innerText = `Result: ${firstNameFormat} ${lastNameFormat}`;
}
