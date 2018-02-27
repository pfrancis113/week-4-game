// GLOBAL VARIABLES
// ---------------------------------------------

// Crystal variables
var crystal = {
    topaz:
    {
        name: "Topaz",
        value: 0
    },
    emerald:
    {
        name: "Emerald",
        value: 0
    },
    diamond:
    {
        name: "Diamond",
        value: 0
    },
    citrine:
    {
        name: "Citrine",
        value: 0
    }
};

// Scores (Current and Target
var currentScore    = 0;
var targetScore     = 0;

// Wins and Losses
var winCount        = 0;
var lossCount       = 0;

// FUNCTIONS
// ---------------------------------------------

// Helper function for getting random numbers
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

// starts and restarts game
var startGame = function(){

    // reset current score
    currentScore = 0;

    // set new target score
    targetScore = getRandom(19,120);

    // set different values for crystals
    crystal.topaz.value     = getRandom (1,12);
    crystal.emerald.value   = getRandom (1,12);
    crystal.diamond.value   = getRandom (1,12);
    crystal.citrine.value   = getRandom (1,12);

    // change HTML to reflect these changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
    // Testing Console
    console.log("--------------");
    console.log("Target Score: " + targetScore);
    console.log("Topaz: " + crystal.topaz.value + " | Emerald: " + crystal.emerald.value + " | Diamond: " + crystal.diamond.value + " | Citrine: " + crystal.citrine.value);
    console.log("---------------"); 
}
// Respond to clicks on the crystals
var addValues = function(crystal){

    // Change current score
    currentScore = currentScore + crystal.value;

    // change HTML to reflect changes in current score
    $("#yourScore").html(currentScore);

    // Call the checkWin function
    checkWin();

    // Testing Console
    console.log("Your Score: " + currentScore);

}

// Check if user won or lost and reset the game
var checkWin = function() {

    // check if currentScore is larger than targetScore
    if (currentScore > targetScore) {
        alert("Sorry, You Lost.");
        console.log("You Lost");

        // Add to Loss Counter
        lossCount++;

        // Chang lossCount HTML
        $("#lossCount").html(lossCount);

        // Restart the game
        startGame();
    }

    else if (currentScore == targetScore) {
        alert("Congratulations! You WON!!!");
        console.log("You Won");

        // Add to Win Counter
        winCount++;

        // Change winCount HTML
        $("#winCount").html(winCount);

        // Restart the game
        startGame();
    }
}


// MAIN PROCESSES
// ---------------------------------------------

$("#topaz").click(function(){
    addValues(crystal.topaz);
});

$("#emerald").click(function(){
    addValues(crystal.emerald);
});

$("#diamond").click(function(){
    addValues(crystal.diamond);
});

$("#citrine").click(function(){
    addValues(crystal.citrine);
});

// starts the game the first time
startGame();