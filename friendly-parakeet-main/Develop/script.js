// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword() {
  alert("GENERATE PASSWORD!!!!!!!!!!")
  alert("length of at least 8 characters")
  alert("lowercase, uppercase, numeric, and/or special characters")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}



// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
