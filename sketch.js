// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let button1;
let button2;
let button3;
let quiz1;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  homePage();
  
}


function homePage(){
  background("royalblue");
  homeButtons();
  //fill("lightblue");
  //rect(0, 0, windowWidth, 75 );
  fill("white");
  text('Trivia' ,windowWidth/2 -100,windowHeight/2 - 100);
  textFont('UndergroundNF');
  textSize (300);
  textAlign(CENTER);
}

function homeButtons(){
  // button 1
  button1 = createButton("IQ/Knowledge Quiz");
  button1.position(10, 200);
  button1.size(200, 75 );
  button1.style('background-color', "white");
  button1.style('font-size', '25px');
  button1.style('border-radius', '20px');
  button1.style('color', "purple");
  noStroke();

  // button 2
  button2 = createButton(" True/False");
  button2.position(10, 300);
  button2.size(200, 75 );
  button2.style('background-color', "white");
  button2.style('font-size', '25px');
  button2.style('border-radius', '20px');
  button2.style("color", "purple");
  noStroke();

  // button 3
  button3 = createButton("Netflix");
  button3.position(10, 400);
  button3.size(200, 75 );
  button3.style("background-color", "white");
  button3.style("font-size", '25px');
  button3.style("border-radius", '20px');
  button3.style("color", "purple");
  noStroke();

}

//function quiz1(){

//}


