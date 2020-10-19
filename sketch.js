// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//buttons on the homePage
let button1;
let button2;
let button3;
let nextbutton;
let q = 0;

let page = 0;
//global variable for displaying the options in each question in class Quizquestions
let displayoption1;
let displayoption2;
let displayoption3;
let displayoption4;

// variable to display new questions
let Quiz1question1;


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
    textFont('countryside');
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
function nextquestion(){
  q+=1;
  quiz1();
}

function quiz1(){
  page = 1;
  if(page === 1){
    removeElements(); 
    setup();
    background("lavender");
    nextbutton = createButton("Next");
    nextbutton.position(950,700);
    nextbutton.size(150, 70);
    nextbutton.style("background-color", "orange");
    nextbutton.style("font-size", '25px');
    nextbutton.style("border-radius", '20px');
    nextbutton.style("color", "white");
    nextbutton.mousePressed(nextquestion);
    noStroke();


    // creating a new questions from the template in class Quizquestions and giving it attributes
    if(q === 0){
      Quiz1question1 = new Quizquestions("In which galaxy is the Earth located?" , "Pinwheel" , "Markarian" , "Milky Way", "Andromeda" , "Pinwheel");
      Quiz1question1.displayQuestions();
      Quiz1question1.displayOptions();
      //Quiz1question1.checkforanswer();
      //Quiz1question1.displayAnswer();
     
    }

    if(q === 1){
      Quiz1question2 = new Quizquestions("This shoe company produced the Air Jordan shoes: " , "Puma" , "Reebok" , "Nike", "Adidas" , "Nike");
      Quiz1question2.displayQuestions();
      Quiz1question2.displayOptions();
      //Quiz1question2.checkforanswer();
      //Quiz1question1.displayAnswer();

   
    }
    if(q === 2){
      Quiz1question3 = new Quizquestions("What is Australia's largest city?" , "Newcastle" , "Sydney" , "Canberra", "Perth" , "Sydney");
      Quiz1question3.displayQuestions();
      Quiz1question3.displayOptions();
      //Quiz1question3.checkforanswer();
      //Quiz1question1.displayAnswer();
    
      
    }
    if(q === 3){
      Quiz1question3 = new Quizquestions("What is the largest country in South America?" , "Brazil" , "Argentina" , "Peru", "Columbia" , "Brazil");
      Quiz1question3.displayQuestions();
      Quiz1question3.displayOptions();
      //Quiz1question3.checkforanswer();
      Quiz1question1.displayAnswer();
    }
    if(q === 4){
      Quiz1question3 = new Quizquestions("The musical Mamma Mia! is based on this band: " , "Beatles" , "ABBA" , "The Rolling Stones", "Nirvana" , "ABBA");
      Quiz1question3.displayQuestions();
      Quiz1question3.displayOptions();
      //Quiz1question3.checkforanswer();
      Quiz1question1.displayAnswer();
    }
    if(q === 5){
      Quiz1question3 = new Quizquestions("In which sport did Muhammad Ali compete?" , "Basketball" , "Boxing" , "Tennis", "Volleyball" , "Boxing");
      Quiz1question3.displayQuestions();
      Quiz1question3.displayOptions();
      //Quiz1question3.checkforanswer();
      Quiz1question1.displayAnswer();
    }
    if(q === 6){
      Quiz1question3 = new Quizquestions("What year did the Semptember 11 (9-11) attacks take place?" , "2001" , "2005" , "1999", "2003" , "2001");
      Quiz1question3.displayQuestions();
      Quiz1question3.displayOptions();
      //Quiz1question3.checkforanswer();
      Quiz1question1.displayAnswer();
    }
    if(q === 7){
      Quiz1question3 = new Quizquestions("Hepatitis affects which part of the human body?" , "Brain" , "Lungs" , "Liver", "Back" , "Liver");
      Quiz1question3.displayQuestions();
      Quiz1question3.displayOptions();
      //Quiz1question3.checkforanswer();
      Quiz1question1.displayAnswer();
    }
    if(q === 8){
      Quiz1question3 = new Quizquestions("Liberty, Equality, Fraternity is the national motto of: " , "China" , "Germany" , "United States", "France" , "France");
      Quiz1question3.displayQuestions();
      Quiz1question3.displayOptions();
      //Quiz1question3.checkforanswer();
      Quiz1question1.displayAnswer();
    }
    if(q === 9){
      Quiz1question3 = new Quizquestions("What type of maple leaf is in the centre of the Canadian flag?" , "A mountain maple leaf" , "A silver maple leaf" , "A sugar maple leaf", "A stylized maple leaf" , "A stylized maple leaf");
      Quiz1question3.displayQuestions();
      Quiz1question3.displayOptions();
      //Quiz1question3.checkforanswer();
      Quiz1question1.displayAnswer();
    }
  }
}

