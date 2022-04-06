function setup() {
  createCanvas(500, 500);
  background(255);
  strokeWeight(5);
  smooth();
}

function draw() {
  let radius = 10;
  let x, y;
  let lastx = -999, lasty = -999;
  for (let ang = 0; ang <= 1440; ang += 5) {
    radius += 0.5;
    let rad = radians(ang);
    x = 250 + (radius * cos(rad));
    y = 150 + (radius * sin(rad));
    if (lastx > -999) {
      line(x, y, lastx, lasty);
    }
    lastx = x;
    lasty = y;
  }
}
