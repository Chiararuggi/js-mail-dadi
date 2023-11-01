let userInput = document.getElementById("emailInput");

document.getElementById("confirmButton").addEventListener("click", function(){
    const registeredMail = [ "pippi@gmail.com"];
    let newEmail = userInput.value;
    if (registeredMail.includes(newEmail) === true){
        document.getElementById("message").innerHTML = "Benvenuto!";
    } else document.getElementById("message").innerHTML = "Non hai accesso.";

})
