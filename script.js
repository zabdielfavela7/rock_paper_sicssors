const selection = ["ROCK","PAPER","SICSSORS"];

function computerPlay(){    
    return selection[Math.floor(Math.random()*3)]
}

function playerSelection(){
    let selectionPlayer = prompt("Enter (R)Rock, (P)paper or (S)sicssors");
    selectionPlayer = selectionPlayer.toUpperCase();
    console.log(selectionPlayer);

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


console.log(playerSelection());