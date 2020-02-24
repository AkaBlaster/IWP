const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const mobile = document.getElementById("Mobile");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const Country = document.getElementById("Country");
const PinCodee = document.getElementById("PinCode");

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    let small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    }
}

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

function checkPasswordsMatch(password1, password2) {
    if (password1.value !== password2.value) {
        showError(password2, "Password do not match");
    }
}

function checkLength(input, min, max) {
    if (input.value.length <= min) {
        showError(
            input,
            `${getFieldName(input)} must be more than ${min} characters`
        );
    } else if (input.value.length >= max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showSuccess(input);
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkMobile(input){
    var phoneNo = /^\d{10}$/;
    if((input).value.match(phoneNo)){
        showSuccess(input)
    }
    else {
        showError(
            input,
            `${getFieldName(input)} Should be of 10 digits.`
        );
    }
}

function getCountry(input){
    if(input.value === ""){
        showError(input, `${getFieldName(input)} is required`);
    }
    else {
        showSuccess(input);
    }
}


function getPin(input){
    var phoneNo = /^\d{6}$/;
    if((input).value.match(phoneNo)){
        showSuccess(input)
    }
    else {
        showError(
            input,
            `${getFieldName(input)} Should be of 6 digits.`
        );
    }
}



form.addEventListener("submit", function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2,]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkMobile(mobile);
    getCountry(Country);
    getPin(PinCodee);
    if (password2.value !== "") {
        checkPasswordsMatch(password, password2);
    }
});

