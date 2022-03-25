let scorePlayer = 0;
let scoreComputer = 0;

const selection = ["ROCK","PAPER","SICSSORS"];

const container = document.querySelector('#container');
const score = document.createElement('div');
score.textContent = "0-0"
container.appendChild(score);
const div = document.createElement('div');
container.appendChild(div);

selection.forEach( ele => {
    let btn = document.createElement("button");
    btn.innerText = ele;
    btn.value = ele;

    btn.addEventListener('click', () => {
        playRound(btn.value, computerPlay());
    });

    container.appendChild(btn);
});



function computerPlay(){    
    return selection[Math.floor(Math.random()*3)]
}

/*
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

}*/

function playRound(player, computer){
    console.log("player plays " + player);
    console.log("computer playes " + computer);

    

    if(player == computer){
        div.textContent = "Tie on " + player;
    } else {
        if(player == "ROCK"){
            if(computer == "SICSSORS"){
                div.textContent = "win " + player + " beats " + computer;
                scorePlayer++;
            } else{
                div.textContent = "lose " + computer + " beats " + player;
                scoreComputer++;
            }
        }
        if(player == "PAPER"){
            if(computer == "ROCK"){
                div.textContent = "win " + player + " beats " + computer;
                scorePlayer++;
            } else{
                div.textContent = "lose " + computer + " beats " + player;
                scoreComputer++;
            }
        }
        if(player == "SICSSORS"){
            if(computer == "PAPER"){
                div.textContent = "win " + player + " beats " + computer;
                scorePlayer++;
            } else{
                div.textContent =   "lose " + computer + " beats " + player;
                scoreComputer++;
            }
        }
    }
    
    score.textContent = scorePlayer + "-" + scoreComputer;

    if(scorePlayer == 5){
        const winner = document.createElement('div');
        winner.textContent = "you WIN";
        container.appendChild(winner);
    } 
    if(scoreComputer == 5){
        const winner = document.createElement('div');
        winner.textContent = "you LOSE";
        container.appendChild(winner);
    }
}
/*
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
*/


//game();
//temp branch commit