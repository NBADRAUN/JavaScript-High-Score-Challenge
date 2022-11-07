//// Global Variables /////
var AB1 = document.getElementById('op1');
var AB2 = document.getElementById('op2');
var AB3 = document.getElementById('op3');
var AB4 = document.getElementById('op4');
var Begin = document.getElementById('Begin'); 
var result = document.getElementsByClassName("Results-Text");
var ScoreBoard = document.getElementById('Score'); 

var TimeLeft = document.getElementById('Time'); 
var start = false;
var selected = "";
var id = 0;
var Points = 0;  
var Time = 300;



///////// Questions set /////////
var Questions = [
    {
    id: 0,
    q: "Inside which HTML element do we put the JavaScript?",
    a: [{ text: "<scripting>", isCorrect: false },
        { text: "<script>", isCorrect: true },
        { text: "<js>", isCorrect: false },
        { text: "<javascript>", isCorrect: false }]},
    {
    id: 1,
    q: "How do you write Hello World in an alert box?",
    a: [{ text: "msgBox('Hello World');", isCorrect: false },
        { text: "msg('Hello World');", isCorrect: false },
        { text: "alert('Hello World')", isCorrect: true },
        { text: "alertBox('Hello World')", isCorrect: false }]},
    {
    id: 2,
    q: "How do you create a function in JavaScript?",
    a: [{ text: "function myFunction()", isCorrect: true },
        { text: "function:myFunction()", isCorrect: false },
        { text: "function = myFunction()", isCorrect: false },
        { text: "function()is Function", isCorrect: false }]},
    {
    id: 3,
    q: "Which of the following type of variable takes precedence over other if names are same?",
    a: [{ text: "global variable", isCorrect: false },
        { text: "local variable", isCorrect: true },
        { text: "Both of the above.", isCorrect: false },
        { text: "None of the above.", isCorrect: false }]},
    {
    id: 4,
    q: "Which built-in method returns the calling string value converted to upper case?",
    a: [{ text: "toUpperCase()", isCorrect: true },
        { text: "toUpper()", isCorrect: false },
        { text: "changeCase(case)", isCorrect: false },
        { text: "None of the above.", isCorrect: false }]},
    {
    id: 5,
    q: "Which of the following function of Boolean object returns a string of either 'true' or 'false' depending upon the value of the object?",
    a: [{ text: "toSource()", isCorrect: false },
        { text: "valueOf()", isCorrect: false },
        { text: "toString()", isCorrect: true },
        { text: "None of the above.", isCorrect: false }]},
    {
    id: 6,
    q: "Which of the following function of String object is used to match a regular expression against a string?",
    a: [{ text: "concat()", isCorrect: false },
        { text: "match()", isCorrect: true },
        { text: "search()", isCorrect: false },
        { text: "replace()", isCorrect: false }]},    
    {
    id: 7,
    q: "Which of the following function of String object creates a string to blink as if it were in a <blink> tag?",
    a: [{ text: "anchor()", isCorrect: false },
        { text: "big()", isCorrect: false },
        { text: "blink()", isCorrect: true },
        { text: "italics()", isCorrect: false }]},
    {
    id: 8,
    q: "Which of the following function of Array object sorts the elements of an array?",
    a: [{ text: "toSource()", isCorrect: false },
        { text: "sort()", isCorrect: true },
        { text: "toString()", isCorrect: false },
        { text: "unshift()", isCorrect: false }]},
    {
    id: 9,
    q: "Which of the following function of Array object creates a new array with all of the elements of this array for which the provided filtering function returns true?",
    a: [{ text: "concat()", isCorrect: false },
        { text: "every()", isCorrect: false },
        { text: "filter()", isCorrect: true },
        { text: "some()", isCorrect: false }]},
]


///// listeners and set value for the Answer Button Selected /////
AB1.addEventListener("click", function() {selected = AB1.value;});
AB2.addEventListener("click", function() {selected = AB2.value;});
AB3.addEventListener("click", function() {selected = AB3.value;});
AB4.addEventListener("click", function() {selected = AB4.value;}); 



//// When you click the begin button //////

Begin.addEventListener("click", function(){
    start = true; 
    PlayGame("0"); 
     
}); 


//// game function ////  
function PlayGame(id) {
    TimeLeft.innerText = Time; 

/// Start the Timer //////

var timerId = setInterval(countdown, 1000);
function countdown() {
    if (Time == -1) {
      clearTimeout(timerId);
      GameOver();
    } else {
      TimeLeft.innerHTML = Time;
      Time--;
    }
  }

function GameOver(){
    AB1.innerText = ""; 
    AB2.innerText = ""; 
    AB3.innerText = ""; 
    AB4.innerText = ""; 
    Question.innerText = "Game Over"; 
    start = false; 
}


    //// referencing and setting the results text to blank /////
var result = document.getElementsByClassName("Results-Text");
result[0].innerText = "";

//// referencing and setting question text section ///////
var question = document.getElementById("Question");
question.innerText = Questions[id].q;

//// updating answer button text /////
AB1.innerText = Questions[id].a[0].text;
AB2.innerText = Questions[id].a[1].text;
AB3.innerText = Questions[id].a[2].text;
AB4.innerText = Questions[id].a[3].text;

//// updating what button has the right answer //// 
AB1.value = Questions[id].a[0].isCorrect;
AB2.value = Questions[id].a[1].isCorrect;
AB3.value = Questions[id].a[2].isCorrect;
AB4.value = Questions[id].a[3].isCorrect;


//// referencing the Submit button ///// 
var Submit = document.getElementsByClassName("Submit");

// Updating the Results section based on the question submitted///
Submit[0].addEventListener("click", function() {
    if (selected == "true") {
        result[0].innerHTML = "Correct! (+10 Points!)";
        result[0].style.color = "green";
        Correct(); 
        ScoreBoard.innerText = Points;
        TimeLeft.innerText = Time; 

        

    } else {
        result[0].innerHTML = "Not Correct (-10 Points!)";
        result[0].style.color = "red";
        NotCorrect(); 
        ScoreBoard.innerText = Points; 
        TimeLeft.innerText = Time; 
        
    }
})
}

function Correct(){
    if (id < 1) {
        Points = 10; 
        Time = Time +10; 
    } else {
        Points = Points + (10 / (id+1)); 
        Time = Time + (10 / (id+1)); 
        
    }
}; 

function NotCorrect(){
    if (id < 1) {
        Points = -10; 
        Time = Time -10; 
    } else {
        Points = Points + (-10 / (id+1));  
        Time = Time + (-10 / (id+1));  
    }
}; 




///// getting reference and loop for next question button /////
var Next = document.getElementsByClassName('Next')[0];


//// sets up the next question button to go to the next question when clicked///
Next.addEventListener("click", function()  {
// start = false;
if (id <9) {
    id++;  
    PlayGame(id);
} else {
    start = false; 
    Question.innerText = "Game Over"; 
    AB1.innerText = ""; 
    AB2.innerText = ""; 
    AB3.innerText = ""; 
    AB4.innerText = ""; 
    result[0].innerText = "";
}})
