// these variables are for moving the glasses
  var rGlassesX = 200;
  var rGlassesY = 140;
  var rGlassesDirection = 2;

  var lGlassesX = 200;
  var lGlassesY = 140;
  var lGlassesDirection = 2;

  var mGlassesX = 200;
  var mGlassesY = 155;
  var mGlassesDirection = 1;

// these variables are for moving the hair
  var rHairX = 215;
  var rHairY = 200;
  var rHairDirection = 1;

  var lHairX = 75;
  var lHairY = 200;
  var lHairDirection = 1;

  var lTHairX = 80;
  var lTHairY = 150;
  var lTHairDirection = .5;

  var rTHairX = 210;
  var rTHairY = 150;
  var rTHairDirection = .5;

// these variables make the circle on the shirt move
  var shirtX = 150;
  var shirtY = 325;
  var shirtDirection = .5;

// these variables are for make the portrait title change size
  var size = 14;
  var count = 0;
  var sizeDirection = 1;

// these variables are for making the dog one move.
  var rDogEarX = 225;
  var rDogEarY = 400;
  var rDogEarDirection = 2;

  var lDogEarX = 375;
  var lDogEarY = 400;
  var lDogEarDirection = 2;

  var dogNoseX = 300;
  var dogNoseY = 420;
  var dogNoseDirection = .5;

  var dogTailX = 300;
  var dogTailY = 300;
  var dogTailDirection = 1;

// these variables are for making the dog two move.
  var rDog2EarX = 25;
  var rDog2EarY = 400;
  var rDog2EarDirection = 2;

  var lDog2EarX = 165;
  var lDog2EarY = 400;
  var lDog2EarDirection = 2;

  var dog2NoseX = 100;
  var dog2NoseY = 420;
  var dog2NoseDirection = .5;

  var dog2TailX = 100;
  var dog2TailY = 300;
  var dog2TailDirection = 1;

