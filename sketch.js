// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let button1;
let button2;
let button3;
let page = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  homePage();
  
}


function homePage(){
  if(page === 0){
    background("royalblue");
    homeButtons();
    fill("white");
    text('Trivia',windowWidth/2 -100,windowHeight/2 - 100);
    textFont('UndergroundNF');
    textSize (300);
    textAlign(CENTER);
    button1.mousePressed(quiz1);
  
  }
}

function homeButtons(){
  // button 1
  button1 = createButton("General Knowledge Quiz");
  button1.position(250, windowHeight - 200);
  button1.size(250, 75 );
  button1.style('background-color', "white");
  button1.style('font-size', '25px');
  button1.style('border-radius', '20px');
  button1.style('color', "purple");
  noStroke();
   

  // button 2
  button2 = createButton(" True/False");
  button2.position(700, windowHeight-200);
  button2.size(250, 75 );
  button2.style('background-color', "white");
  button2.style('font-size', '25px');
  button2.style('border-radius', '20px');
  button2.style("color", "purple");
  noStroke();

  // button 3
  button3 = createButton("Netflix");
  button3.position(1150, windowHeight-200);
  button3.size(250, 75 );
  button3.style("background-color", "white");
  button3.style("font-size", '25px');
  button3.style("border-radius", '20px');
  button3.style("color", "purple");
  noStroke();
  
}

function quiz1(){
  page = 1;
  if(page===1){
    removeElements(); 
    setup();
    background("lavender");
  }
}

class Quiz1questions{
  constructor(question,option1,option2,option3,option4,rightAnswer){
    this.question = question;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.rightAnswer = rightAnswer;
  }
  displayQuestions(){
    fill("yellow");
    rect(0,0,windowWidth, 300);
    fill("black");
    text('this.question',300,100);
    textFont('Verdana');
    textSize (40);
    textAlign(CENTER);
  }
  displayOptions(){
    //option 1 button
    let displayoption1 = createButton("this.option1");
    displayoption1.position(20, 500);
    displayoption1.size(400, 75 );
    displayoption1.style("background-color", "royalblue");
    displayoption1.style("font-size", '25px');
    displayoption1.style("border-radius", '20px');
    displayoption1.style("color", "white");
    noStroke();

    //option 2 button
    let displayoption2 = createButton("this.option2");
    displayoption2.position(20, 500);
    displayoption2.size(400, 75 );
    displayoption2.style("background-color", "royalblue");
    displayoption2.style("font-size", '25px');
    displayoption2.style("border-radius", '20px');
    displayoption2.style("color", "white");
    noStroke();

    //option 3 button
    let displayoption3 = createButton("this.option3");
    displayoption3.position(20, 500);
    displayoption3.size(400, 75 );
    displayoption3.style("background-color", "royalblue");
    displayoption3.style("font-size", '25px');
    displayoption3.style("border-radius", '20px');
    displayoption3.style("color", "white");
    noStroke();

    //option 4 button
    let displayoption4 = createButton("this.option4");
    displayoption4.position(20, 500);
    displayoption4.size(400, 75 );
    displayoption4.style("background-color", "royalblue");
    displayoption4.style("font-size", '25px');
    displayoption4.style("border-radius", '20px');
    displayoption4.style("color", "white");
    noStroke();

  }
  displayAnswer(){
    if(this.rightAnswer === option1){
      

    }

  }
}



