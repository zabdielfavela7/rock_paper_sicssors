const selection = ["ROCK","PAPER","SICSSORS"];

function computerPlay(){    
    return selection[Math.floor(Math.random()*3)]
}

function playerSelection(){
    let selectionPlayer = prompt("Enter (R)Rock, (P)paper or (S)sicssors");
    selectionPlayer = selectionPlayer.toUpperCase();

    if(selectionPlayer == 'R'){
        return "ROCK"
    } else if(selectionPlayer == 'P'){
        return "PAPER"
    }  else if(selectionPlayer == 'S'){
        return "SICSSORS"
    }  else{
        return playerSelection()
    }

}

function playRound(player, computer){
    console.log("player plays " + player);
    console.log("computer playes " + computer);

    if(player == computer){
        console.log("Tie on " + player );
    } else {
        if(player == "ROCK"){
            if(computer == "SICSSORS"){
                console.log("win " + player + " beats " + computer);
                return "win"
            } else{
                console.log("lose " + computer + " beats " + player);
                return "lose"
            }
        }
        if(player == "PAPER"){
            if(computer == "ROCK"){
                console.log("win " + player + " beats " + computer);
                return "win"
            } else{
                console.log("lose " + computer + " beats " + player);
                return "lose"
            }
        }
        if(player == "SICSSORS"){
            if(computer == "PAPER"){
                console.log("win " + player + " beats " + computer);
                return "win"
            } else{
                console.log("lose " + computer + " beats " + player);
                return "lose"
            }
        }
    }
}

function game(){

    alert("The player with 3 victories wins")
    let scorePlayer = 0;
    let scoreComputer = 0;

    while(scorePlayer < 3 && scoreComputer < 3){
        let result = playRound(playerSelection(), computerPlay());
        
        if(result == "win"){
            scorePlayer++;
        } else if(result == "lose"){
            scoreComputer++;
        }

        console.log("score is " + scorePlayer + "-" + scoreComputer);
        
    }

    if(scorePlayer > scoreComputer){
        alert("YOU HAVE WON!!!");
    }else{
        alert("you lost :(");
    }

}



game();