const buttonGenerate = document.querySelector(".btn");
const inputRandomPassword = document.querySelector(".input-box");
const passwordCopier = document.querySelector(".password-copier");
const alertMessage = document.querySelector(".alert-container");
passwordCopier.innerHTML = "\u2750";

buttonGenerate.addEventListener("click", () => {
    randomPasswordGenerator();
});

function randomPasswordGenerator() {
    let password = "";
    let passwordLength = 14;
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12345678910@#$%&*";
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    inputRandomPassword.value = password;
}
