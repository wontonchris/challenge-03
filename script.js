// password function
function generatePassword() {
  // char set
  var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
  var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numbers = ["0123456789"];
  var special = ["!@#$%^&*()_+-=[]{}|;':\"<>,.?/"];

  var password = "";

  var length = parseInt(prompt("choose a length of at least 8 characters and no more than 128 characters"));
  if(length < 8 || length > 128) {
    alert("does not meet requirements"); //how to stop generating?
  }

  var includelowerCase = confirm("lower case?");
  var includeupperCase = confirm("upper case?");
  var includenumbers = confirm("numbers?");
  var includespecial = confirm("special symbols?");
  //build pw attempt
  var charset = "";
  

  if(includelowerCase) {
    charset += lowerCase;
  }
  if(upperCase) {
    charset += upperCase;
  }
  if(includenumbers) {
    charset += numbers;
  }
  if(includespecial) {
    charset += special;
  }
  // if (charset === 0){
  //   alert("Does not meet requirements"); 
  // }

  

  for (var p=0; p < length; p++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length)); // charAT,Math.floor, Math.random 
  }

  return password;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);