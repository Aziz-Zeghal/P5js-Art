let waveSpeed = 0.05;
let waveAmplitude = 50;

let diff = 10
let brushMode = 1;

//                              --COLORS--
//Sunset and Blue
//[7,7,25]
//[244,227,178]

function setup() {
  createCanvas(1920, 1080);
  background([7,7,25]);
  fill(0);
  rectMode(CENTER);
  stroke([244,227,178])
  Perlin()
}

function draw() 
{

}

function Perlin()
{
  strokeWeight(2)
  let waveXOffset = 0;
  let waveYOffset = 0;
  for(y = -100 + diff; y < height + 100; y = y + diff)
  {
    for(x = -100 + diff; x < width + 100; x = x + diff)
    {
      let noiseValue = noise(waveXOffset, waveYOffset);
      let waveX = map(noiseValue, 0, 1, -waveAmplitude, waveAmplitude);
      let waveY = map(noiseValue, 0, 1, -waveAmplitude, waveAmplitude);
      point(x + waveX, y + waveY);
      
      waveXOffset += waveSpeed;
    }
      waveXOffset = 0;
      waveYOffset += waveSpeed;
  }
  
  
}
