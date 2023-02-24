function setup(){
    createCanvas(400,400);
    background(255);
    stroke(0, 0, 0, 30);
}
function draw(){
    rC();
    rC();
}

function rC(){
    var a1 = random(0, 2 * PI);
    var xp1 = 200 + 200 * cos(a1);
    var yp1 = 200 + 200 * sin(a1);

    var a2 = random(0, 2 * PI);
    var xp2 = 200 + 200 * cos(a2);
    var yp2 = 200 + 200 * sin(a2);

    line(xp1, yp1, xp2, yp2);
}
