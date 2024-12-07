function registerUser() {
  const username = document.getElementById("registerUsername").value.trim();
  const password = document.getElementById("registerPassword").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const messageElement = document.getElementById("registerMessage");

  if (username === "" || password === "" || confirmPassword === "") {
    messageElement.textContent = "Please fill in all fields.";
    messageElement.className = "message error";
    return;
  }

  if (password !== confirmPassword) {
    messageElement.textContent = "Passwords do not match.";
    messageElement.className = "message error";
    return;
  }

  // Save to localStorage
  localStorage.setItem(username, password);
  messageElement.textContent = "Registration successful!";
  messageElement.className = "message success";

  // Clear inputs
  document.getElementById("registerUsername").value = "";
  document.getElementById("registerPassword").value = "";
  document.getElementById("confirmPassword").value = "";
}