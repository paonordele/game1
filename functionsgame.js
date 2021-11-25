const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

window.onload=function(){
    const RockBtn = document.getElementById("Rock");
    const PaperBtn = document.getElementById("Paper");
    const ScissorsBtn = document.getElementById("Scissors");
    const result = document.getElementById("result"); 
    const PlayerScore = document.getElementById("Player-Score");
    const ComputerScore = document.getElementById("Computer-Score");
    const ScoreBoard =  document.querySelector("scoreboard");
    var winplayer = 0;
    var wincomputer = 0;

    
        RockBtn.addEventListener("click", ()=>{
            computerplay(ROCK);
        });
        
        PaperBtn.addEventListener("click", ()=>{
            computerplay(PAPER);
        });
        
        ScissorsBtn.addEventListener("click", ()=>{
            computerplay(SCISSORS);
        });
    
        
        function computerplay(userOption) {
            var computerrand = Math.floor(Math.random() * 3)+1;
                
            if(userOption==1) 
                if (computerrand==1)
                    result.innerHTML = "ROCK - Rock and Rock, We Tied!**"
                    
                else
                    if (computerrand==2){
                        result.innerHTML = "PAPER - Paper beats Rock, I Win!**";
                        wincomputer++;
                        ComputerScore.innerHTML=wincomputer;
                        
                    }
                    else
                        if (computerrand==3){
                            result.innerHTML = "SCISSORS - Rock breaks Scissors, You Win!**";
                            winplayer++;
                            PlayerScore.innerHTML=winplayer;
                        }
    
            if(userOption==2 & computerrand==1){
                result.innerHTML = "ROCK - Paper covers rock, You Win!*";
                winplayer++;
                PlayerScore.innerHTML=winplayer;
            }        
            else
                if (userOption==2 & computerrand==2)
                    result.innerHTML = "PAPER - Paper and Paper, We Tied!**"
                else
                    if (userOption==2 & computerrand==3){
                        result.innerHTML = "SCISSORS - Scissors cuts paper, I Win!**"
                        wincomputer++;
                        ComputerScore.innerHTML=wincomputer;
                    }   
    
            
            if (userOption==3 & computerrand==1){
                result.innerHTML = "ROCK - Rock breaks Scissors, I Win!**"
                wincomputer++;
                ComputerScore.innerHTML=wincomputer;
            }    
            else
                if (userOption==3 & computerrand==2){
                    result.innerHTML = "PAPER - Scissors cuts paper, You Win!**"
                    winplayer++;
                    PlayerScore.innerHTML=winplayer;
                }
                else
                    if(userOption==3 & computerrand==3)   
                        result.innerHTML = "SCISSORS - Scissors and Scissors ** Fun, We Tied!**"

            if (wincomputer==5 || winplayer==5)
                if (wincomputer==5 ){
                        result.innerHTML = "SORRY  :(  COMPUTER IS THE WINNER!!";
                        wincomputer=0;
                        winplayer=0;
                        ComputerScore.innerHTML=wincomputer;
                        PlayerScore.innerHTML=winplayer;
                    }
                    
                else {                    
                    result.innerHTML = "CONGRATULATIONS  ;)  YOU ARE THE WINNER!!";
                    winplayer=0;
                    wincomputer=0;
                    PlayerScore.innerHTML=winplayer;
                    ComputerScore.innerHTML=wincomputer;
                }


                    
           
                
        }

        
}    


      
      
        
       
    

    
  
















/*function getRandomRock(min,max){
    var number = Math.floor(Math.random() * (max - min)) + min;
    console.log(number);
    if (number==1)
        alert("Rock******Fun*******We both Win!*******")
    else
        if (number==2)
            alert("Paper*********Sorry, I Win!*******") 
        else
            alert("Scissors*******Congratulations, You Win!*********") 
}

function getRandomPaper(min,max){
    var number = Math.floor(Math.random() * (max - min)) + min;
      
    console.log(number);
    if (number==1)
        alert("Rock******Congratulations, You Win!********")
        
    else
        if (number==2)
            alert("Paper*********Fun*******We both Win!*******") 
        else
            alert("Scissors*******Sorry, I Win!*********")   
}

function getRandomScissors(min,max){
    var number = Math.floor(Math.random() * (max - min)) + min;
    console.log(number);
    if (number==1)
        alert("Rock******Sorry, I Win!********")
    else
        if (number==2)
            alert("Paper*********Congratulations, You Win!*******") 
        else
            alert("Scissors*******Fun*******We both Win!********")  
}
      */  
             
         