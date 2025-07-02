let currMoleTile;


window.onload = function() {
    setGame();
};

function setGame() {
    // Create the game board
    for (let i = 0; i < 9; i++) { // Create 9 holes
        let title = document.createElement("div");
        title.id = i.toString();
        document.getElementById("board").appendChild(title);
    }

    setInterval(setMole, 2000); // Set a mole every second
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9); // Random number between 0 and 8
    while (num === currMoleTile) { // Ensure the mole doesn't appear in the same tile
        num = Math.floor(Math.random() * 9);
    }
    currMoleTile = num;
    return num.toString();
}

function setMole() {
    let mole = document.createElement("img");
    mole.src = "assets/monty-mole.png"; 

    let num = getRandomTile();
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}