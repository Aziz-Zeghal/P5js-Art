//                              --Project--
// This script is an editor. The user will create the art.
// Initially, it starts with a random input in grey.
// Click with the mouse to draw in a square
//Select a mode with: ___
//8: Upper horizontal
//5: Middle horizontal ---
//2: Down horizontal ___
//7: Left diagonal \
//9: Right diagonal /
//p: A bigass point .
//c: Will reset the Background and finish
// (It is based on the Numpad)

//                              --History--
// This script is the classical representation of:
// 10 PRINT CHR$(205.5+RND(1)); : GOTO 10
// It is a one-line Commodore 64 BASIC command (1962 some old shit)

//                              --Colors--
// EX
//background
//stroke

// Beige and Caramel
//[243,233,220]
//[192,133,82]

// Night and Harvest Gold
//[5,5,23]
//[236,164,0]

// Melon and Dark Purple
//[44,14,55]
//[174,132,126]

// Giant Orange and Oxford Blue
//[2, 1, 34]
//[255, 82, 27]

let X = 700;
let Y = 400;
let s = 35;
let plan =  [44, 14, 55];
let lines = [255, 82, 27];
let mode = "u";

// In the setup, input the function that will design each square
function setup() {
  createCanvas(X, Y);
  background(plan);
  strokeWeight(3);

  // Draw the blueprint
  stroke(0);
  for (x = 0; x < width; x = x + s)
    for (y = 0; y < height; y = y + s) diagonals(x, y);

  stroke(lines);
}

function draw() {
  if (mouseIsPressed) {
    let x = 0;
    let y = 0;

    // We correct the coordinates, so that we start at a block
    if (mouseX > s) x = mouseX - (mouseX % s);
    if (mouseY > s) y = mouseY - (mouseY % s);

    place(x, y);
  }
}

function keyPressed() {
  print(key);
  if (
    key == "8" ||
    key == "5" ||
    key == "2" ||
    key == "7" ||
    key == "9" ||
    key == "p"
  )
    mode = key;
  if (key == "c") {
    loadPixels();
    for (let i = 0; i < pixels.length; i += 4) {
      let r = pixels[i];
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      let a = pixels[i + 3];
      
      let threshold = 50; 

      if (r <= threshold && g <= threshold && b <= threshold && r >= 0 && g >= 0 && b >= 0) {
        pixels[i] = plan[0];
        pixels[i + 1] = plan[1];
        pixels[i + 2] = plan[2];
      }
    }

    updatePixels();
  }
}

function place(x, y) {
  switch (mode) {
    case "8":
      line(x, y, x + s, y);
      break;
    case "5":
      line(x, y + s / 2, x + s, y + s / 2);
      break;
    case "2":
      line(x, y + s, x + s, y + s);
      break;
    case "9":
      line(x, y, x + s, y + s);
      break;
    case "7":
      line(x, y + s, x + s, y);
      break;
    default:
      strokeWeight(10);
      point(x, y);
      strokeWeight(3);
  }
}

function diagonals(x, y) {
  aff = random(0, 1);
  if (aff <= 0.5) {
    line(x, y, x + s, y + s);
  } else if (aff >= 0.55) {
    line(x, y, x + s, y);
    line(x, y + s, x + s, y + s);
  }
}
