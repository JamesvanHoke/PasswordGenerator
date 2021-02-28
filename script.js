// Assignment Code

//Retrieves reference to to the button with the generate ID
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
//Adds a listener for generatebtn clicks, executes function of writePassword
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //Prompt User for Password length
  //make sure length is between 8 and 124
  //Confirm prompt user if they want Special Characters
  //Confirm prompt user if they want Numeric Characters
  //Confirm prompt user if they want uppercase Characters
  //Confirm prompt user if they want lowercase Characters

for (let i = 0; i < array.length; index++) {
    const element = array[index];
    
}

  return "password should go here";
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
  
  console.log(getRandomItem(pets));