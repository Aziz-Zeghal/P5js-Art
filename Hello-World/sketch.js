function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  translate(0, 120)
  //Eyes
  circle(160,20,30)
  circle(240,20,30)
  
  //Nose
  line(200, 50, 200, 100)
  
  //Mouth container
  line(100, 120, 100, 100)
  line(300, 120, 300, 100)
  
  //Mouth
  translate(0, -120)
  line(100, mouseY, 300, mouseY)
}