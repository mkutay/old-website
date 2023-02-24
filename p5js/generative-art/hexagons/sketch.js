const crystal_size = 500;
const sides = 6;
let palette = [];

function setup() {
  createCanvas(530, 530, SVG);
  angleMode(DEGREES);
  noLoop();
  rectMode(CENTER);

  palette = [color(255, 52, 154), color(4, 0, 152), 'limegreen']; // pink and blue
}

function draw() {
  //testLines();
  //outlineShape();
  //simpleLines();
  //circles();
  
  let picker = random(1);
  if (picker > 0.3) {
    outlineShape();
  }
  picker = random(1);
  if (picker > 0.3) {
    simpleLines();
  }
  picker = random(1);
  if (picker > 0.3) {
    circles();
  }
}

function circles() {
  noFill();
  const numShapes = sides;
  const angle = 360 / numShapes;
  const shapeSize = (crystal_size / 2) * 0.93;
  const position = (crystal_size / 2) - (shapeSize / 2);
  const strokeColor = getRandomFromPalette();

  stroke(strokeColor);
  strokeWeight(1);
  push();
  translate(width / 2, height / 2);
  for (let i = 0; i <= numShapes; i++) {
    ellipse(position, 0, shapeSize, shapeSize);
    rotate(angle);
  }
  pop();
}

function simpleLines() {
  let stepsOut = 8;
  let numSteps = randomSelectTwo() ? stepsOut : int(stepsOut * 1.25);
  let step = (crystal_size / 2) / numSteps;
  let numShapes = randomSelectTwo() ? sides : sides * 2;
  let start = floor(random(0, numSteps));
  let stop = floor(random(start, numSteps + 1));

  const strokeColor = getRandomFromPalette();
  const weight = randomSelectTwo() ? 1 : 3;
  let angle = 360 / numShapes;

  noFill();
  stroke(strokeColor);
  strokeWeight(weight);
  push();
  translate(width / 2, height / 2);
  for (let i = 0; i < numShapes; i++) {
    line(start * step, 0, stop * step, 0);
    rotate(angle);
  }
  pop();
}

function outlineShape() {
  const strokeColor = getRandomFromPalette();
  stroke(strokeColor);

  const weight = randomSelectTwo() ? 1 : 3;
  strokeWeight(weight);

  const hexagonTrue = randomSelectTwo();

  push();
  translate(width / 2, height / 2);
  if (hexagonTrue) hexagon(0, 0, crystal_size / 2);
  else ellipse(0, 0, crystal_size, crystal_size);
  pop();
}

function testLines() {
  strokeWeight(3);
  let numShapes = randomSelectTwo() ? sides : sides * 2;

  const strokeColor = getRandomFromPalette();

  noFill();
  stroke(0);
  push();
  translate(width / 2, height / 2);
  stroke(palette[0]);
  ellipse(0, 0, crystal_size, crystal_size);
  let angle = 360 / numShapes;
  for (let i = 0; i < numShapes; i++) {
    stroke(strokeColor);
    line(0, 0, 0, crystal_size / 2);
    rotate(angle);
  }
  pop();
}

function randomSelectTwo() {
  let rando = random(1);
  if (rando > 0.5) {
    return true;
  } else {
    return false;
  }
}

function getRandomFromPalette() {
  const rando = floor(random(palette.length));
  return palette[rando];
}

function hexagon(posX, posY, radius) {
  const rotAngle = 360 / 6;
  beginShape();
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle);
    vertex(thisVertex.x, thisVertex.y);
  }
  endShape(CLOSE);
}

function pointOnCircle(posX, posY, radius, angle) {
  return createVector(posX + radius * cos(angle), posY + radius * sin(angle));
}

class Layer {
  constructor() {
    this.sides = sides;
    this.numShapes = this.sides;
  }
}
