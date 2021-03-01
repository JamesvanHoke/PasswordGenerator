# Password Generator

## Purpose

To create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code

## Project Criteria

GIVEN I need a new, secure password<br>
WHEN I click the button to generate a password<br>
THEN I am presented with a series of prompts for password criteria<br>
WHEN prompted for password criteria<br>
THEN I select which criteria to include in the password<br>
WHEN prompted for the length of the password<br>
THEN I choose a length of at least 8 characters and no more than 128 characters<br>
WHEN prompted for character types to include in the password<br>
THEN I choose lowercase, uppercase, numeric, and/or special characters<br>
WHEN I answer each prompt<br>
THEN my input should be validated and at least one character type should be selected<br>
WHEN all prompts are answered<br>
THEN a password is generated that matches the selected criteria<br>
WHEN the password is generated<br>
THEN the password is either displayed in an alert or written to the page<br>

## Approach

A web interface is created with HTML, and styled with CSS. The interface is powered by JavaScript, Javascript is used to create prompts for character type and length as chosen by user.<br>
Restrictions are placed on critera for the password, with a minimum and maximum value of 8 and 128 respectively as well as requiring at least one character set to be chosen. <br>
Once the character sets have been chosen the Javascript will randomly select from the available pool until the desired length is reached, and will then print out their password.

## Preview
![Video Preview of Password Generator](https://i.imgur.com/Kxn9BLI.gif)
