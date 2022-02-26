var apiKey = "DI11MUVHJ3RMBP37UTOR";
var mainUrl = "https://api.mailboxvalidator.com/v1/validation/single";

var emailInput = document.getElementById("input");
var verifyClick = document.getElementById("input-button");
var result = document.getElementById("is-verify");



function getReq(url){

return url + "?key=" + apiKey + "&email=" + emailInput.value

}

console.log(getReq);

function verifyEmail(){
    fetch (getReq(mainUrl), { mode: 'no-cors'})
    .then ( response => response.json())
    .then (json => {var res = json.status; console.log(res)}).catch(err => {console.log(err); alert("Server Limit Crossed , try with other API")})
}

/*verifyClick.addEventListener("click", verifyEmail);*/



/* fetch (url, { mode: 'no-cors'})
.then (response => response.json())
.then (json => {var temp = json.status; console.log(temp)}) */