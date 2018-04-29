console.log("ryuryu");

var english = ["apple", "orange", "pen"];
var japanese = ["りんご", "オレンジ", "ペン"];
var problemNum = 0;

document.getElementById("question").textContent = japanese[problemNum];

document.getElementById("form").onsubmit = function()
{
    var answer = document.getElementById("form").answer_input.value;
	console.log(answer);
	if (answer === english[problemNum])
	{
	    console.log("正解");
	    document.getElementById("question").textContent = japanese[++problemNum];
	    document.getElementById("form").answer_input.value = "";
	}
	return false;
};

var checkAnswer() = function()
{
    var answer = document.getElementById("form").answer_input.value;
	console.log(answer);
	if (answer === english[problemNum])
	{
	    console.log("正解");
	    document.getElementById("question").textContent = japanese[++problemNum];
	    document.getElementById("form").answer_input.value = "";
	}
};

var checkAnswer(var keyCode) = function()
{
    if (keyCode === 13)
    {
        checkAnswer();
    }
};

