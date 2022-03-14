// var validator = require('email-validator')
var txtInput = document.querySelector("#input");
var validatt = document.querySelector("#input-button");
var output = document.querySelector("#is-verify");

console.log(txtInput);

validatt.addEventListener("click", () => {
  let url = `/validate?email=${txtInput.value}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.isValid) {
        console.log("Valid");
        output.innerHTML = "valid";
      } else {
        console.log("Invalid");
        output.innerHTML = "Invalid";
      }
    });
});
