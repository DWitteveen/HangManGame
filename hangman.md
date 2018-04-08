********** Assignment **********

Hangman homework assignment week 3

-Build a Hangman game in React/Redux
-Don't use a database, just a frontend
-Only use 1 action in your Redux setup 
-Download some images off the internet for some visual goodness




********** Game Rules **********

Hangman game rules

User tries to guess the word by suggesting letters within a certain number of guesses.




******************** What to build ********************

The Hangman game must contain atleat these three components

-An image thats updates when the user guessed the wrong letter.
-The word that updates when the user guessed the right letter (H _ N _M _ N)
-An inputfield for the letters




********** Keeping track **********

Game status:
Decide if user wins/lost
Replace _ with letters when the right letters are guessed.
if slots still contains _ keep playing. if all slots are filled with letter stop.

Strike counter:
Keep track of the amount of wrong answers the user has given
example if strikes === 6 , game over

Letterchecker:
Does the by the user given letter matches a letter(s) in the word to be guessed


********** Containers ********** 

Wordslist:
in/export a list of words.

Keyboard:
Create a keyboard using buttons



********** Layout overview **********

Input Field:
Where the user is able to insert the numbers

Image:
An image that updates if the user enter a wrong letter

Word to be guessed:
The word that updates when the user guesses the right letter



********** Actions **********

New game:
Create a button that resets the game




