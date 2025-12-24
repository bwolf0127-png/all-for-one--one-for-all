document.getElementById("otpForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let otpEntered = document.getElementById("otpInput").value;
    let actualOtp = localStorage.getItem("otp");

    if (otpEntered === actualOtp) {
        alert("OTP Verified! Set New Password");
        window.location.href = "new-password.html";
    } else {
        alert("Incorrect OTP. Try again!");
    }
});
