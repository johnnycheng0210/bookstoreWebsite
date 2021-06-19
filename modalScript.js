var triggerButton = document.getElementById("trigger-modal");
var regFormModal = document.getElementById("registrationForm");
var closeButton = document.getElementById("closeButton");
var registerButton = document.getElementById("registerButton");


triggerButton.onclick = function(){
    regFormModal.classList.add('show');
}

closeButton.onclick=function(){
    regFormModal.classList.remove('show');

}

registerButton.onclick=function(){
    regFormModal.classList.remove('show');
}



