//your parameter variables go here!
var ellipseX  = 100; //100
var ellipseY = 100; //100

var petalX = 100; //100
var petalY = 100; //100

var petal1Size = 45; //45
var petal2Size = 160; //160

var RingSize = 160; //150
var CentreSize = 80; //40

var BorderX = 45;//50
var BorderY = 45; //50

var ColourPetals = 2; //1
var ColourBorder = 0; //1

var ringColour1 = 1; //1
var ringColour2 = 1; //1 
var WallColour = 2; //0

//  var Wallpapercolor = color( 255, 180, 220) on line 44
// var ColourRing1 = color(255, 130, 140) on line 57
// var ColourRing2 = color(255, 130, 140) on line 68
// var petalColour = color(255, 130, 140) on line 89
// var BorderColour = color(157, 235, 138) on line 130

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  var Wallpapercolor = color(255, 120, 220) // Pink original
  
  if(WallColour == 1){
    Wallpapercolor = color( 140, 160, 230); // Blue
  }
  else if(WallColour == 2) {
    Wallpapercolor = color(235, 140, 250); // Purple 
  }
  background(Wallpapercolor); //very light pink colour: 255, 180, 220 blue: 120, 140, 230
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

function drawRings() {   //Creates rings/circles for the backdrop of the flower
  var ColourRing1 = color(255, 140, 150) // 255, 170, 150
  
  if(ringColour1 == 1){
    ColourRing1 = color(155, 170, 150); //
  }
  else if(ringColour1 == 2) {
    ColourRing1 = color(220, 120, 250); //
  }

var ColourRing2 = color(255, 140, 220) // 255, 200, 170
  if(ringColour2 == 1){
    ColourRing2 = color(155, 200, 170); //255, 200, 170
  }
  else if(ringColour2 == 2) {
    ColourRing2 = color(240, 100, 240); //150, 150, 190
  }

  noStroke()
  fill(ColourRing1)
  ellipse(ellipseX, ellipseY, RingSize+50, RingSize+50)

  fill(ColourRing2) 
  ellipse(ellipseX, ellipseY, RingSize+25, RingSize+25)

  fill(ColourRing1) 
  ellipse(ellipseX, ellipseY, RingSize, RingSize)
  
  fill(ColourRing2) 
  ellipse(ellipseX, ellipseY, RingSize-25, RingSize-25)

  fill(ColourRing1) 
  ellipse(ellipseX, ellipseY, RingSize-50, RingSize-50)

  fill(ColourRing2) 
  ellipse(ellipseX, ellipseY, RingSize-75, RingSize-75)
}

function drawFlower() {  //Creates the flower petals
  var petalColour = color(250, 110, 210) // purple
  if(ColourPetals == 1){
    petalColour = color(220, 100, 240); 
  }
  else if(ColourPetals == 2) {
    petalColour = color(250, 120, 180); 
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

function drawCentre() { //Creates the flower pitsil
  fill(255, 170, 150) //original light pink: 255, 170, 150
  ellipse(ellipseX, ellipseY, CentreSize, CentreSize)
}

function drawBorderCorner() { //Creates the border pattern in the corners around the flower
  noStroke();
  var BorderColour = color(157, 215, 158) //light green
  if(ColourBorder == 1){
    BorderColour = color(255, 135, 200); //Original Pink
  }
  else if(ColourBorder == 2) {
    BorderColour = color(155, 190, 240); //Purple
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