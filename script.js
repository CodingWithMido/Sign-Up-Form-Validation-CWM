const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

function errorMsg(field, errorText) {
    field.classList.add("error");
    var errorElement = document.createElement("small");
        errorElement.classList.add("error-text");
        errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

function successMsg(field) {
    field.classList.add("success");
}

function validateForm(e) {
    e.preventDefault();

    var fullnameInput = document.getElementById("fullname");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmPassword");
    var genderInput = document.getElementById("gender");

    var fullname = fullnameInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();
    var confirmPassword = confirmPasswordInput.value.trim();
    var gender = genderInput.value;

    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;

    var errorFields = document.querySelectorAll(".form-group .error");
        errorFields.forEach(function (field) {
            field.classList.remove("error");
        });

    var errorTexts = document.querySelectorAll(".error-text");
        errorTexts.forEach(function (errorText) {
            errorText.remove();
        });

    var successFields = document.querySelectorAll(".form-group .success");
        successFields.forEach(function (field) {
            field.classList.remove("success");
        });
    
    if(fullname === ""){
        errorMsg(fullnameInput, "Enter your fullname");
    } else {
        successMsg(fullnameInput);
    }

    if(!emailPattern.test(email)){
        errorMsg(emailInput, "Enter a valid email address");
    } else {
        successMsg(emailInput);
    }

    if(password === ""){
        errorMsg(passwordInput, "Enter your password");
    } else {
        successMsg(passwordInput);
    }

    if(confirmPassword === "" || confirmPassword !== password){
        errorMsg(confirmPasswordInput, "Enter your confirm password");
    } else {
        successMsg(confirmPasswordInput);
    }

    if(gender === ""){
        errorMsg(genderInput, "Select your gender");
    } else {
        successMsg(genderInput);
    }

    var checkErrors = document.querySelectorAll(".form-group .error");
    if(checkErrors.length !== 0){
        return;
    }

    form.submit();
}

function togglePasswordVisibility(inputId, toggleId) {
    var passwordInput = document.getElementById(inputId);
    var toggleButton = document.getElementById(toggleId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.classList.remove("fa-eye");
        toggleButton.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        toggleButton.classList.remove("fa-eye-slash");
        toggleButton.classList.add("fa-eye");
    }
}

form.addEventListener("submit", validateForm);