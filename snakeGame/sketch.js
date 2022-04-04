var s;
var scl = 20;
var food;

function setup() {
    createCanvas(600, 600);
    s = new Snake();
    // frameRate(7);
    pickLocation();
}

function pickLocation() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);

    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(51);

    s.update();
    s.show();

    s.death();

    if (s.eat(food)) {
        pickLocation();
    }

    fill(255, 0, 50);
    rect(food.x, food.y, scl, scl);
    for (var i = 0; i < 400000000; i++) {

    }
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode == DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode == RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode == LEFT_ARROW) {
        s.dir(-1, 0);
    }
}