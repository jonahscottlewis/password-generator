// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var letters = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];

var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

function generatePassword(){
  var passwordReturn = [];
  var userLength = parseInt(prompt("How long would you like your password?"));
  

  if (userLength > 8 && userLength < 128) {
  var useNumbers = confirm("Would you like to use numbers?");
  var useUpper = confirm("Would you like to use upper casse letters?");
  var useLower = confirm("Would you like to use lower case letters?")
  var useSpecial = confirm("Would you like to use spcial characters?");
   if (useNumbers || useLetters || useSpecial){
    var allPossibleCharacters = [];

   if (useNumbers){
    allPossibleCharacters = allPossibleCharacters.concat(numbers);
   }

   if (useUpper) {
    allPossibleCharacters = allPossibleCharacters.concat(letters);
   }

   if(useLower) {
    allPossibleCharacters = allPossibleCharacters.concat(letters);
   }
   if (useSpecial) {
    allPossibleCharacters = allPossibleCharacters.concat(special);
   }

   for (var i=0; i< userLength; i++){
    var randomIndex = Math.floor(Math.random() * allPossibleCharacters.length);

    passwordReturn.push(allPossibleCharacters[randomIndex]);
   }

   return passwordReturn.join("");
   } else {
     return "Please select at least one possible set of characters";
   }
   } else {
      return "Please make length between 8 and 128 characters";
    }
  };




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
