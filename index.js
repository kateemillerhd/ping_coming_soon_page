const notifyBtn = document.getElementById("notify-me");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error");

notifyBtn.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!emailInput) {
        errorMsg.textContent = "Please provide a valid email address";
    }

    if (!emailInput.checkValidity()) {
        errorMsg.textContent = "Please provide a valid email address";
    }
});