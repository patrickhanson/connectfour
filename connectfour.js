let currentDiscColor = "r";
let instructionsDiv = document.getElementById("instructions")
let winnerDiv = document.getElementById("winner")

let board = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
]


function checkWin() {
    
    for(let columnIndex = 0; columnIndex < board.length; columnIndex++) {
        const edgeX = board[columnIndex].length;
        const edgeY = board.length;
        
        for(let rowIndex = 0; rowIndex < edgeX; rowIndex++) {
            let cell = board[columnIndex][rowIndex];
            
            if(cell === 1) {
                if(cell === board[columnIndex][rowIndex+1] && cell === board[columnIndex][rowIndex+2] && cell === board[columnIndex][rowIndex+3]) {
                    console.log("Red Wins");
                    winnerDiv.textContent = "RED WINS MOTHERFUCKER" + "--" + "Refresh and play again!"
                    winnerDiv.style.color = "red"
                    winnerDiv.style.border = "solid 2px red"
                }
            } else if(cell === 2) {
                if(cell === board[columnIndex][rowIndex+1] && cell === board[columnIndex][rowIndex+2] && cell === board[columnIndex][rowIndex+3]) {
                    console.log("Black Wins");
                    winnerDiv.textContent = "BLACK WINS BITCH" + "--" + "Refresh and play again!"
                    winnerDiv.style.color = "black"
                    winnerDiv.style.border = "solid 2px black"
                }
            }
        }
    }
    for(let columnIndex = 0; columnIndex < board.length; columnIndex++) {
        const edgeX = board[columnIndex].length;
        const edgeY = board.length;

        for(let rowIndex = 0; rowIndex < edgeX; rowIndex++) {
            let cell = board[columnIndex][rowIndex];
            
            if(cell === 1) {
                if(cell === board[columnIndex+1][rowIndex] && cell === board[columnIndex+2][rowIndex] && cell === board[columnIndex+3][rowIndex]) {
                    console.log("Red Wins");
                    winnerDiv.textContent = "RED WINS MOTHERFUCKER" + "--" + "Refresh and play again!"
                    winnerDiv.style.color = "red"
                    winnerDiv.style.border = "solid 2px red"
                }
            } else if(cell === 2) {
                if(cell === board[columnIndex+1][rowIndex] && cell === board[columnIndex+2][rowIndex] && cell === board[columnIndex+3][rowIndex]) {
                    console.log("Black Wins");
                    winnerDiv.textContent = "BLACK WINS BITCH" + "--" + "Refresh and play again!"
                    winnerDiv.style.color = "black"
                    winnerDiv.style.border = "solid 2px black"
                }
            }
        }
    }
    for(let columnIndex = 0; columnIndex < board.length; columnIndex++) {
        const edgeX = board[columnIndex].length;
        const edgeY = board.length;

        for(let rowIndex = 0; rowIndex < edgeX; rowIndex++) {
            let cell = board[columnIndex][rowIndex];
            
            if(cell === 1) {
                if(cell === board[columnIndex+1][rowIndex+1] && cell === board[columnIndex+2][rowIndex+2] && cell === board[columnIndex+3][rowIndex+3]) {
                    console.log("Red Wins");
                    winnerDiv.textContent = "RED WINS MOTHERFUCKER" + "--" + "Refresh and play again!"
                    winnerDiv.style.color = "red"
                    winnerDiv.style.border = "solid 2px red"
                }
            } else if(cell === 2) {
                if(cell === board[columnIndex+1][rowIndex+1] && cell === board[columnIndex+2][rowIndex+2] && cell === board[columnIndex+3][rowIndex+3]) {
                    console.log("Black Wins");
                    winnerDiv.textContent = "BLACK WINS BITCH" + "--" + "Refresh and play again!"
                    winnerDiv.style.color = "black"
                    winnerDiv.style.border = "solid 2px black"
                }
            }
        }
    }
    for(let columnIndex = 2; columnIndex < board.length; columnIndex++) {
        const edgeX = board[columnIndex].length;
        const edgeY = board.length;

        for(let rowIndex = 0; rowIndex < edgeX; rowIndex++) {
            let cell = board[columnIndex][rowIndex];
            
            if(cell === 1) {
                if(cell === board[columnIndex+1][rowIndex-1] && cell === board[columnIndex+2][rowIndex-2] && cell === board[columnIndex+3][rowIndex-3]) {
                    console.log("Red Wins");
                    winnerDiv.textContent = "RED WINS MOTHERFUCKER" + "--" + "Refresh and play again!"
                    winnerDiv.style.color = "red"
                    winnerDiv.style.border = "solid 2px red"
                }
            } else if(cell === 2) {
                if(cell === board[columnIndex+1][rowIndex-1] && cell === board[columnIndex+2][rowIndex-2] && cell === board[columnIndex+3][rowIndex-3]) {
                    console.log("Black Wins");
                    winnerDiv.textContent = "BLACK WINS BITCH" + "--" + "Refresh and play again!"
                    winnerDiv.style.color = "black"
                    winnerDiv.style.border = "solid 2px black"
                }
            }
        }
    }
}

function createDot(event) {
    const destination = event.target;
    const play = board[event.target.id]
    const newElement = document.createElement("span")
    if (currentDiscColor == "r") {
        currentDiscColor = "b"
        newElement.className = "reddot"
        play.push(1)
        instructionsDiv.textContent = "Black Team's Turn!"
        instructionsDiv.style.color = "black"
    } else {
        currentDiscColor = "r"
        newElement.className = "blackdot"
        play.push(2)
        instructionsDiv.textContent = "Red Team's Turn!"
        instructionsDiv.style.color = "red"
    }
    destination.appendChild(newElement)
    checkWin()
}

document.getElementById("wrapper").addEventListener("click", createDot);