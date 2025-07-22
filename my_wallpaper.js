//your parameter variables go here!
let ellipseX  = 100; //100
let ellipseY = 100; //100
var RingSize = 150; // 150
var CentreSize = 30; //40
// var petalColour = color(255, 130, 140) on line 44

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(255, 200, 170); //very light pink colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
drawRings()

drawFlower()

}

function drawRings() {
  noStroke()
  fill(255, 170, 150) //light pink
  ellipse(ellipseX, ellipseY, RingSize, RingSize)
  
  fill(255, 200, 170) // same as background colour
  ellipse(ellipseX, ellipseY, RingSize-25, RingSize-25)
}

function drawFlower() {
  var petalColour = color(255, 130, 140) // brighter Pink
  fill(petalColour) //bottom petal  
  ellipse(100, 140, 40, 90)

  fill(petalColour) //right petal 
  ellipse(140, 100, 90, 40)

  fill(petalColour) //left petal  
  ellipse(60, 100, 90, 40)

  fill(petalColour) //top petal  
  ellipse(100, 60, 40, 90)

  fill(255, 170, 150) //light pink
  ellipse(ellipseX, ellipseY, CentreSize, CentreSize)
}
