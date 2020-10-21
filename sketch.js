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
let q2 = 0;

let page = 0;
//global variable for displaying the options in each question in class Quizquestions
let displayoption1;
let displayoption2;
let displayoption3;
let displayoption4;

// variable to display new questions
let Quiz1question1;
let Quiz2question1;
 
let answersCorrect = 0;
let answersWrong = 0;

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
    button2.mousePressed(quiz2);
  
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
  button2 = createButton("Sport");
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
function nextquestion2(){
  q2+=1;
  quiz2();
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
      Quiz1question1 = new Quizquestions("In which galaxy is the Earth located?" , "Pinwheel" , "Markarian" , "Milky Way", "Andromeda" , "c");
      Quiz1question1.displayQuestions();
      Quiz1question1.displayOptions();
    }

    if(q === 1){
      let Quiz1question2 = new Quizquestions("This shoe company produced the Air Jordan shoes: " , "Puma" , "Reebok" , "Nike", "Adidas" , "c");
      Quiz1question2.displayQuestions();
      Quiz1question2.displayOptions();
    }
    if(q === 2){
      let Quiz1question3 = new Quizquestions("What is Australia's largest city?" , "Newcastle" , "Sydney" , "Canberra", "Perth" , "b");
      Quiz1question3.displayQuestions();
      Quiz1question3.displayOptions(); 
    }

    if(q === 3){
      let Quiz1question3 = new Quizquestions("What is the largest country in South America?" , "Brazil" , "Argentina" , "Peru", "Columbia" , "a");
      Quiz1question3.displayQuestions();
      Quiz1question3.displayOptions();
    }
      
    if(q === 4){
      let Quiz1question3 = new Quizquestions("The musical Mamma Mia! is based on this band: " , "Beatles" , "ABBA" , "The Rolling Stones", "Nirvana" , "b");
      Quiz1question3.displayQuestions();
      Quiz1question3.displayOptions();
    }

    if(q === 5){
      let Quiz1question3 = new Quizquestions("In which sport did Muhammad Ali compete?" , "Basketball" , "Boxing" , "Tennis", "Volleyball" , "b");
      Quiz1question3.displayQuestions();
      Quiz1question3.displayOptions();
    }

    if(q === 6){
      let Quiz1question3 = new Quizquestions("What year did the Semptember 11 (9-11) attacks take place?" , "2001" , "2005" , "1999", "2003" , "a");
      Quiz1question3.displayQuestions();
      Quiz1question3.displayOptions();
    }

    if(q === 7){
      let Quiz1question3 = new Quizquestions("Hepatitis affects which part of the human body?" , "Brain" , "Lungs" , "Liver", "Back" , "c");
      Quiz1question3.displayQuestions();
      Quiz1question3.displayOptions();
    }

    if(q === 8){
      let Quiz1question3 = new Quizquestions("Liberty, Equality, Fraternity is the national motto of: " , "China" , "Germany" , "United States", "France" , "d");
      Quiz1question3.displayQuestions();
      Quiz1question3.displayOptions();
    }

    if(q === 9){
      let Quiz1question3 = new Quizquestions("What type of maple leaf is in the centre of the Canadian flag?" , "A mountain maple leaf" , "A silver maple leaf" , "A sugar maple leaf", "A stylized maple leaf" , "d");
      Quiz1question3.displayQuestions();
      Quiz1question3.displayOptions();
    
    }
    if(q === 10){
      background("lavender");
      fill("black");
      textSize(60);
      text("Answers Correct: ", 500, 100);
      text("Answers Wrong: ", 500, 260);
      text(answersWrong, 800, 260);
      text(answersCorrect, 800, 100);
    }
  }
}


