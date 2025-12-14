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
function winloss(user, comp){
  if(user===comp){
    return `Its a Draw`;
  }
  else if(
    (user===`rock` && comp ===`scissors`)
    || (user===`paper` && comp === `rock`)
    || (user===`scissors` && comp===`paper`)
  ){
    return `You Win!`;
  }
  else{
    return `You Lose, Computer Wins!`
  }
}
let score=0;
for(let i=0; i<5; i++){
  let userChoice=getHumanChoice();
  let compChoice = getComputerChoice().toLowerCase();
  console.log(`You chose ${userChoice.toUpperCase()}.`);
  console.log(`The Computer Chose ${compChoice.toUpperCase()}.`);
  result=winloss(userChoice, compChoice);
  console.log(result);
  score+=(result===`You Win!`?1:0);
  console.log(`Score::::${score}`);
  console.log(``);
}