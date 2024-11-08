document.addEventListener("DOMContentLoaded", () => {
    updateLoginButtons();
});
function updateLoginButtons() {
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    const isLoggedIn = localStorage.getItem("is-login") === "true";

    if (isLoggedIn) {
        loginBtn.style.display = "none";
        logoutBtn.style.display = "block";
    } else {
        loginBtn.style.display = "block";
        logoutBtn.style.display = "none";
    }
}

window.onload = updateLoginButtons;

function login() {
    window.location.href = "login.html";
    updateLoginButtons();
}

function logout() {
    localStorage.setItem("is-login", "false");
    localStorage.removeItem("user-information");
    window.location.reload();
    updateLoginButtons();
}

function Dangtin() {
    window.location.href = "../html/nhapbox.html";
}