var num=Math.round(Math.random() * 10);
var outputText;
if(num == 1) {outputText = "BOOYAH!"}
else if(num == 2) {outputText = "Eliminating Deviants!"}
else if(num == 3) {outputText = "Alyn said what?"}
else if(num == 4) {outputText = "COME AT ME BRO!"}
else {outputText = "Gabriel was here!"}
document.getElementById("tagline").innerHTML = outputText;