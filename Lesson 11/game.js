// JavaScript Document
// x and y for my character
var characterX = 30; 
var characterY = 25; 
var characterDiameter = 20;

// define the key codes for wasd
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a Enemies
var enemyXOne = 100;
var enemyYOne = 300;
var enemyXTwo = 200;
var enemyYTwo = 400;
var movementOne = 5;
var movementTwo = 13;

// create a shape when the mouse is clicked
var mouseX = 20;
var mouseY = 20;
var mouseShapeX;
var mouseShapeY;

function setup()  
{ 
  createCanvas(400, 600); 
} 

function draw() 
{ 
  background(0); 
  stroke(0);
  fill(204,255,255); 
  
// top border
  rect(0,0,width,10);
// left border
  rect(0,0,10,height);
// bottom border
  rect(0,height-10,width,10);
// upper right border
  rect(width-10,0,10,height-50);
  
// obsticles
  fill(255,255,51)
  rect(50,10,10, 500);
  rect(100,300,200,10);
  rect(100, 90, 10, 500);
  rect(200, 10, 10, 250);
  rect(300, 50, 10, 400);
  rect(200, 500, 190, 10)
  
// exit message
  fill(255,102,255);
  textSize(16);
  text("EXIT", width -50, height-50);
  
// character(200,350);
  fill(255, 255, 255);
  circle(characterX, characterY, characterDiameter);

//handle keys Y
  if(characterY >= 585)
    {
      characterY = 585;
    }
  if(characterY <= 15)
    {
      characterY = 15;
    }
  if(keyIsDown(w))
  {
    characterY -= 10;
  }
  if(keyIsDown(s))
  {
    characterY += 10;
  }
  
// handling Keys X
  if(characterX >= 385)
    {
      characterX = 385;      
    }
  if(characterX <= 15)
    {
      characterX = 15;
    }
  if(keyIsDown(a))
    {
      characterX -= 10;
    }
  if(keyIsDown(d))
    {
      characterX += 10;
    }
// change character diameter
  if(characterDiameter <= 20)
        {
            characterDiameter+=10;
        }
        else
        {
            characterDiameter = 20;
        }
// check to see if the character has left the exit
  if(characterX > width-10 && characterY > width-10)
    {
  fill(255,51,255);
  stroke(5);
  textSize(75);
  text("You Win!!!", 40, 300);
    }
  
// enemy one
    {
  fill(255, 51, 51);
  circle(enemyXOne, enemyYOne, 100);
    if (enemyXOne >= 390 || enemyXOne <= 10) 
    {
    movementOne *= -1;
    }
  enemyXOne += movementOne;
    if (enemyYOne >= 10 || enemyYOne <= 590)
    {
      movementOne *= -1;
    }
  enemyYOne += movementOne;
  }
 
// Enemy two
 {
  fill(51, 255, 51);
  circle(enemyXTwo, enemyYTwo, 50);
    if (enemyXTwo >= 10 || enemyXTwo <= 390) 
    {
    movementOne *= -1;
    }
  enemyXTwo += movementTwo;
    if (enemyYTwo >= 590 || enemyYTwo <= 10)
    {
      movementTwo *= -1;
    }
  enemyYTwo += movementTwo;
  }
  fill(51,51,255);
  circle(mouseShapeX, mouseShapeY, 25);
}
  
//mouse click
function mouseClicked() 
    { 
    mouseShapeX = mouseX;
    mouseShapeY = mouseY; 
}      