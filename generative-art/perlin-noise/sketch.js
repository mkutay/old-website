let iteration = 0;
function setup() {
  createCanvas(500, 100);
  background(255);
  strokeWeight(5);
  smooth();
}
function draw() {
  if (iteration > 0) return;
  stroke(0, 30);
  line(20, 50, 480, 50);
  stroke(20, 50, 70);
  let step = 10;
  let lastX = -999;
  let lastY = -999;
  let noiseY = random(10);
  let y;
  for (let x = 20; x <= 480; x += step) {
    y = 10 + noise(noiseY) * 80;
    if (lastX > -999) line(x, y, lastX, lastY);
    lastX = x;
    lastY = y;
    noiseY += 0.1;
  }
  iteration++;
}
