//your parameter variables go here!
var ellipseX  = 100; //100
var ellipseY = 100; //100

var petalX = 100; //100
var petalY = 100; //100

var petal1Size = 45; //45
var petal2Size = 160; //160

var RingSize = 150; // 150
var CentreSize = 40; //40

var BorderX = 1; //50
var BorderY = 1; //50

var ColourPetals = 2; //1
var ColourBorder = 2; //1

var ringColour1 = 2; //1
var ringColour2 = 2; //1 

// var petalColour = color(255, 130, 140) on line 44

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  =  0;
}

function wallpaper_background() {
  background(255, 200, 170); //very light pink colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
push();
translate(0, 0);
drawRings()

drawFlower()

drawCentre()
pop();

drawBorder()

}

function drawRings() {
   var ringColour1 = color(255, 170, 150) // brighter Pink

   var ringColour2 = color(255, 200, 170) // same as background colour
  
  if(ringColour1 == 1){
    ringColour1 = color(255, 170, 150); //Original Pink
  }
  else if(ringColour1 == 2) {
    ringColour1 = color(20, 140, 190); //Purple
  }

  noStroke()
  fill(ringColour1) //light pink
  ellipse(ellipseX, ellipseY, RingSize+50, RingSize+50)

  fill(255, 200, 170) // same as background colour
  ellipse(ellipseX, ellipseY, RingSize+25, RingSize+25)

  fill(ringColour1) //light pink
  ellipse(ellipseX, ellipseY, RingSize, RingSize)
  
  fill(255, 200, 170) // same as background colour
  ellipse(ellipseX, ellipseY, RingSize-25, RingSize-25)

  fill(ringColour1) //light pink
  ellipse(ellipseX, ellipseY, RingSize-50, RingSize-50)

  fill(255, 200, 170) // same as background colour
  ellipse(ellipseX, ellipseY, RingSize-75, RingSize-75)
}

function drawFlower() {
  var petalColour = color(255, 130, 140) // brighter Pink
  if(ColourPetals == 1){
    petalColour = color(255, 130, 140); //Original Pink
  }
  else if(ColourPetals == 2) {
    petalColour = color(200, 140, 190); //Purple
  }

  fill(petalColour) //Vertical petal  
  ellipse(petalX, petalY, 50, 160)

  fill(petalColour) //Horizontal petal 
  ellipse(petalX, petalY, 160, 50)

  push();
  fill(petalColour) //Diagonal Petal 1  
  rotate(45);
  ellipse(140, 0, petal1Size, petal2Size)

  rotate(270);
  fill(petalColour) //Diagonal petal 2 
  ellipse(0, 140, petal1Size, petal2Size)
  pop();
}

function drawCentre() {
  fill(255, 170, 150) //light pink
  ellipse(ellipseX, ellipseY, CentreSize, CentreSize)
}

function drawBorderCorner() {
  noStroke();
  var BorderColour = color(157, 235, 138) //light green
  if(ColourBorder == 1){
    BorderColour = color(157, 235, 138); //Original Pink
  }
  else if(ColourBorder == 2) {
    BorderColour = color(200, 120, 190); //Purple
  }
  fill(BorderColour) 
  vertex(0, 0);
  vertex(0, BorderY);
  vertex(15, BorderY);
  vertex(25, 25);
  vertex(50, 25);
  vertex(25, 25);
  vertex(BorderX, 15);
  vertex(BorderX, 0);
  vertex(0, 0)
  endShape();
}

  function drawBorder() {
drawBorderCorner() //TopLeft corner

push();
rotate(90);
translate(0, -200)
drawBorderCorner() //TopRight corner
pop();

push();
rotate(180);
translate(-200, -200)
drawBorderCorner() //BottomRight corner
pop();

push();
rotate(270);
translate(-200, 0)
drawBorderCorner() //BottomLeft corner
pop();
}