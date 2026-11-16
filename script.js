
const ACCESS_PASSWORD = "190321";

const form = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const password = passwordInput.value;

    if (!/^\d{6}$/.test(password)) {
        errorMessage.textContent = "Password must contain exactly 6 digits.";
        return;
    }

    if (password === ACCESS_PASSWORD) {

        // Hide login screen
        document.querySelector(".page").style.display = "none";

        // Show main letter page
        document.getElementById("mainContent").style.display = "block";

    } else {
        errorMessage.style.color = "#d32f2f";
        errorMessage.textContent = "Incorrect password. Please try again.";
        passwordInput.value = "";
    }
});


const today = new Date();
today.setDate(today.getDate() - 1); // Subtract 1 day from the current date

const formattedDate = [
    String(today.getDate()).padStart(2, "0"),
    String(today.getMonth() + 1).padStart(2, "0"),
    today.getFullYear()
].join("-");

document.getElementById("currentDate").textContent = formattedDate;


function printDocument() {
    window.print();
}
