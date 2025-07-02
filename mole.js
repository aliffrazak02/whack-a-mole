let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
};

function setGame() {
    // Create the game board
    for (let i = 0; i < 9; i++) { // Create 9 holes
        let title = document.createElement("div");
        title.id = i.toString();
        title.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(title);
    }

    setInterval(setMole, 1000); // Set a mole every second
    setInterval(setPlant, 2000); // Set a mole every second
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9); // Random number between 0 and 8
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return; // Do nothing if the game is over
    }

    if (currMoleTile){
        currMoleTile.innerHTML = ""; // Clear the previous mole
    }

    let mole = document.createElement("img");
    mole.src = "assets/monty-mole.png"; 

    let num = getRandomTile();

     if (currPlantTile && currPlantTile.id === num) {
        return; // Prevent mole from appearing in the same tile as the plant
    }

    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);

}
function setPlant() {
    if (gameOver) {
        return; // Do nothing if the game is over
    }

    if (currPlantTile){
        currPlantTile.innerHTML = ""; // Clear the previous plant
    }

    let plant = document.createElement("img");
    plant.src = "assets/piranha-plant.png"; 

    let num = getRandomTile();

    if (currMoleTile && currMoleTile.id === num) {
        return; // Prevent mole from appearing in the same tile as the plant
    }

    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return; // Do nothing if the game is over
    }
    if (this == currMoleTile) {
        score += 10; // Increase score by 10
        document.getElementById("score").innerHTML = score.toString(); // Update score display
    } else if (this == currPlantTile) {
        document.getElementById("score").innerHTML = "Game Over: " + score.toString(); // Update score display
        gameOver = true; // Set game over flag
    }


}