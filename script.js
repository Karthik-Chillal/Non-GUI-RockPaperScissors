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
function playRound(user, comp){
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
let total=0;
const btn=document.querySelectorAll(".btn");
const result=document.createElement("h1");
document.querySelector(".res").appendChild(result);
const points=document.createElement("h2");
document.querySelector(".res").appendChild(points);
let userChoice="";
let compChoice="";
btn.forEach((button)=>{
  button.addEventListener("click", (e)=>{
    userChoice=e.target.id;
    compChoice=getComputerChoice().toLowerCase();
    result.textContent=playRound(userChoice, compChoice).toUpperCase();
    total++;
    if(result.textContent==`YOU WIN!`){
      score++;
    }
    points.textContent=`Score: ${score}/${total}`;
  });
});
reset=document.querySelector(".reset");
reset.addEventListener("click", ()=>{
  result.textContent=``;
  points.textContent=``;
})
