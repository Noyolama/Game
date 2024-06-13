let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

const drawGame=()=>{
   console.log("game is draw")
   msg.innerText="Game is Draw. Play again"
   msg.style.backgroundColor=" #081b31"
};


const showWinner=(userwin,userChoice,compChoice)=>{
   if(userwin){
      userScore++;
      userScorePara.innerText=userScore;
      console.log("you win")
      msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`
      msg.style.backgroundColor="Green";
   }
   else{
      compScore++;
      compScorePara.innerText=compScore;
      console.log("you lose")
      msg.innerText=`You Lose! ${compChoice} beats Your ${userChoice}`;
      msg.style.backgroundColor="red";
   }
  };

const playGame=(userChoice)=>{
  console.log("user choice=",userChoice);
  let compChoice=genCompChoice();
  console.log("Computer choice=",compChoice);
 
if(userChoice===compChoice){
  drawGame();
  }else{
  let userwin=true;
if(userChoice==="rock"){
     userwin= compChoice==="paper" ? false: true;
 }
else if(userChoice==="paper"){
      userwin=compChoice==="scissor" ? false: true;
 }
 else{
       userwin=compChoice==="rock"?false: true
  }
    showWinner(userwin,userChoice,compChoice);
  }
 
};




const genCompChoice=()=>{
   let options=["scissor","paper","rock"];
   let randIdx=Math.floor(Math.random()*3);
   return (options[randIdx]);
}





choices.forEach((choice)=>{
    
   choice.addEventListener("click",()=>{
    const userChoice= choice.getAttribute("id")
      playGame(userChoice);
   })
   
})
