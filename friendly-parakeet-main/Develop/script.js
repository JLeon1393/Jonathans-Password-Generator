// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

for(var i = 0; i <= generateBtn; i++){
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);