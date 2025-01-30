const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordEl1 = document.getElementById("password-el1")
let passwordEl2 = document.getElementById("password-el2")
// let newPassword1 = []
// let newPassword2 = []

function getRandomPassword() {
    let randomNumber = Math.floor(Math.random() * characters.length)
    return randomNumber 
}

function generatePassword() {
    passwordEl1.textContent = ""
    passwordEl2.textContent = ""
    for (i = 0; i < 15; i++) {
        passwordEl1.textContent += characters[getRandomPassword()]
    }
    for (i = 0; i < 15; i++) {
        passwordEl2.textContent += characters[getRandomPassword()]
    }
}








