console.log("ryuryu");

var english = ["apple", "orange", "pen"];
var japanese = ["りんご", "オレンジ", "ペン"];
var isCorrect = new Array(english.length);
var problemNum = 0;
var isDisplaySolution = false;

document.getElementById("question").textContent = japanese[problemNum];

document.getElementById("form").onsubmit = function()
{
	if (isDisplaySolution === true)
	{
		isDisplaySolution = false;
		document.getElementById("question").style.color = "black";
		document.getElementById("question").textContent = japanese[++problemNum];
		document.getElementById("form").answer_input.value = "";
	}
	else
	{
		var answer = document.getElementById("form").answer_input.value;
		console.log(answer);
		if (answer === english[problemNum])
		{
			console.log("正解");
			isCorrect[problemNum] = true;
			document.getElementById("question").textContent = "〇 " + english[problemNum];
			document.getElementById("question").style.color = "limegreen";
			isDisplaySolution = true;
		}
		else
		{
			console.log("不正解");
			isCorrect[problemNum] = false;
			document.getElementById("question").textContent = "✖ " + english[problemNum];
			document.getElementById("question").style.color = "red";
			isDisplaySolution = true;
		}
	}
	if (problemNum === english.length)
	{
		displayScore();
	}
	return false;
}

function displayScore()
{
	console.log("finish");
	var scoreBoard = "<h3>テスト結果</h3><ol>";
	var score = 0;
	for (var i = 0; i < english.length; i++)
	{
		scoreBoard += "<li>" + japanese[i] + "  " + english[i];
		if (isCorrect[i] === true)
		{
			scoreBoard += '<span style="color:limegreen"> 〇</span>';
			score++;
		}
		else
		{
			scoreBoard += '<span style="color:red"> ✖</span>';
		}
		scoreBoard += "</li>";
	}
	scoreBoard += "</ol><p>" + score + "/" + english.length + "　点</p>";
	document.getElementById("main").innerHTML = scoreBoard;
}

/*var checkAnswer() = function()
{
    var answer = document.getElementById("form").answer_input.value;
	console.log(answer);
	if (answer === english[problemNum])
	{
	    console.log("正解");
	    document.getElementById("question").textContent = japanese[++problemNum];
	    document.getElementById("form").answer_input.value = "";
	}
}

var checkAnswer(var keyCode) = function()
{
    if (keyCode === 13)
    {
        checkAnswer();
    }
}*/

