var correct=0;
var incorrect=0;
var currentQuestion=0;
var counter=15;
var answerCheck;
var reset;
var gameOver;

var QandArray=[{
question:"What does CSS stand for?",
answers:["Cascading Style Sheets", "Cascading System Sheets", "Computer System Styles", "Colorful Style Sheets"],
correctAnswer: "Cascading Style Sheets"},

// {question:"How is an external style sheet linked to an HTML page?",
// answers:['<link rel="css" href="stylesheet/text>', '<link rel="stylesheet" type="text/css" href="style.css">', 
//          '<style rel="external" href="style.css">', '<style src="css/reference" href="style.css">'],
// correctAnswer: '<link rel="stylesheet" type="text/css" href="style.css">'},

// {question: "Which of these values is the left margin? {margin: 25px 50px 75px 100px;}",
// answers:["25px", "75px", "50px", "100px"],
// correctAnswer: "100px"},

// {question: "The difference between 'visibility:hidden' & 'display: none' is:",
// answers:["There is no difference", "'visibility:hidden' hides an element while 'display:none' displays only an element's default properties",
//          "'visibility:hidden' still occupies space & affects the page's layout, while dispay:none does not", 
//          "'visibility:hidden'positions an element behind the nearest parent element while 'display:none' hides an element"],
// correctAnswer: "'visibility:hidden' still occupies space & affects the page's layout, while dispay:none does not"},


// {question: "This CSS property is used to add rounded corners to an element:",
// answers:["border-rounded", "border-style", "circle-border", "border-radius"],
// correctAnswer: "border-radius"},

// {question: "When using an internal style sheet which HTML tag do you need?",
// answers:["<styles>", "<style>", "<script>", "<link rel='stylesheet' type='text/css' href='style.css'>"],
// correctAnswer: '"<style>"'},

// {question: "The text-decoration property can be used to:",
// answers:["underline text", "italicize text>", "capitalize text", "change the size of the text"],
// correctAnswer: "underline text"},

// {question: "Starting at the center, the layers of the Box Model are:",
// answers:["content > margin > padding > border", "content > padding > margin > border", "content > border > padding > margin", "content > padding > border > margin"],
// correctAnswer: "content > padding > border > margin"},

// {question: "By default, HTML elements take the following position method:",
// answers:["static", "absolute", "fixed", "absolute"],
// correctAnswer: "static"},

// {question: "All of the following are examples of block-level elements except:",
// answers:["<div>", "<img>", "<form>", "<section>"],
// correctAnswer: "<img>"},

// {question: "What is the property used to specify the background color of an element?",
// answers:["background", "color", "color-element", "background-color"],
// correctAnswer: "background-color"},

// {question: "There are two types of gradients in CSS.  What are they?",
// answers:["linear & radial", "linear & non-linear ", "circular & inline", "radial & specific"],
// correctAnswer: "linear & radial"},

// {question: "Div > P is an example of one of the following combinators:",
// answers:["adjacent sibling selector", "child selector", "descendent selector", "general sibling selector"],
// correctAnswer: "child selector"},

// {question: "The list-style-type property specifies:",
// answers:["whether a list is ordered or unordered", "the type of marker that should be used for each list item", "the font color for each list item",
//          "the position of the list item markers"],
// correctAnswer: "the type of marker that should be used for each list item"},

// {question: "The list-style-type property specifies:",
// answers:["whether a list is ordered or unordered", "the type of marker that should be used for each list item", "the font color for each list item",
//          "the position of the list item markers"],
// correctAnswer: "the type of marker that should be used for each list item"},

// {question: "The :last-of-type selector is used to:",
// answers:["select an element that is the last child of its parent", "selects an element that is the last element of its parent", "" ],
// correctAnswer: "the type of marker that should be used for each list item"},

// {question: "Overflow:auto does the following:",
// answers:["adds a scrollbar only when necessary", "clips nothing & renders overflowing content outside the element's box", 
//         "clips overflow & adds a scrollbar","clips overflowing content & makes content outside of the element's box invisible"],
// correctAnswer: "adds a scrollbar only when necessary"},

// {question: "The transition-timing-effect can have all of the following values except:",
// answers:["ease-in", "linear", "rapid", "ease-in-out"],
// correctAnswer: "rapid"},

// {question: "Consider the padding property; when is it appropriate to use negative values?",
// answers:["when the content is hidden", "when the content is too happy for its own good", 
//          "when the margin is set high enough to prevent overlap with surrounding elements", "you can't use negative values"],
// correctAnswer: "you can't use negative values"},


{question: "How do you select an element with the id 'trivia'?",
answers:[".trivia", "#trivia", "trivia", "./trivia"],
correctAnswer: "#trivia"}
];
console.log(QandArray[currentQuestion].question)
console.log(QandArray.question);

 reset=function(){
    
    $("#answerButtons").empty();
    counter=15;
    currentQuestion++
    loadQuestion()
    

}



