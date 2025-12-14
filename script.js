function getComputerChoice(){
  let compChoice=getRandomInteger(3);
  switch(compChoice){
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
    default:
      return "Not Valid";
  }
}
function getRandomInteger(max){
  return Math.floor(Math.random()*max);
}
function getHumanChoice(){
  let userChoice=prompt(`Enter Choice`)
  userChoice=userChoice.toLowerCase();
  return userChoice;
}
function Display(){
  console.log(message);
  console.log(winloss);
}
let userChoice=getHumanChoice();
let compChoice = getComputerChoice().toLowerCase();
let message= `You chose ${userChoice}. The Computer Chose ${compChoice}.`;
let winloss= compChoice===userChoice? `You Win!` : `You Lose`;
Display();

