document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let user = {
        username: document.getElementById("newUsername").value,
        email: document.getElementById("email").value,
        password: document.getElementById("newPassword").value
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup Successful! You can login now.");
    window.location.href = "index.html";
});
