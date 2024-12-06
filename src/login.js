$(document).ready(function () {
    // Initialize dummy credentials in Local Storage
    if (!localStorage.getItem('username') && !localStorage.getItem('password')) {
        localStorage.setItem('username', 'admin');
        localStorage.setItem('password', 'password123');
    }

    // Handle login form submission
    $('#login-form').on('submit', function (e) {
        e.preventDefault();
        
        const enteredUsername = $('#username').val();
        const enteredPassword = $('#password').val();
        
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        
        if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'index.html'; // Redirect to the dashboard
        } else {
            $('#login-message').text('Invalid username or password!');
        }
    });
});
