var img;
var img2;
var img3;
var img4; 
var img5;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img2 = loadImage('74.png');  // cat.jpg needs to be next to this .js file

// you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/rainbow2.png');
img2 = loadImage('https://dma-git.github.io/images/74.png');
img3 = loadImage('https://dma-git.github.io/images/rainbow.png');
img4 = loadImage('https://dma-git.github.io/images/grubhubcringe.gif');
}
function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { 
  //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // Sky
    noStroke(); 
    fill ('#b8e2f1');
    circle(mouseX, mouseY, 180, 180);

  } else if (toolChoice == '2') { // Big Cloud
    noStroke(); 
    fill ('#e1e4ed');
    ellipse(mouseX, mouseY, 15*(pmouseX-mouseX), 14*(pmouseY-mouseY));

  } else if (toolChoice == '3') { // Small Cloud
    noStroke(); 
    fill (247, 252, 255);
    ellipse(mouseX, mouseY, 12*(pmouseX-mouseX), 8*(pmouseY-mouseY));

  } else if (toolChoice == '4') { // Mountains
    noStroke(); 
    fill (140, 135, 140);
    ellipse (mouseX, mouseY, 17, 57);
    
  } else if (key == '5') { // Mountains alt
    noStroke(); 
    fill (150, 145, 150);
    rect (mouseX, mouseY, 4*(pmouseX-mouseX), 4*(pmouseY-mouseY));
    
  } else if (toolChoice == '6') { // Distant Trees
    noStroke(); 
    fill ('#0aa561');
    ellipse(mouseX, mouseY, 5*(pmouseX-mouseX), 6*(pmouseY-mouseY));
    
  } else if (toolChoice == '7') { // Foreground
    noStroke(); 
    fill ('#8bc738');
    ellipse(mouseX, mouseY, 10*(pmouseX-mouseX), 5*(pmouseY-mouseY));
    
  } else if (toolChoice == '8') { // Wood
    noStroke(); 
    fill ('#ab8560');
    rect (mouseX-10, mouseY-10, 15+(pmouseX-mouseX), 15+(pmouseY-mouseY));
    
  } else if (toolChoice == '9') { // Leaf
   noStroke();
    fill('#20ca66');
    circle(mouseX, mouseY, 5*(pmouseX-mouseX), 5*(pmouseY-mouseY));
    
     } else if (toolChoice == '0') { // Sky 2
     noStroke();
    fill('#6de767');
    circle(mouseX, mouseY, 2.5*(pmouseX-mouseX), 2.5*(pmouseY-mouseY));
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 20, 20);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