$("#startButton").on("click", function(){
    $("#startButton").remove()
    loadQuestion();
    console.log(QandArray[currentQuestion].correctAnswer)
})

$(document).on("click", ".answerButtons", function(event){
    // alert("hell yeah!")
    answerCheck(event)
    
})

function gameTimer(){
    counter--
    $("#countDown").html(counter);
    if (counter<=0){
    outOfTime();
    }
}

function loadQuestion(){
    // count=15;
    countDownTimer=setInterval(gameTimer, 1000);
    $("#q-a-wrapper").html("<h1>" + QandArray[currentQuestion].question + "</h1>")
    for(var i=0; i<QandArray[currentQuestion].answers.length; i++){
    var answerButton= $("<button>")
    answerButton.addClass("answerButtons")
    answerButton.attr("data-button",QandArray[currentQuestion].answers[i])
    answerButton.text(QandArray[currentQuestion].answers[i]);
    $("#answerButtons").append(answerButton)}
    console.log(currentQuestion) 
}
   

 answerCheck=function(event){
    clearInterval(countDownTimer);
  if (QandArray[currentQuestion].correctAnswer==$(event.target).attr("data-button")){
      alert("Yee-haw!")
      correct++
      correctAns()
    //   reset()
     
  }

  else{
      alert("NO!")
      incorrect++
      incorrectAns()
    //   reset()
  }
}

correctAns=function(){
    $("#answerButtons").empty();
    $("#q-a-wrapper").html("<h1> You're right! </h1>");
    if(currentQuestion==QandArray.length-1){
        setTimeout(gameOver, 1* 3000);}
    else{
        setTimeout(reset, 3000)
    }
    
}

incorrectAns=function(){
    $("#answerButtons").empty();
    $("#q-a-wrapper").html("<h1> You're right! </h1>");
    if(currentQuestion==QandArray.length-1){
        setTimeout(gameOver, 1* 3000);}
    else{
        setTimeout(reset, 3000)
    }
    
}

function outOfTime(){
    clearInterval(countDownTimer);
    $("#answerButtons").empty();
    $("#q-a-wrapper").html("<h1> Time's Up! </h1>");
    $("#q-a-wrapper").append('<h2> The correct answer was: <br>'+ QandArray[currentQuestion].correctAnswer +'</h2>');
    currentQuestion++
    incorrect++
    
    if(currentQuestion==QandArray.length){
        console.log(QandArray.length)
        setTimeout(gameOver, 1* 3000); 
        
    }
    else{
    counter=15;      
    setTimeout(function(){
        loadQuestion()}, 3000);
    
}
}
gameOver=function(){
    // alert ("gameover!")
    $("#q-a-wrapper").html("<h1> Answered correctly:" + correct + "</h1>")
    $("#q-a-wrapper").append("<h1> Answered incorrectly:" + incorrect + "</h1>")
}
// to do:

// incorrect & correct function
// time's up function

// reset time




  






