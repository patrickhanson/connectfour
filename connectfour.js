let currentDiscColor = "r";
let instructionsDiv = document.getElementById("instructions")

let board = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
]

function createDot() {
    console.log(event.target.id);
    let destination = event.target;
    let play = board[event.target.id]
    const newElement = document.createElement("span")
    if (currentDiscColor == "r") {
        currentDiscColor = "b"
        newElement.className = "reddot"
        play.push(1)
        instructionsDiv.textContent = "Black Team's Turn!"
    } else {
        currentDiscColor = "r"
        newElement.className = "blackdot"
        play.push(2)
        instructionsDiv.textContent = "Red Team's Turn!"
    }
    destination.appendChild(newElement)
}

document.getElementById("wrapper").addEventListener("click",function(){ createDot()});