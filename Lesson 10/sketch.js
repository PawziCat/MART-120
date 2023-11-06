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

function setup()
            {
// the following lines set canvas size
                createCanvas(300,500);
// the following lines allow random movement speed for hair.
                  rHairDirection = floor(random() * 10) + 1;
                  lHairDirection = floor(random() * 10) + 1;
                  rTHairDirection = floor(random() * 10) + 1;
                  lTHairDirection = floor(random() * 10) + 1;
                  shirtDirection = floor(random() * 10) + 1;
                  sizeDirection = floor(random() * 10) + 1;
            }
            function draw()
            {
              
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
              
                    fill(228,255,255);
      circle(shirtX,shirtY,100);
        shirtX += shirtDirection;
        shirtY += shirtDirection;
      if(shirtX >= 140 || shirtX <= 160)
      if(shirtY >= 300 || shirtY <= 350)
      {
        shirtDirection *= -1;
      }
              
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
              
// following lines make portrait title change size
          fill(228,255,255);
    textSize(size);
    size += sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Brianna Thompson",15,480);
      
    }