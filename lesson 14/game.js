// x and y for my character
var characterX = 30;
var characterY = 25;
var characterDiameter = 20;

// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a enemy
var shapeX = 100;
var shapeY = 300;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

let palette = ["#54478c","#2c699a","#048ba8","#0db39e","#16db93","#83e377","#b9e769","#efea5a","#f1c453","#f29e4c"]

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup() 
{
    createCanvas(400, 600);
    // get a random speed when the it first starts
    for (var i = 0; i < 10; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(390);
        shapeYs[i] = getRandomNumber(590);
        diameters[i] = getRandomNumber(50);
    }

    createCharacter(30, 30);
}

function draw() 
{
    background(0);
    stroke(0);
    fill(204,255,255);
  
    // createObsticles
    createObsticles();

    // call createBorders function
    createBorders(10);


    // exit message
    fill(255,102,255)
    textSize(16);
    text("EXIT", width - 50, height - 50)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();
    changeDiameter();


    // enemy one
let c1 = random(palette);
  
    fill(c1);
    // draw the shape
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      
      

    // move the shape
    shapeXs[i] += shapeXSpeeds[i];
    shapeYs[i] += shapeYSpeeds[i];
      
    // check to see if the shape has gone out of bounds
        if (shapeXs[i] > 390) {
            shapeXs[i] = 10;
        }
        if (shapeXs[i] < 10) {
            shapeXs[i] = 390;
        }
        if (shapeYs[i] > 590) {
            shapeYs[i] = 10;
        }
        if (shapeYs[i] < 10) {
            shapeYs[i] = 590;
        }
    }
 
// check to see if the character has left the exit
{
  if(characterX > width && characterY > width-50)
    {
  fill(255,51,255);
  stroke(5);
  textSize(75);
  text("You Win!!!", 40, 300);
    }
}

    // create the shape based on the mouse click
    fill(153, 153, 255);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement() {
    // handle the keys
    if (keyIsDown(w)) {
        characterY -= 10;
    }
    if (keyIsDown(s)) {
        characterY += 10;
    }
    if (keyIsDown(a)) {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 10;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function changeDiameter()
// change character diameter
 {
    if(characterDiameter <= 20)
    {
    characterDiameter+=10;
    }
    else
    {
    characterDiameter = 20;
    }
}

function drawCharacter() {
    fill(255, 255, 255);
    circle(characterX, characterY, characterDiameter);
}

function createBorders(thickness) 
{
    fill(204,255,255);
    // top border
    rect(0, 0, width, thickness);
    // left border
    rect(0, 0, thickness, height);
    // bottom border
    rect(0, height - thickness, width, thickness);
    // right upper border
    rect(width - thickness, 0, thickness, height - 50);
}

function createObsticles()
//create obsticles on map
  {
  fill(255,255,51)
  rect(50,10,10, 500);
  rect(100,300,200,10);
  rect(100, 90, 10, 500);
  rect(200, 10, 10, 250);
  rect(300, 50, 10, 400);
  rect(200, 500, 190, 10);
  }

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}