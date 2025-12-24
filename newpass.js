document.getElementById("newPassForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let newPassword = document.getElementById("newPass").value;
    let savedUser = JSON.parse(localStorage.getItem("user"));

    savedUser.password = newPassword;
    localStorage.setItem("user", JSON.stringify(savedUser));

    alert("Password Updated! Please Login");
    window.location.href = "index.html";
});