function setup()
            {
// the following lines set canvas size
                createCanvas(400,600);
// the following lines allow random movement speed for hair.
                  rHairDirection = floor(random() * 10) + 1;
                  lHairDirection = floor(random() * 10) + 1;
                  rTHairDirection = floor(random() * 10) + 1;
                  lTHairDirection = floor(random() * 10) + 1;
                  shirtDirection = floor(random() * 10) + 1;
                  sizeDirection = floor(random() * 10) + 1;
                  rDogEarDirection = floor(random() * 10) + 1;
                  lDogEarDirection = floor(random() * 10) + 1;
                  dogNoseDirection = floor(random() * 10) + 1;
                  dogTailDirection = floor(random() * 10) + 1;
                  rDog2EarDirection = floor(random() * 10) + 1;
                  lDog2EarDirection = floor(random() * 10) + 1;
                  dog2NoseDirection = floor(random() * 10) + 1;
                  dog2TailDirection = floor(random() * 10) + 1;              
            }

            function draw()
            {
              
// call createBorders function
    createBorders(10);
              
// sets canvas background color
              background(0,102,102);
 

              
//following lines sketch hair
              		fill(51,0,0);
				circle(150,250,230);
              
                    fill(51,0,0);
                circle(rHairX,rHairY,120);
      rHairX += rHairDirection;
    if(rHairX <= 215 || rHairX >= 220)
    {
        rHairDirection *= -1;
    }
              
                    fill(51,0,0);
				circle(lHairX,lHairY,120);
      lHairX += lHairDirection;
    if(lHairX <= 75 || lHairX >= 80)
    {
        lHairDirection *= -1;
    }        
                    fill(51,0,0);
				circle(150,120,150);
                    fill(51,0,0);
				circle(lTHairX,lTHairY,100);
      lTHairX += lTHairDirection;
    if(lTHairX <= 80 || lTHairX >= 90)
    {
        lTHairDirection *= -1;
    }   
                    fill(51,0,0);
				circle(rTHairX,rTHairY,100);
      rTHairX += rTHairDirection;
    if(rTHairX <= 210 || rTHairX >= 220)
    {
        rTHairDirection *= -1;
    }   
                    fill(51,0,0);
				circle(90,220,80);
                    fill(51,0,0);
				circle(210,220,80);
              
// following lines sketch neck
                    fill(240,194,126);
						rect(130,200,40,75);
              
// following line sketches head
					fill(240,194,126);
						circle(150,150,140);
              
// following line sketches hair:bangs
                    fill(51,0,0);
						circle(80,130,25);
                    fill(51,0,0);
						circle(220,130,25);
                    fill(51,0,0);
						circle(100,110,50);
                    fill(51,0,0);
						circle(200,110,50);
                    fill(51,0,0);
						circle(120,100,50);
                    fill(51,0,0);
						circle(180,100,50);
                    fill(51,0,0);
						circle(150,90,50);
              
// following lines sketch eyes
                    fill(51,0,0);
						circle(125,150,10);
                    fill(51,0,0);
						circle(175,150,10);
              
// following lines sketch nose
                    fill(199,146,65);
		                    triangle(145,180,155,180,150,170);
              
// following lines sketch mouth 
                    fill(205,86,86);             
		              triangle(140,195,160,195,150,210);
              
// following lines sketch arms
                    fill(240,194,126);
					   rect(50,240,50,200);
                    fill(240,194,126);
					   rect(200,240,50,200);
              
// following line sketches sleeves
					fill(0,51,51);
					   rect(50,240,200,75);
              
// folowing line sketches body
					fill(0,204,204);
					   rect(75,240,150,200);
              
// following lines sketch freckles.
                    point(157, 210);
                    point(100, 190);
              
// following lines sketch glasses
                    fill(228,255,255);
                       rect(110,rGlassesY,30,20);
      rGlassesY += rGlassesDirection;
    if(rGlassesY <= 140 || rGlassesY >= 160)
    {
        rGlassesDirection *= -1;
    }
                    fill(228,255,255);
                       rect(160,lGlassesY,30,20);
      lGlassesY += lGlassesDirection;
    if(lGlassesY <= 140 || lGlassesY >= 160)
    {
        lGlassesDirection *= -1;
    }
                  line(140, mGlassesY, 160, mGlassesY);
      mGlassesY += mGlassesDirection;
    if(mGlassesY <= 155 || mGlassesY >= 165)
    {
        mGlassesDirection *= -1;
    }
      
// these lines draw dog one

// tail
              fill(255,255,255);                 
               ellipse(dogTailX,dogTailY,45,100);
      dogTailX += dogTailDirection;
    if(dogTailX <= 305 || dogTailX >= 295)
    {
        dogTailDirection *= -1;
    } 

// body  
                    fill(255,255,255);
				ellipse(300,500,150,300); 
              
// collar   
              fill(225,51,51);
                       rect(255,460,90,30);
              
// head              
              		fill(255,255,255);
				circle(300,400,150); 
              
// left ear              
                 fill(255,255,255);                 
               ellipse(lDogEarX,lDogEarY,45,100);
      lDogEarX += lDogEarDirection;
    if(lDogEarX <= 400|| lDogEarX >= 255)
    {
        lDogEarDirection *= -1;
    } 

// right ear              
                    fill(255,255,255);                 
               ellipse(rDogEarX,rDogEarY,45,100);
      rDogEarX += rDogEarDirection;
    if(rDogEarX <= 400 || rDogEarX >= 375)
    {
        rDogEarDirection *= -1;
    } 

// nose              
                    fill(0,0,0);
				ellipse(dogNoseX,dogNoseY,25,20);
                    dogNoseY += dogNoseDirection;
    if(dogNoseY <= 417 || dogNoseY >= 423)
    {
        dogNoseDirection *= -1;
    }             
              
// eyes  
              fill(0,0,0);
				circle(275,400,15);
              
              fill(0,0,0);
				circle(325,400,15);              
              
// these lines draw dog two

// tail
              fill(255,255,255);                 
               ellipse(dog2TailX,dog2TailY,45,100);
      dog2TailX += dog2TailDirection;
    if(dog2TailX <= 305 || dog2TailX >= 295)
    {
        dog2TailDirection *= -1;
    } 

// body  
                    fill(255,255,255);
				ellipse(100,500,150,300); 
              
// collar   
              fill(225,51,153);
                       rect(55,460,90,30);
              
// head              
              		fill(255,255,255);
				circle(100,400,150); 
              
// left ear              
                 fill(255,255,255);                 
               ellipse(lDog2EarX,lDog2EarY,45,100);
      lDog2EarX += lDog2EarDirection;
    if(lDog2EarX <= 400|| lDog2EarX >= 80)
    {
        lDog2EarDirection *= -1;
    } 

// right ear              
                    fill(255,255,255);                 
               ellipse(rDog2EarX,rDog2EarY,45,100);
      rDog2EarX += rDog2EarDirection;
    if(rDog2EarX <= 400 || rDog2EarX >= 200)
    {
        rDog2EarDirection *= -1;
    } 

// nose              
                    fill(0,0,0);
				ellipse(dog2NoseX,dog2NoseY,25,20);
                    dog2NoseY += dog2NoseDirection;
    if(dog2NoseY <= 417 || dog2NoseY >= 423)
    {
        dog2NoseDirection *= -1;
    }             
              
// eyes  
              fill(0,0,0);
				circle(75,400,15);
              
              fill(0,0,0);
				circle(125,400,15);
              
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
              
    }