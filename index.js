const notifyBtn = document.getElementById("notify-me");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error");

function validateEmail(email) {



    return true;
}

notifyBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (emailInput.value === "") {
        errorMsg.classList.remove("hidden");
        errorMsg.textContent = "Please provide a valid email address";
        emailInput.classList.add("input-warning");
        errorMsg.classList.add("warning");
        emailInput.placeholder = "example@email.com";
    }


});