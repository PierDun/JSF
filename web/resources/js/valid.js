let is_y_valid = false;
let is_r_valid = false;

function validY(element) {
    const errmsg = document.getElementById("error-message");
    let y = element.value.replace(/,/, '.');
    let isValid = isNumber(y);
    isValid = isValid && (y <= 3) && (y >= -5);
    if (!isValid) {
        element.style.borderColor = "red";
    } else {
        element.style.borderColor = "green";
    }

    if (!isValid) {
        errmsg.textContent = "Error";
    } else {
        errmsg.textContent = " ";
    }

    is_y_valid = isValid;
    isValid = isValid & is_r_valid;
    disableButtons(!isValid);
    return is_y_valid;
}

function validR() {
    let element = document.getElementById("j_idt16:r");
    const errmsg = document.getElementById("error-message-R");
    let r = element.value.replace(/,/, '.');
    let isValid = isNumber(r);
    isValid = isValid && (r <= 4) && (r >= 1);

    if (!isValid) {
        element.style.borderColor = "red";
    } else {
        element.style.borderColor = "green";
    }

    if (!isValid) {
        errmsg.textContent = "Incorrect R";
    } else {
        errmsg.textContent = " ";
    }

    is_r_valid = isValid;
    isValid = isValid & is_y_valid;
    disableButtons(!isValid);
    return is_r_valid;
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}

function getR() {
    return document.getElementById("j_idt16:r").value;
}

function disableButtons(isDisabled) {
    let buttonsList = document.querySelectorAll(".form-buttons input[type=submit]");
    buttonsList.forEach(function (button) {
        button.disabled = isDisabled;
    });
}
