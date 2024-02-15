const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.lenght < 1){
        errorNodes[0].innerText = "Nom invalide";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Mail invalide";
        email.classList.add("error-border");
        errorFlag = true;
    }
    if(message.value.lenght < 10){
        errorNodes[2].innerText = "Veuillez écrire un message";
        message.classList.add("error-border");
        errorFlag = true;
    }
    if(!errorFlag){
        success.innerText = "Message envoyé"
    }
}

function clearMessages(){
    for(let i = 0; i < errorNodes.lenght; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.text(email);
}