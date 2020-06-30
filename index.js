var computerChoice ; 
var playerChoice ;
var playerScore=0 , computerScore=0 ;

function computer(){
    var choice = Math.random();
    console.log(choice);
    if(choice<0.34 && choice>=0)
        computerChoice = 'Stone';
    else if(choice <0.67 && choice>=0.34)
        computerChoice = 'Paper';
    else if(choice <1.00 && choice>=0.67)
        computerChoice = 'Scissor'; 
    else 
        computer();
}

function userRock(){
    computer();
    if(computerChoice === 'Stone'){
        document.getElementById("results").innerHTML = "Draw";
    }
    else if(computerChoice === 'Paper'){
        document.getElementById('results').innerHTML = "Stone grabbed by Paper";
        computerScore+=1;
        document.getElementById('computerScore').innerHTML = computerScore;
    }
    else if(computerChoice === 'Scissor'){
        document.getElementById("results").innerHTML = "Stone breaks Scissor";
        playerScore+=1;
        document.getElementById('playerScore').innerHTML = playerScore;
    }
}

function userPaper(){
    computer();
    if(computerChoice === 'Stone'){
        document.getElementById("results").innerHTML = "Paper grab Stone";
        playerScore+=1;
        document.getElementById('playerScore').innerHTML = playerScore;
        
    }
    else if(computerChoice === 'Paper'){
        document.getElementById('results').innerHTML = "Draw";
        
    }
    else if(computerChoice === 'Scissor'){
        document.getElementById("results").innerHTML = "Paper cut by Scissor";
        computerScore+=1;
        document.getElementById('computerScore').innerHTML = computerScore;
        
    }
}

function userScissor(){
    computer();
    if(computerChoice === 'Stone'){
        document.getElementById("results").innerHTML = "Scissor broke by Stone";
        computerScore+=1;
        document.getElementById('computerScore').innerHTML = computerScore;
    }
    else if(computerChoice === 'Paper'){
        document.getElementById('results').innerHTML = "Scissor cuts Paper";
        playerScore+=1;
        document.getElementById('playerScore').innerHTML = playerScore;
    }
    else if(computerChoice === 'Scissor'){
        document.getElementById("results").innerHTML = "Draw";
    }
}

function restartGame(){
    document.getElementById('results').innerHTML = "# wins";
    document.getElementById('computerScore').innerHTML = "0";
    document.getElementById('playerScore').innerHTML = "0";
}