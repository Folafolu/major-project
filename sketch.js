// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"




function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  homePage();
}


function homePage(){
  background("lightblue");
  fill("blue");
  rect(0, 0, windowWidth, 50 );
  fill("black");
  text('Trivia', windowWidth/2,250);
  textSize (150);
}