function quiz2(){
  page = 2;
  if(page === 2){
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
    nextbutton.mousePressed(nextquestion2);
    noStroke();

    // creating a new questions from the template in class Quizquestions and giving it attributes
    if(q2 === 0){
      Quiz2question1 = new Quizquestions("What is Usain Bolt's 100m word record time?" , "9.22 seconds" , "9.77 seconds" , "9.58 seconds", "10 seconds" , "c");
      Quiz2question1.displayQuestions();
      Quiz2question1.displayOptions();
    }
    if(q2 === 1){
      Quiz2question1 = new Quizquestions("A penalty in football is taken how many yards away from the goal?" , "12 yards" , "20 yards" , "14 yards", "9 yards" , "a");
      Quiz2question1.displayQuestions();
      Quiz2question1.displayOptions();
    }
    if(q2 === 2){
      Quiz2question1 = new Quizquestions("Who has scored the most Premier League hat-tricks?" , "Sergio Aguero" , "Lionel Messi" , "Harry Kane", "Cristiano Ronaldo" , "a");
      Quiz2question1.displayQuestions();
      Quiz2question1.displayOptions();
    }
    if(q2 === 3){
      Quiz2question1 = new Quizquestions("How many F1 championships has Lewis Hamilton won?" , "Four" , "Ten" , "Seven", "Six" , "d");
      Quiz2question1.displayQuestions();
      Quiz2question1.displayOptions();
    }
    if(q2 === 4){
      Quiz2question1 = new Quizquestions("How many Rings are in the Olympic rings ?" , "6 rings" , "7 rings" , "5 rings", "4 rings" , "c");
      Quiz2question1.displayQuestions();
      Quiz2question1.displayOptions();
    }
    if(q2 === 5){
      Quiz2question1 = new Quizquestions("In bowling, what is the term given for three consecutive strikes?" , "A turkey" , "A strike" , "A spare", "A foul" , "a");
      Quiz2question1.displayQuestions();
      Quiz2question1.displayOptions();
    }
    if(q2 === 6){
      Quiz2question1 = new Quizquestions("Who has won more Grand Slams?" , "Serena Williams" , "Novak Djockovic" , "Roger Federer", "Maria Sharapova" , "a");
      Quiz2question1.displayQuestions();
      Quiz2question1.displayOptions();
    }
    if(q2 === 7){
      Quiz2question1 = new Quizquestions("To start a regular game of curling you need how many players altogether \n (Remember, there are two teams per game)?" , "Eight" , "Four" , "Ten", "Six" , "a");
      Quiz2question1.displayQuestions();
      Quiz2question1.displayOptions();
    }
    if(q2 === 8){
      Quiz2question1 = new Quizquestions("In the NBA, who is known by the nickname of 'The mailman'?" , "Stephen Curry" , "Tony Parker" , "Dirk Nowitzki", "Karl Malone" , "d");
      Quiz2question1.displayQuestions();
      Quiz2question1.displayOptions();
    }
    if(q2 === 9){
      Quiz2question1 = new Quizquestions("A standard game of Table Tennis ends when one player scores \n how many points?" , "Eight points" , "Twelve points" , "Eleven points", "Thirteen points" , "c");
      Quiz2question1.displayQuestions();
      Quiz2question1.displayOptions();
    }
    if(q2 === 10){
      background("lavender");
      fill("black");
      textSize(60);
      text("Answers Correct: ", 500, 100);
      text("Answers Wrong: ", 500, 260);
      text(answersWrong, 800, 260);
      text(answersCorrect, 800, 100);
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
    //this.usersAnswer = "none";
  }


  displayQuestions(){
    textFont("Verdana");
    fill("tan");
    rect(20,20,windowWidth - 20, 280);
    fill("black");
    textSize(40);
    //textAlign(CENTER);
    text(this.question , 800, 150);
    
  }

  displayOptions(){
    //option 1 button
    displayoption1 = createButton(this.option1);
    displayoption1.position(300, 400);
    displayoption1.size(400, 75 );
    displayoption1.style("background-color", "royalblue");
    displayoption1.style("font-size", "25px");
    displayoption1.style("border-radius", "20px");
    displayoption1.style("color", "white");
    displayoption1.mousePressed(this.ans1);
    displayoption1.rightAnswer = this.rightAnswer;
    noStroke();

    //option 2 button
    displayoption2 = createButton(this.option2);
    displayoption2.position(950, 400);
    displayoption2.size(400, 75 );
    displayoption2.style("background-color", "royalblue");
    displayoption2.style("font-size", "25px");
    displayoption2.style("border-radius", "20px");
    displayoption2.style("color", "white");
    displayoption2.mousePressed(this.ans2);
    displayoption2.rightAnswer = this.rightAnswer;
    noStroke();

    //option 3 button
    displayoption3 = createButton(this.option3 );
    displayoption3.position(300, 550);
    displayoption3.size(400, 75 );
    displayoption3.style("background-color", "royalblue");
    displayoption3.style("font-size", "25px");
    displayoption3.style("border-radius", "20px");
    displayoption3.style("color", "white");
    displayoption3.mousePressed(this.ans3);
    displayoption3.rightAnswer = this.rightAnswer;
    noStroke();

    //option 4 button
    displayoption4 = createButton(this.option4);
    displayoption4.position(950, 550);
    displayoption4.size(400, 75 );
    displayoption4.style("background-color", "royalblue");
    displayoption4.style("font-size", "25px");
    displayoption4.style("border-radius", "20px");
    displayoption4.style("color", "white");
    displayoption4.mousePressed(this.ans4);
    displayoption4.rightAnswer = this.rightAnswer;
    noStroke();

  }


  ans1(){
    console.log(this);
    if( "a" === this.rightAnswer){
      displayoption1.style("background-color", "green");
      displayoption2.style("background-color", "red");
      displayoption3.style("background-color", "red");
      displayoption4.style("background-color", "red");
      answersCorrect++;
    }
    else{
      displayoption1.style("background-color", "red");
      answersWrong++;
      if("b" === this.rightAnswer){
        displayoption2.style("background-color", "green");
      }
      else if("c" === this.rightAnswer){
        displayoption3.style("background-color", "green");
      }
      else if("d" === this.rightAnswer){
        displayoption4.style("background-color", "green");
      }
    }
  }
  
  ans2(){
    if("b" === this.rightAnswer){
      displayoption2.style("background-color", "green");
      displayoption1.style("background-color", "red");
      displayoption3.style("background-color", "red");
      displayoption4.style("background-color", "red");
      answersCorrect++;
    }
    else {
      displayoption2.style("background-color", "red");
      answersWrong++;
      if("a" === this.rightAnswer){
        displayoption1.style("background-color", "green");
      }
      else if("c" === this.rightAnswer){
        displayoption3.style("background-color", "green");
      }
      else if("d" === this.rightAnswer){
        displayoption4.style("background-color", "green");
      }
    }
  }

  ans3(){
    console.log(this);
    if( "c" === this.rightAnswer){
      displayoption3.style("background-color", "green");
      displayoption1.style("background-color", "red");
      displayoption2.style("background-color", "red");
      displayoption4.style("background-color", "red");
      answersCorrect++;
   
    }
    else{
      displayoption3.style("background-color", "red");
      answersWrong++;
      if("b" === this.rightAnswer){
        displayoption2.style("background-color", "green");
      }
      else if("a" === this.rightAnswer){
        displayoption1.style("background-color", "green");
      }
      else if("d" === this.rightAnswer){
        displayoption4.style("background-color", "green");
      }
     
    }
  }

  ans4(){
    if( "d" === this.rightAnswer){
      displayoption4.style("background-color", "green");
      displayoption1.style("background-color", "red");
      displayoption2.style("background-color", "red");
      displayoption3.style("background-color", "red");
      answersCorrect++;
    }
    else{
      displayoption4.style("background-color", "red");
      answersWrong++;
      if("b" === this.rightAnswer){
        displayoption2.style("background-color", "green");
      }
      else if("c" === this.rightAnswer){
        displayoption3.style("background-color", "green");
      }
      else if("a" === this.rightAnswer){
        displayoption1.style("background-color", "green");
      }
    
    }
  }

}
