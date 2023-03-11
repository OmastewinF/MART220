//Variblers for my apples
var circleY= 300;
var circleD = 70;

//varibles for my banna
var rectStart= 200;

// varibles for the stems 

var stemX= 250; 
var stemY= 10
var stemD= 30

// Varibles for person
var circlePx=15;
var circlePy=15;
var purpleColor= 0;

// circles falling
var circleFallingY= 100;
var circleFallingMovement = 8;

// color for character
var characterColor = 0;

function setup() {
  createCanvas(800, 400);
  
 
}

function draw() {
  background('magenta');
   
//text for my name and title
textSize(20);
text('Omastewin Foster',600,390);
  
    fill('black');
  textSize(30);
  text('So the Apples Fall',50,50);
 
  
  
  
  // Stem to apple 1
  fill('black')
rect(300,stemX,stemY,stemD);
  // apple 1
  fill('red');
  circle(310,circleY,circleD);
  // stem to apple 2
fill('black');
  rect (395,stemX, stemY, stemD);
  // apple 2
  fill ('red');
  circle(400,circleY,circleD);
  
  // stem to the banna 
fill('black')
rect(210,180,stemY,stemD);
  // banna 
  fill('yellow');
  rect(rectStart,250,50,70);
  fill('yellow');
  rect(rectStart,200,40,60)
  fill('yellow');
  rect(rectStart,300,65,50);
  
  
 
  
  
  fill ( 'red')
  
  createcircle(0,circleFallingY,20);
  
  createcircle(100,circleFallingY, 20);
  
  createcircle(200,circleFallingY,20);
  
  createcircle(300,circleFallingY,20);
  
  createcircle(400,circleFallingY,20);
  
  createcircle(500,circleFallingY,20);
  
  createcircle(600,circleFallingY,20);
  
  createcircle(700,circleFallingY,20);
  
  createcircle(800, circleFallingY,20);
  
  
  
createCharacter();
circleKeys();
movecircles();
  
}

function createCharacter(){
  fill(characterColor,100,60);
  circle(circlePx, circlePy,15);
  

}

function circleKeys(){
  
  characterColor++
  if(characterColor > 255)
  {
  
    characterColor= 0 
  }
  
  if(keyIsPressed)
  {
    if(key=='a'&& circlePx > 0 ){
     circlePx-=5;
    }
    else if(key=='d'&& circlePx< width){
      circlePx+=5;
    }
    else if (key=='w'&& circlePy>0){
      circlePy-=5;
    }
    else if (key=='s'&& circlePy< height){
      circlePy+=5;
    }
    
  }
}


function createcircle(x,y,w)
{
  circle(x,y,w)
}

function movecircles(){
    
  circleFallingY+=circleFallingMovement;
  if(circleFallingY > height)
    {
      circleFallingY=0
    }
}