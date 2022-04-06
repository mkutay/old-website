let iter = 0;
function setup() {
  createCanvas(500, 500);
  background(255);
  strokeWeight(3);
  smooth();
}

function draw() {
  if (iter > 0) return;
  let radius = 50;
  let radiusNoise = random(10);
  let x, y;
  let lastx = -999, lasty = -999;
  for (let ang = 0; ang <= 1440; ang += 5) {
    radiusNoise += 0.05
    let thisRadius = radius + (noise(radiusNoise) * 200) - 100;
    let rad = radians(ang);
    x = 250 + (thisRadius * cos(rad));
    y = 150 + (thisRadius * sin(rad));
    if (lastx > -999) {
      line(x, y, lastx, lasty);
    }
    lastx = x;
    lasty = y;
  }
  iter++;
}
