let finalScore = localStorage.getItem("score"); // retrieve score of local storage
finalScore = finalScore == null ? "0" : finalScore; // Convert Null to 
document.getElementById("final-score").innerText = `Your final score is: ${finalScore}`;

function myFunction() {
    location.replace("index.html") //direct to main page to restart the game
    localStorage.clear() // reset storage
  }