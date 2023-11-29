let X = 1920;
let Y = 1080;
let s = 50;

//                              --History--
//This script is the classical representation of:
//10 PRINT CHR$(205.5+RND(1)); : GOTO 10
//It is a one-line Commodore 64 BASIC command (1962 some old shit)

//                              --Colors--
//EX
//background
//stroke

//Beige and Caramel
//[243,233,220]
//[192,133,82]

//Night and Harvest Gold
//[5,5,23]
//[236,164,0]

//Melon and Dark Purple
//[44,14,55]
//[174,132,126]

//Giant Orange and Oxford Blue
//[2, 1, 34]
//[255, 82, 27]

//Night and Tekhelet
//[5,5,23]
//[79, 53,155]

//In the setup, input the function that will design each square
function setup() {
  createCanvas(X, Y);
  background([44,14,55]);
  stroke([255, 82, 27]);
  strokeWeight(3)
  for (x = 0; x < width; x = x + s)
    for (y = 0; y < height; y = y + s)
    {
      //_10print(x,y)
      diagonals(x,y)
      //ef(x,y)
    }
}

function draw() {
}

function _10print(x,y)
{
  aff = random(0,1)
  if (aff <= 0.5){
    line(x, y, x+s, y+s)
  }
  else{
    line(x, y+s, x+s, y)
  }
}

function diagonals(x,y)
{
  aff = random(0,1)
  if (aff <= 0.5){
    line(x, y, x+s, y+s)
  }
  else if (aff >= 0.55){
    line(x, y, x+s, y)
    line(x, y+s, x+s, y+s)
  }
}

function ef(x,y)
{
  aff = random(0,1)
  if (aff <= 0.5){
    if (aff < 0.005)
      line(x, y, x+s, y+s)
    line(x, y, x, y+s)
  }
  else if (aff >= 0.5){
    line(x, y, x+s, y)
    line(x, y+s, x+s, y+s)
  }
}
