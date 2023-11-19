// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//setup variables
var passwordCharacters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
var passwordLength = 8;
var passwordVariable = "";


// generates 8 randomized password characters and displays them in the box to the user 
function createMyPassword() {

  for(var i = 0; i < passwordLength; i++){
    var number = Math.floor(Math.random() * passwordCharacters.length);
    passwordVariable += passwordCharacters.substring(number, number + 1);
  };

  passwordText.value = passwordVariable;

  
};


// Add event listener to generate button
generateBtn.addEventListener("click", createMyPassword);
