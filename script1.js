const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const btn = document.getElementById("submit1");
const result1 = document.getElementById("result1");
console.log("result - ", result1.textContent);
btn.addEventListener("click", (event) => {
  event.preventDefault();
  formatFullName(firstName, lastName);
});


function formatFullName(firstName, lastName) {
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
