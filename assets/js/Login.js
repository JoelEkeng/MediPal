const SignUp = document.getElementById("SignUp");
const form = document.querySelector("form");
const div = document.querySelector(".signUp");

SignUp.addEventListener('click', () => {
    const formDisplayStyle = window.getComputedStyle(form).display;
    if (formDisplayStyle === "none") {
        form.style.display = "block";
        div.style.transition = "10s ease-in"

    } else {
        form.style.display = "none";

    }
});

function validateForm() {
    // Get form inputs
    const firstName = document.forms["signupForm"]["FirstName"].value;
    const lastName = document.forms["signupForm"]["LastName"].value;
    const phoneNumber = document.forms["signupForm"]["phoneNumber"].value;
    const email = document.forms["signupForm"]["Email"].value;
    const password = document.forms["signupForm"]["Password"].value;
    const reenterPassword = document.forms["signupForm"]["Re-enterPasswrod"].value;

    // Validation logic
    if (firstName === "" || lastName === "" || phoneNumber === "" || email === "" || password === "" || reenterPassword === "") {
        alert("All fields must be filled out");
        return false;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
        alert("Phone number must not contain +");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Invalid email address");
        return false;
    }

    if (password !== reenterPassword) {
        alert("Passwords do not match");
        return false;
    }

    // If all validation passes, submit the form
    alert("Form submitted successfully!");
    document.getElementById("signupForm").submit();
}

function isValidPhoneNumber(phoneNumber) {
    // Your validation logic for phone number
    return !phoneNumber.includes("+");
}

function isValidEmail(email) {
    // Your validation logic for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}