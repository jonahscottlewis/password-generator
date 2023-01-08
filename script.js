// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function generatePassword(){
  var userLength = parseInt(prompt("How long?"));
  var useNumbers = confirm("Would you like to use numbers?");
  var useLetters = confirm("Would you like to use letters?");

  if (userLength > 8 && userLength < 128) {
    if (useNumbers || useLetters || lowerLetters || upperLetters)
  } else {
    return "Please make length between 8 and 128 characters";
  }

  return "anything";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//abcdefghijklmnopqrstuvwxyz0123456789!?

