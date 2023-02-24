let diam = 10;
let centX, centY;
let a = [];
function setup() {
    createCanvas(1000, 1000);
    background(180);
    frameRate(24);
    smooth();
    centX = width / 2;
    centY = height / 2;
    stroke(0);
    strokeWeight(5);
    fill(255, 50);
}
function draw(){
    if (diam <= 1000) {
        background(180);
        strokeWeight(5);
        fill(255, 10);
        ellipse(centX, centY, diam, diam);
        strokeWeight(1);
        for (let i = 0; i < a.length; i++) {
            ellipse(centX, centY, a[i], a[i]);
        }
        strokeWeight(0);
        noFill();
        let temp = diam;
        while (temp > 10) {
            ellipse(centX, centY, temp, temp);
            temp -= 10;
            if (round(random(37)) == 0) {
                let flag = 0;
                for (let i = 0; i < a.length; i++) {
                    if (a[i] == temp) flag = 1;
                }
                if (flag == 0) a.push(temp);
            }
        }
        diam += 10;
    }
}

