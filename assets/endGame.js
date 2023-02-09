let finalScore = localStorage.getItem("score");
finalScore = finalScore == null ? "0" : finalScore;
document.getElementById("final-score").innerText = `Your final score is: ${finalScore}`;
 //Convert Null to 
console.log(finalScore)

function myFunction() {
    location.replace("index.html")
    localStorage.clear()
  }