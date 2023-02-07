//How to retrieve the final score from the script.js
//https://stackoverflow.com/questions/2932782/global-variables-in-javascript-across-multiple-files?noredirect=1&lq=1
//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

let finalScore = localStorage.getItem("score");

document.getElementById("final-score").innerText = `Your final score is: ${finalScore}`;


function myFunction() {
    location.replace("index.html")
  }