let currentDiscColor = "r";
let instructionsDiv = document.getElementById("instructions")
let winnerDiv = document.getElementById("winner")

let board = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
]

function checkDraw() {
    if(Array.from(document.querySelectorAll(".column")).every(column => column.childElementCount >= 6)) {
        winnerDiv.textContent = "It is a tie, my dudes *WOMP WOMP*"
        winnerDiv.style.border = "solid 2px rgb(73,8,73)"
        winnerDiv.style.color = "rgb(73,8,73)"
        return true
    }
    return false
}

function checkWin() {
    if (checkDraw()) {
        return false
    } else {

        for(let columnIndex = 0; columnIndex < board.length; columnIndex++) {
            const edgeX = board[columnIndex].length;
            const edgeY = board.length;
            
            for(let rowIndex = 0; rowIndex < edgeX; rowIndex++) {
                let cell = board[columnIndex][rowIndex];
                
                if(cell === 1) {
                    if(cell === board[columnIndex][rowIndex+1] && cell === board[columnIndex][rowIndex+2] && cell === board[columnIndex][rowIndex+3]) {
                        console.log("Red Wins");
                        winnerDiv.textContent = "RED WINS" + "--" + "Refresh and play again!"
                        winnerDiv.style.color = "red"
                        winnerDiv.style.border = "solid 2px red"
                    }
                } else if(cell === 2) {
                    if(cell === board[columnIndex][rowIndex+1] && cell === board[columnIndex][rowIndex+2] && cell === board[columnIndex][rowIndex+3]) {
                        console.log("Black Wins");
                        winnerDiv.textContent = "BLACK WINS" + "--" + "Refresh and play again!"
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
                        winnerDiv.textContent = "RED WINS" + "--" + "Refresh and play again!"
                        winnerDiv.style.color = "red"
                        winnerDiv.style.border = "solid 2px red"
                    }
                } else if(cell === 2) {
                    if(cell === board[columnIndex+1][rowIndex] && cell === board[columnIndex+2][rowIndex] && cell === board[columnIndex+3][rowIndex]) {
                        console.log("Black Wins");
                        winnerDiv.textContent = "BLACK WINS" + "--" + "Refresh and play again!"
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
                        winnerDiv.textContent = "RED WINS" + "--" + "Refresh and play again!"
                        winnerDiv.style.color = "red"
                        winnerDiv.style.border = "solid 2px red"
                    }
                } else if(cell === 2) {
                    if(cell === board[columnIndex+1][rowIndex+1] && cell === board[columnIndex+2][rowIndex+2] && cell === board[columnIndex+3][rowIndex+3]) {
                        console.log("Black Wins");
                        winnerDiv.textContent = "BLACK WINS" + "--" + "Refresh and play again!"
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
                        winnerDiv.textContent = "RED WINS" + "--" + "Refresh and play again!"
                        winnerDiv.style.color = "red"
                        winnerDiv.style.border = "solid 2px red"
                    }
                } else if(cell === 2) {
                    if(cell === board[columnIndex+1][rowIndex-1] && cell === board[columnIndex+2][rowIndex-2] && cell === board[columnIndex+3][rowIndex-3]) {
                        winnerDiv.textContent = "BLACK WINS" + "--" + "Refresh and play again!"
                        winnerDiv.style.color = "black"
                        winnerDiv.style.border = "solid 2px black"
                    }
                }
            }
        }
    }
}



function createDot(event) {
    const destination = event.target;

    if (destination.childElementCount < 6) {
        const play = board[event.target.id]
        const newElement = document.createElement("span")
        if (currentDiscColor == "r") {
            currentDiscColor = "b"
            newElement.className = "reddot"
            play.push(1)
            instructionsDiv.textContent = "Black Team's Turn!"
            instructionsDiv.style.color = "black"
            instructionsDiv.style.border = "solid 5px black"
        } else {
            currentDiscColor = "r"
            newElement.className = "blackdot"
            play.push(2)
            instructionsDiv.textContent = "Red Team's Turn!"
            instructionsDiv.style.color = "red"
            instructionsDiv.style.border = "solid 5px red"
        }
        destination.appendChild(newElement)
        checkWin()
    } else {
        alert("Column is full!")
    }
}

document.getElementById("wrapper").addEventListener("click", createDot);