        const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }else{
    console.log('Error');
  }
};
const getComputerChoice = ()=>{
  let randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
  case 0:
    return 'rock';
    break;
  case 1:
    return 'paper';
    break;
  default :
  return 'scissors';
}
}
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return "The game is tie....!"
  } else {
    if(userChoice === "rock"){
      if(computerChoice === "paper"){
        return "The Computer won."
      }else{
        return "User won."
      }
    }
      if(userChoice === "paper"){
        if(computerChoice === "scissors" || computerChoice === "rock"){
          return " User won."
        }else{
          return "Computer won"
        }
    }
        if(userChoice === "scissors"){
        if(computerChoice === "paper" || computerChoice === "rock"){
          return " User won."
        }else{
          return "Computer won"
        }
      }
    }
    }
const playGame = () => {
   const userChoice = getUserChoice('RoCk');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw: ' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};


console.log(playGame());
