let iter = 0;
function setup() {
  createCanvas(1000, 1000);
  background(255);
  strokeWeight(0.1);
  smooth();
}

function draw() {
  if (iter > 0) return;
  let x, y;
  for (let i = 0; i < 100; i++) {
    let lastx = -999, lasty = -999;
    let radiusNoise = random(10);
    let radius = 10;
    stroke(random(255), random(255), random(255));
    let startang = round(random(360));
    let endang = 1440 + round(random(1440));
    let anglestep = 5 + round(random(3));
    for (let ang = startang; ang <= endang; ang += anglestep) {
      radiusNoise += 0.5;
      radius += 0.5;
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
  }
  iter++;
}
