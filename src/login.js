function loginUser() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const messageElement = document.getElementById("loginMessage");

  if (username === "" || password === "") {
    messageElement.textContent = "Please fill in all fields.";
    messageElement.className = "message error";
    return;
  }

  // Retrieve data from localStorage
  const storedPassword = localStorage.getItem(username);
  if (storedPassword && storedPassword === password) {
    messageElement.textContent = "Login successful! Redirecting to dashboard...";
    messageElement.className = "message success";

    // Simulate dashboard redirection
    setTimeout(() => {
      alert("Welcome to the dashboard!");
      window.location.href = 'dashboard.html';
    }, 1000);
  } else {
    messageElement.textContent = "Invalid username or password.";
    messageElement.className = "message error";
  }

  // Clear inputs
  document.getElementById("loginUsername").value = "";
  document.getElementById("loginPassword").value = "";
}