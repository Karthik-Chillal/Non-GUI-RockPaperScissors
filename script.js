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
    while (true) {
    let input = prompt("Enter choice: rock, paper, or scissors");

    if (input === null) {
      return null;
    }
    input=input.toLowerCase().trim();
    if(input===`rock`
      || input===`paper`
      || input===`scissors`
    ){
      return input;
    }
    alert("Wrong choice! Enter rock, paper, or scissors.");
  }
}
function Display(){
  console.log(message);
  console.log(winloss);
}
let userChoice=getHumanChoice();
let compChoice = getComputerChoice().toLowerCase();
let message= `You chose ${userChoice.toUpperCase()}. The Computer Chose ${compChoice.toUpperCase()}.`;
let winloss= compChoice===userChoice? `You Win!` : `You Lose`;
Display();

