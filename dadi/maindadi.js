let userInput = document.getElementById("userNumberInput");

document.getElementById("generateNumber").addEventListener("click", function(){
    let casualNumber = Math.floor( Math.random() * 7 );
    let userNumber = userInput.value;

    if(userNumber > 6 || userNumber < 0){
        document.getElementById("message").innerHTML = "Inserisci un numero valido";
        return;
    }

    document.getElementById("winOrloseMessage").innerHTML = "Il numero è " + casualNumber;
    if(userNumber > casualNumber){
        
        document.getElementById("message").innerHTML = "Hai vinto!";

    } else document.getElementById("message").innerHTML = "Hai perso...";
})