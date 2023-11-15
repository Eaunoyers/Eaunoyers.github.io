function alertButton(){
    alert("JE T'AIME PLUS QUE TOUT!!")
}
function codesub(){
    let code = document.getElementById("inputcode");
    let codeval = code.value;
    if (codeval == "Je t'aime"){
        window.location.assign("maude.html");
    }

}