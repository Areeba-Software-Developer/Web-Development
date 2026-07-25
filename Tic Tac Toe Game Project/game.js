let cells = document.querySelectorAll(".cell");
let resetBtn = document.getElementById("resetBtn");
const line = document.getElementById("winLinePath");
let status = document.getElementById("status");
let turnDot = document.getElementById("turnText");

let scoreX = 0;
let scoreO = 0;

let scoreXText = document.getElementById("scoreX");
let scoreOText = document.getElementById("scoreO");

scoreXText.innerText = scoreX;
scoreOText.innerText = scoreO;

let turnO = true;

const winPatterns = [[0, 1, 2],
                     [3, 4, 5],
                     [6, 7, 8], 
                     [0, 3, 6],
                     [1, 4, 7],
                     [2, 5, 8],
                     [0, 4, 8], 
                     [2, 4, 6]                    
];

cells.forEach((cell) => {
   cell.addEventListener("click", () => {
    if(turnO){
        cell.innerText = "O";
        cell.disabled = true;
        turnO = false;
        updateTurn();
        updateTurnDot();
    }
    else {
        cell.innerText = "X";
        cell.disabled = true;
        turnO = true;
        updateTurn();
        updateTurnDot();
    }
    let winner = checkWinner();
    
    if (!winner) {
        checkDraw(); 
    }
    })  
});

function checkWinner() {
    for(let index = 0; index<winPatterns.length; index++) {

        let pattern = winPatterns[index];

        let position1 = cells [pattern [0]]. innerText;
        let position2 = cells [pattern [1]]. innerText;
        let position3 = cells [pattern [2]]. innerText;

        if(position1 !== "" && position1 === position2 && position2 === position3) {
            drawWinningLine(index);
            
            status.innerText = position1 + " Wins!";

            if (position1 == "X") {
                    scoreX++;
                }
                else {
                    scoreO++;
                }

                scoreXText.innerText = scoreX;
                scoreOText.innerText = scoreO;

            cells.forEach((cell) => {
                cell.disabled = true; 
            });
            return true;
        }
    }
    return false; 
}

        
const winLineCoordinates = [
    //Top Row 
    {x1:20, y1:50, x2:280, y2:50},
    //Middle Row
    {x1:20 , y1:150 , x2:280 , y2:150 },
    //Bottom Row
    {x1:20, y1:250 , x2:280, y2: 250},
    //Left Column
    {x1:50 , y1:20 , x2:50 , y2:280 },
    //Middle Column
    {x1:150 , y1:20 , x2:150 , y2:280 },
    //Right Column 
    {x1:250 , y1:20 , x2:250 , y2:280 },
    //First Diagonal
    {x1:20 , y1:20 , x2:280 , y2:280 },
    //Second Diagonal
    {x1:280 , y1:20 , x2:20 , y2:280 }
];

function drawWinningLine(index){

    const line = document.getElementById("winLinePath");

    const coordinate = winLineCoordinates[index];

    line.classList.add("draw");

    console.log(coordinate);

    line.setAttribute("x1", coordinate.x1);
    line.setAttribute("y1", coordinate.y1);
    line.setAttribute("x2", coordinate.x2);
    line.setAttribute("y2", coordinate.y2);
    
}

function checkDraw(){
        let filledCells = 0;
        cells.forEach((cell) => {
                if (cell.innerText !== ""){
                    filledCells++;
                }
    });
    if(filledCells == 9){
            status.innerText = "Draw!";
        }
}

resetBtn.addEventListener("click", () => {
    cells.forEach((cell) => {
        cell.disabled = false;
        cell.innerText = "";
    });
    turnO = true;
    status.innerText = "O's Turn";
    line.setAttribute("x1", 0);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", 0);
    line.setAttribute("y2", 0);
});

function updateTurn(){
        if (turnO == true){
            status.innerText = "O's Turn";
        }
        else {
            status.innerText = "X's Turn";
        }
}

function updateTurnDot() {
    if (turnO == true){
        turnDot.innerText = "O to move";
    }
    else {
        turnDot.innerText = "X to move";
    }
}