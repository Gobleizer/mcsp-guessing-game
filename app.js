// const userName = prompt("What is your name?");

function play() {
  let secretNumber = Math.floor(Math.random() * 10) + 1;
  let prevGuesses = [];
  while(true) {
    const guess = prompt("Guess a number.");
    if(guess === null) {
      alert("Goodbye!");
      break;
    }

    const numGuess = Number(guess);
    
    if(Number.isNaN(numGuess)) {
      alert("Please enter a valid number");
    } else if(numGuess < secretNumber) {
      prevGuesses.push(numGuess);
      alert(`Sorry ${userName}, guess higher`);
    } else if(numGuess > secretNumber) {
      prevGuesses.push(numGuess);
      alert(`Sorry ${userName}, guess lower`);
    } else {
      alert(`Correct! Your previous guess(es) were ${prevGuesses.join(", ")}.`);
      const playAgain = prompt("Do you want to play again?");
      if(playAgain.toLowerCase() === "yes") {
        play();
      } else {
        break;
      }
    }
  }
}

play();
