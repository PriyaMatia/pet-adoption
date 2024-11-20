function calculateCost() {
  const petType = document.getElementById("pet-type").value;
  const monthlyCost = parseFloat(document.getElementById("monthly-cost").value);

  if (!petType || isNaN(monthlyCost) || monthlyCost <= 0) {
    alert("Please enter valid pet type and monthly cost.");
    return;
  }

  const yearlyCost = monthlyCost * 12;
  document.getElementById(
    "calculation-result"
  ).innerText = `The estimated yearly care cost for a ${petType} is $${yearlyCost.toFixed(
    2
  )}.`;
}

document
  .getElementById("adoption-inquiry")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your inquiry! We will get back to you soon.");
    this.reset(); // Clear the form after submission
  });
