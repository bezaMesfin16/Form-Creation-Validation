document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.defaultPrevented();
  });

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  let isValid = true;

  let messages = [];

  if (username.length < 3) {
    isValid = false;
    messages.push("Username must be at least 3 characters long.");
  }

  if (!email.include("@") && !email.include(".")) {
    isValid = false;
    messages.push("Email must include '@' and '.' characters.");
  }

  if (password.length < 8) {
    isValid = false;
    messages.push("Add a password more that 8 characters");
  }

  feedbackDiv.style.display = "block";

  if (isValid) {
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745";
  } else {
    feedbackDiv.innerHTML = messages.join("<br>");
    feedbackDiv.style.color = "#dc3545";
  }
});
