console.log("ryuryu");

var english = ["apple", "orange", "pen"];
var englishNum = 0;

document.getElementById("form").onsubmit = function()
{
	document.getElementById("english").textContent
		= english[++englishNum];
	var answer = getElementById("form").answer_input.value;
	console.log(answer);
	return false;
}

