let user_score=0;
let comp_score=0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")



const drawGame=() => {
    console.log("Game is drawn")
    msg.innerText= "Game is drawn!!"
}

const showWinner= (userWin,userChoice, compChoice) => {
   if(userWin){
    console.log("You Win")
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    ++user_score;
    userScorePara.innerText= user_score;


   }else{
    console.log("You Lose")
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    ++comp_score;
    msg.style.backgroundColor = "red";
    compScorePara.innerText=comp_score;
   }
}

const genCompChoice= () => {
    const options = ["rock" , "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();
  
    if (userChoice === compChoice) {
      //Draw Game
      drawGame();
    } else {
      let userWin = true;

      if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
      } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
  };
  

choices.forEach((choice) => {

    choice.addEventListener("click" , () => {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);

    })
})































