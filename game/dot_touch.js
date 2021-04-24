var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState= "L1";
var rectx = 300;
var recty = 300;
var rectSize = 40;


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(220);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
   if (gameState=="L4"){
   levelFour(); 
  }
  
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  background ('#dfcd20');
  text("Town Square", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  var distToRect= dist(rectx, recty, mouseX, mouseY);
  if (distToRect <rectSize/2){
    rectx = random(width);
    recty= random(height);
    score= score -1;
  }
  
  if(score>5){
 gameState= "L2";
  }
  
  rect (rectx, recty, rectSize, rectSize);
  ellipse(ballx, bally, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} // end level one

function levelTwo(){
  background('#36c980');
  text("Jungle", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
     var distToRect= dist(rectx, recty, mouseX, mouseY);
  if (distToRect <rectSize/2){
    rectx = random(width);
    recty= random(height);
    score= score -2;
  }
  
  if(score>10){
   gameState = "L3";
  }
  
  rect (rectx, recty, rectSize, rectSize);
//  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end level two

function levelThree(){
    background(200, 100, 2000);
  text("Worm-hole", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally = random(height);
    ballSize = ballSize -1;
    score= score +1;
  }
   var distToRect= dist(rectx, recty, mouseX, mouseY);
  if (distToRect <rectSize/2){
    rectx = random(width);
    recty = random(height);
    score = score -3;
  }
    if(score>15){
gameState = "L4";
  }

  rect (rectx, recty, rectSize, rectSize);
    ellipse(ballx, bally, ballSize, ballSize);
  } // end level three

function levelFour(){
    background('#eb1441');
  text("Hell", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally = random(height);
    ballSize = ballSize -1;
    score= score +1;
  }
   var distToRect= dist(rectx, recty, mouseX, mouseY);
  if (distToRect <rectSize/2){
    rectx = random(width);
    recty = random(height);
    score = score -4;
  }
   if(score>25){
gameState = "L5";
  }

  rect (rectx, recty, rectSize, rectSize);
//  line(ballx, bally, mouseX, mouseY);
  ellipse (ballx, bally, ballSize, ballSize);
}// end level four
