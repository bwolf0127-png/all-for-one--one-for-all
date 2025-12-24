document.getElementById("forgotForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("resetEmail").value;
    let savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && savedUser.email === email) {
        let otp = Math.floor(100000 + Math.random() * 900000);
        localStorage.setItem("otp", otp);

        alert("Your OTP is: " + otp); 
        window.location.href = "verify-otp.html";
    } else {
        alert("Email not found!");
    }
});
