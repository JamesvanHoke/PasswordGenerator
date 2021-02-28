// Assignment Code

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

//Retrieves reference to to the button with the generate ID
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //Prompt User for Password length
  var PasswordLength = prompt("Please select a password length between 8 and 128 characters.");
  //make sure length is between 8 and 128
  if (PasswordLength < 8 || PasswordLength > 128) {
    alert("Invalid length; please input a number between 8 and 128");
    return "invalid length; please input a number btween 8 and 128";    
  }
    //Confirm prompt user if they want Special Characters
    var UseSpecial = confirm("Do you want Special Characters? (!,#,?, etc)");
    //Confirm prompt user if they want Numeric Characters
    var UseNumeric = confirm("Do you want Numeric Characters? (0-9)");
    //Confirm prompt user if they want uppercase Characters
    var UseUppercase = confirm("Do you want Uppercase Characters?  (A-Z)");
    //Confirm prompt user if they want lowercase Characters
    var UseLowercase = confirm("Do you want Lowercase Characters? (a-z)");
    
    if (!UseLowercase && !UseNumeric && !UseSpecial && !UseUppercase) {
      return alert('At least one character type must be selected')      
    }



  // Algo for password generation goes below

  // return the build password
  return "Hello I am the password place holder :)";
}

// Retrieve a random item from the provided array
function getRandomItem(arr) {
  // Generate a random index from 0 to the length - 1 of our array
  var randomIndex = Math.random() * arr.length;
  // round down our random index
  randomIndex = Math.floor(randomIndex);
  // return the random item based off of our random index
  return arr[randomIndex];
  // One liner of the above code
  // return arr[Math.floor(Math.random() * arr.length)];
}
  
  // console.log(getRandomItem(ArrayName));


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}