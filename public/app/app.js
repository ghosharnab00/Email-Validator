import * as EmailValidator from 'email-validator'
var txtInput = document.querySelector("#input");
var validatt = document.querySelector("#input-button");
var output = document.querySelector("#is-verify");

console.log(txtInput);

function validateEmail(email){
    if (EmailValidator.validate(email)){
        console.log ("Valid");
        output.innerHTML = "valid";
    }
    else {
        console.log("Invalid")
        output.innerHTML = "Invalid";
    }
    }

    validatt.addEventListener('click', validateEmail);