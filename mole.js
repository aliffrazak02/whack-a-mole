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
}