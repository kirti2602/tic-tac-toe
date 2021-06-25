let cells = document.querySelectorAll("td");

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", clickHandler);
}

let xTurn = true,
    drawDecider = false;

function clickHandler(event) {
    if (event.target.textContent) {
    } else if (xTurn) {
        event.target.textContent = "X";
    } else {
        event.target.textContent = "O";
    }
    xTurn = !xTurn;

    //logic for winner declaration
    if (
        cells[0].textContent == "X" &&
        cells[1].textContent == "X" &&
        cells[2].textContent == "X"
    ) {
        xWins();
    } else if (
        cells[0].textContent == "O" &&
        cells[1].textContent == "O" &&
        cells[2].textContent == "O"
    ) {
        oWins();
    } else if (
        cells[3].textContent == "X" &&
        cells[4].textContent == "X" &&
        cells[5].textContent == "X"
    ) {
        xWins();
    } else if (
        cells[3].textContent == "O" &&
        cells[4].textContent == "O" &&
        cells[5].textContent == "O"
    ) {
        oWins();
    } else if (
        cells[6].textContent == "X" &&
        cells[7].textContent == "X" &&
        cells[8].textContent == "X"
    ) {
        xWins();
    } else if (
        cells[6].textContent == "O" &&
        cells[7].textContent == "O" &&
        cells[8].textContent == "O"
    ) {
        oWins();
    } else if (
        cells[0].textContent == "X" &&
        cells[3].textContent == "X" &&
        cells[6].textContent == "X"
    ) {
        xWins();
    } else if (
        cells[0].textContent == "O" &&
        cells[3].textContent == "O" &&
        cells[6].textContent == "O"
    ) {
        alert("O wins");
        window.location.reload();
    } else if (
        cells[1].textContent == "X" &&
        cells[4].textContent == "X" &&
        cells[7].textContent == "X"
    ) {
        xWins();
    } else if (
        cells[1].textContent == "O" &&
        cells[4].textContent == "O" &&
        cells[7].textContent == "O"
    ) {
        oWins();
    } else if (
        cells[2].textContent == "X" &&
        cells[5].textContent == "X" &&
        cells[8].textContent == "X"
    ) {
        xWins();
    } else if (
        cells[2].textContent == "O" &&
        cells[5].textContent == "O" &&
        cells[8].textContent == "O"
    ) {
        oWins();
    } else if (
        cells[0].textContent == "X" &&
        cells[4].textContent == "X" &&
        cells[8].textContent == "X"
    ) {
        xWins();
    } else if (
        cells[0].textContent == "O" &&
        cells[4].textContent == "O" &&
        cells[8].textContent == "O"
    ) {
        oWins();
    } else if (
        cells[2].textContent == "X" &&
        cells[4].textContent == "X" &&
        cells[6].textContent == "X"
    ) {
        xWins();
    } else if (
        cells[0].textContent == "O" &&
        cells[4].textContent == "O" &&
        cells[8].textContent == "O"
    ) {
        oWins();
    } else {
        if (
            cells[0].textContent != "" &&
            cells[1].textContent != "" &&
            cells[2].textContent != "" &&
            cells[3].textContent != "" &&
            cells[4].textContent != "" &&
            cells[5].textContent != "" &&
            cells[6].textContent != "" &&
            cells[7].textContent != "" &&
            cells[8].textContent != ""
        ) {
            drawDecider = true;
            announceDraw(drawDecider);
        }
    }
}

//function to handle wins by X
function xWins() {
    document.getElementsByClassName("result")[0].textContent = "Winner: Player 1";
    setTimeout(announceResult, 2500);
}

//Function to handle wins by O
function oWins() {
    document.getElementsByClassName("result")[0].textContent = "Winner: Player 2";
    setTimeout(announceResult, 2500);
}

//function to handle draw
function announceDraw(drawDecider) {
    if (drawDecider) {
        document.getElementsByClassName("result")[0].textContent = "Draw❌";
        setTimeout(announceResult, 2500);
    }
}

//function to reset game
function announceResult() {
    window.location.reload();
}
