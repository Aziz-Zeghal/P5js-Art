let waveSpeed = 0.05;
let waveAmplitude = 60;

let diff = 5
let brushMode = 1;

function setup() {
  createCanvas(1920, 1080);
  background(0);
  fill(0);
  rectMode(CENTER);
  
  strokeWeight(0.5)
  stroke(255)
  
  let prevx = 0;
  let prevy = 0;
  
  let waveXOffset = 0;
  let waveYOffset = 0;
  for(y = -100 + diff; y < height + 100; y = y + diff)
  {
    for(x = -100 + diff; x < width + 100; x = x + diff)
    {
      //Create first point
      let noiseValue = noise(waveXOffset, waveYOffset);
      let waveX = map(noiseValue, 0, 1, -waveAmplitude, waveAmplitude);
      let waveY = map(noiseValue, 0, 1, -waveAmplitude, waveAmplitude);
      point(x + waveX, y + waveY);
      waveXOffset += waveSpeed;
      
      if (prevx != 0 && prevy != 0)
        line(prevx, prevy, x + waveX, y + waveY)
      prevx = x + waveX
      prevy = y + waveY
    }
    waveXOffset = 0;
    waveYOffset += waveSpeed;
    prevx = 0;
    prevy = 0;
  }
  
  
}

function draw() 
{
}

