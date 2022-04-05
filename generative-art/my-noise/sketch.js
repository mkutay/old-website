let iteration = 0;
function setup() {
  createCanvas(1000, 100);
  background(255);
  strokeWeight(5);
  smooth();
}
function draw() {
  if (iteration > 0) return;
  stroke(0, 30);
  line(20, 50, 980, 50);
  stroke(20, 50, 70);
  let xstep = 1;
  let lastx = -999;
  let lasty = -999;
  let angle = 0;
  let y = 50;
  for (let x = 20; x <= 980; x += xstep) {
    let rad = radians(angle);
    // y = 50 + ((sin(rad), 3) * 40 * noise(rad * 2));
    y = 20 + (60 * customRand(rad));
    if (lastx > -999) {
      line(x, y, lastx, lasty);
    }
    lastx = x;
    lasty = y;
    angle++;
  }
  iteration++;
}

function customRand(rad) {
  return 1 - pow(random(1), 5)
}
