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
      if (data.is_verified === "True") {
        console.log("Valid");
        output.innerHTML = "Valid";
      } else {
        console.log("InValid");
        output.innerHTML = "InValid";
      }
    });
});
