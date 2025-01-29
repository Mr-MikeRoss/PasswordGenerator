const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
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
    let newPassword1 = []
    let newPassword2 = []
    
    for (i= 0; i < 15; i++) {
        newPassword1.push(characters[getRandomPassword()])
    } 
    passwordEl1.textContent = newPassword1
    
    for (i= 0; i < 15; i++) {
        newPassword2.push(characters[getRandomPassword()])
    } 
    passwordEl2.textContent = newPassword2
}

function copyText() {
    let copyText = document.getElementById("password-el1").innerText
    copyText.select()
    navigator.clipboard.writeText(copyText.value)
    alert("Copied Password")
}







