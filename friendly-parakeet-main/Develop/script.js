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
  let char =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&()*+-./:{}[]";
  var passwordLength = 12;
  let password ="";


  for (let i = 0; i < char.length; i++) {
    let randomNumber = Math.floor(Math.random() * char.length);
    password += char.substring(randomNumber, randomNumber + 80);
    
    console.log(password);
    return password;
  }
  
  document.getElementById("password").value = password;
}



// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
