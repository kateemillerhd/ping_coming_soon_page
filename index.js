const notifyBtn = document.getElementById("notify-me");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error");


function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

notifyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const userEmail = emailInput.value;

    if (userEmail === "") {
        errorMsg.classList.remove("hidden");
        errorMsg.textContent = "Whoops! It looks like your forgot to add your email";
        emailInput.classList.add("input-warning");
        errorMsg.classList.add("warning");
        emailInput.placeholder = "example@email.com";
    } else if (!validateEmail(userEmail)) {
        errorMsg.classList.remove("hidden");
        errorMsg.textContent = "Please provide a valid email address";
        emailInput.classList.add("input-warning");
        errorMsg.classList.add("warning");
        emailInput.placeholder = "example@email.com";
    } else {
        errorMsg.classList.add("hidden");
        errorMsg.textContent = "";
        emailInput.classList.remove("input-warning");
        errorMsg.classList.remove("warning");
        emailInput.placeholder = "Your email address...";
    }

});