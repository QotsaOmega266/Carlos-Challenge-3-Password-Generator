// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//setup variables
var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
var passwordLength = 8;
var password = "";


// generates 8 randomized password characters and displays them in the box to the user 
function createMyPassword() {

  for(var i = 0; i < passwordLength; i++){
    var number = Math.floor(Math.random() * chars.length);
    password += chars.substring(number, number + 1);
  };

  passwordText.value = password;

  
};


// Add event listener to generate button
generateBtn.addEventListener("click", createMyPassword);
