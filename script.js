// Assignment Code
debugger;
// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//Creates blank variable for the user prompt to feed the desired characters into
var PasswordCharacters = "";

//Retrieves reference to to the button with the generate ID
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Prompt User for Password length
  var PasswordLength = prompt(
    "Please select a password length between 8 and 128 characters."
  );
  //make sure length is between 8 and 128
  if (PasswordLength < 8 || PasswordLength > 128) {
    alert("Invalid length; please input a number between 8 and 128");
    return "invalid length; please input a number btween 8 and 128";
  }
  //Confirm prompt user if they want Special Characters
  var UseSpecial = confirm("Do you want Special Characters? (!,#,?, etc)");
  //Adds Special characters to password generation
  if (UseSpecial) {
    PasswordCharacters = [...PasswordCharacters, ...specialCharacters]
  }
  //Confirm prompt user if they want Numeric Characters
  var UseNumeric = confirm("Do you want Numeric Characters? (0-9)");
  //Adds Numeric characters to password generation
  if (UseNumeric) {
    PasswordCharacters = [...PasswordCharacters, ...numericCharacters];
    // PasswordCharacters += numericCharacters;
  }
  //Confirm prompt user if they want uppercase Characters
  var UseUppercase = confirm("Do you want Uppercase Characters?  (A-Z)");
  //Adds Upper Case characters to password generation array
  if (UseUppercase) {
    PasswordCharacters = [...PasswordCharacters, ...upperCasedCharacters];
  }
  //Confirm prompt user if they want lowercase Characters
  var UseLowercase = confirm("Do you want Lowercase Characters? (a-z)");
  //Adds Lower Case characters to password generation
  if (UseLowercase) {
    PasswordCharacters = [...PasswordCharacters, ...lowerCasedCharacters];
  }
  //Checks to make sure one of the character sets is used.
  if (!UseLowercase && !UseNumeric && !UseSpecial && !UseUppercase) {
    return alert("At least one character type must be selected");
  }
//Function to pull a random index from a specified array
  function random(Array) {
    var randomeIndex = Math.floor(Math.random() * Array.length);
    var item = Array[randomeIndex];
    return item;
  }
  //For loops iterates based on Password length specified by user. Uses math.random to randomly select an index from our generated PasswordCharacters array, and continues until we reach desired password length
  for (var i = 0; i < PasswordLength; i++) {
    password += random(PasswordCharacters);
  }
  return password;
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
