const notifyBtn = document.getElementById("notify-me");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error");

notifyBtn.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!emailInput) {
        errorMsg.textContent = "Please provide a valid email address";
        emailInput.classList.add("warning");
    }

    if (!emailInput.checkValidity()) {
        errorMsg.textContent = "Please provide a valid email address";
    }
});