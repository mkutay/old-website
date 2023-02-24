let T = 0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(20);
  stroke(255);
  strokeWeight(5);
  translate(width / 2, height / 2)
  for (let i = 0; i < 10; i++) {
    line(x1(T + i), y1(T + i), x2(T + i), y2(T + i));
    // point(x1(T + i), y1(T + i), 1);
    // point(x2(T + i), y2(T + i), 1);
  }
  T += 0.5;
}

function x1(t) {
  return sin(t / 10) * 100;
}

function y1(t) {
  return -sin(-t / 10 + 5) * 50;
}

function x2(t) {
  return sin(t / 10) * 200;
}

function y2(t) {
  return cos(t / 20) * 200;
}
