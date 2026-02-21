document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("bookingForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      document.getElementById("nameError").textContent = "";
      document.getElementById("emailError").textContent = "";
      document.getElementById("dateError").textContent = "";
      document.getElementById("successMessage").textContent = "";

      let isValid = true;

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const date = document.getElementById("date").value;

      if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
      }

      if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Valid email required";
        isValid = false;
      }

      if (date === "") {
        document.getElementById("dateError").textContent = "Select booking date";
        isValid = false;
      }

      if (isValid) {
        document.getElementById("successMessage").textContent =
          "✅ Table booked successfully!";
        form.reset();
      }
    });
  }
  function orderFood(itemName, price) {

  let quantity = prompt("How many plates of " + itemName + " would you like to order?");

  if (quantity === null) {
    return; // User pressed cancel
  }

  quantity = parseInt(quantity);

  if (isNaN(quantity) || quantity <= 0) {
    alert("Please enter a valid quantity.");
    return;
  }

  let total = quantity * price;

  alert(
    "🛒 Order Summary\n\n" +
    "Item: " + itemName +
    "\nQuantity: " + quantity +
    "\nTotal Price: ₹" + total +
    "\n\nThank you for ordering from Spice Delight!"
  );
}

});