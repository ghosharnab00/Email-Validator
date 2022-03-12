var apiKey = "DI11MUVHJ3RMBP37UTOR";
var url = "https://api.mailboxvalidator.com/v1/validation/single";
var mainUrl = "https://api.mailboxvalidator.com/v1/validation/single";

var emailInput = document.getElementById("input");
var verifyClick = document.getElementById("input-button");
var result = document.getElementById("is-verify");



function getReq(url){

return url + "?key=" + apiKey + "&email=" + emailInput.value

}

function verifyEmail(){
    fetch (getReq(mainUrl), { mode: 'no-cors'})
    .then ( response => response.json())
    .then (json => {var validate = json.status;
        function outPut_validate(){
            if (validate == "True"){
                result.innerHTML = "Valid";
            }
                else {
                    result.innerHTML = "InValid"
                }
            }
    }).catch(err => {console.log(err); alert("Server Limit Crossed , try with other API")})
}

verifyClick.addEventListener("click", verifyEmail)