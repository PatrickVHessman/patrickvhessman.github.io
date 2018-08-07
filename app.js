// JavaScript Document

var keywords = ["cat","brown","bear","lazy","fox","Godzilla","Avengers","gigantic","quick"];

function keywordCompare (arrayObject) {
	for (var i = 0; i <= keywords.length; i++) {
		if (arrayObject === keywords[i]) {
			arrayObject = "<u>" + arrayObject + "</u>";
		}
	}
	return arrayObject;
}

function searchJSON() {
var stringInput =	document.getElementById("stringInput").value;
var splitString = stringInput.split(" ");
var newString = "";
for (var i=0; i < splitString.length; i++) {
	splitString[i] = keywordCompare(splitString[i]);
	newString = newString + splitString[i] + " ";
}

	document.getElementById("resultsHeader").innerHTML = "Your results!";
	document.getElementById("resultsCopy").innerHTML = newString;
}