class Quizquestions{
  constructor(question,option1,option2,option3,option4,rightAnswer){
    this.question = question;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.rightAnswer = rightAnswer;
    this.usersAnswer = undefined;
  }
  displayQuestions(){
    fill("tan");
    rect(20,20,windowWidth - 20, 280);
    fill("black");
    textSize (50);
    //textAlign(CENTER);
    text(this.question , 900, 150);
    textFont('Verdana');
    
  }


  displayOptions(){
    //option 1 button
    displayoption1 = createButton(this.option1);
    displayoption1.position(350, 400);
    displayoption1.size(400, 75 );
    displayoption1.style("background-color", "royalblue");
    displayoption1.style("font-size", '25px');
    displayoption1.style("border-radius", '20px');
    displayoption1.style("color", "white");
    if(displayoption1.mousePressed){
      console.log("a");
      displayoption1.style("background-color", "green");
    }
    //this.ans1;
    noStroke();

    //option 2 button
    displayoption2 = createButton(this.option2);
    displayoption2.position(950, 400);
    displayoption2.size(400, 75 );
    displayoption2.style("background-color", "royalblue");
    displayoption2.style("font-size", '25px');
    displayoption2.style("border-radius", '20px');
    displayoption2.style("color", "white");
    //displayoption2.mousePressed(this.ans2);
    this.ans2;
    noStroke();

    //option 3 button
    displayoption3 = createButton(this.option3);
    displayoption3.position(350, 550);
    displayoption3.size(400, 75 );
    displayoption3.style("background-color", "royalblue");
    displayoption3.style("font-size", '25px');
    displayoption3.style("border-radius", '20px');
    displayoption3.style("color", "white");
    //displayoption3.mousePressed(this.ans3);
    this.ans3;
    noStroke();

    //option 4 button
    displayoption4 = createButton(this.option4);
    displayoption4.position(950, 550);
    displayoption4.size(400, 75 );
    displayoption4.style("background-color", "royalblue");
    displayoption4.style("font-size", '25px');
    displayoption4.style("border-radius", '20px');
    displayoption4.style("color", "white");
    //displayoption4.mousePressed(this.ans4); 
    this.ans4;
    noStroke();

  }

  // ans1(){
  //   if(displayoption1.mousePressed()){
  //     if(displayoption1 === this.rightAnswer){
  //       displayoption1.style("background-color", "green");
  //       console.log("a");
  //     }
  //     else{
  //       displayoption1.style("background-color", "red");
  //       console.log("b");
  //     }
  //   }
  // }
  // ans2(){
  //   if(displayoption2.mousePressed()){
  //     if(displayoption2 === this.rightAnswer){
  //       displayoption2.style("background-color", "green");
  //     }
  //     else{
  //       displayoption2.style("background-color", "red");
  //     }
  //   }
  // }
  // ans3(){
  //   if(displayoption3.mousePressed()){
  //     if(displayoption3 === this.rightAnswer){
  //       displayoption3.style("background-color", "green");
  //     }
  //     else{
  //       displayoption3.style("background-color", "red");
  //     }
  //   }
  // }
  // ans4(){
  //   if(displayoption4.mousePressed()){
  //     if(displayoption4 === this.rightAnswer){
  //       displayoption4.style("background-color", "green");
  //     }
  //     else{
  //       displayoption4.style("background-color", "red");
  //     }
  //   }
  // }

  // displayAnswer(){  
  //   // checking if option 1 is correct
  //   if (displayoption1.mousePressed){ 
  //     console.log("a");
  //     if(this.rightAnswer === this.option1){
  //       displayoption1.style("background-color", "green");
  //     }
  //     else{
  //       displayoption1.style("background-color", "red");
  //     }
  
  //   }
  //   // checking if option 2 is correct
  //   else if(displayoption2.mousePressed) {
  //     console.log("b");
  //     if(this.rightAnswer === this.option2){
  //       displayoption2.style("background-color", "green"); 
  //     }
  //     else{
  //       displayoption2.style("background-color", "red");
  //     }
  //   }
  //   // checking if option 3 is correct
  //   else if(displayoption3.mousePressed ){
  //     console.log("c");
  //     if(this.rightAnswer === this.option3){
  //       displayoption3.style("background-color", "green");
  //     }
  //     else{
  //       displayoption3.style("background-color", "red");
  //     }

  //   }
  //   //checking if option 4 is correct
  //   else if(displayoption4.mousePressed){
  //     console.log("d");
  //     if(this.rightAnswer === this.option4){
  //       displayoption4.style("background-color", "green");
  //     }
  //     else{
  //       displayoption4.style("background-color", "red");
  //     }
  //   }
  //}  
}

  
