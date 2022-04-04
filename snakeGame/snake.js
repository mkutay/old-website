function Snake() {
    this.x = 3 * scl;
    this.y = 0;

    this.xspeed = 1;
    this.yspeed = 0;

    this.total = 2;
    this.tail = [createVector(this.x - scl, this.y), createVector(this.x - 2 * scl, this.y)];

    this.retX = function() {
        return this.x;
    }

    this.retY = function() {
        return this.y;
    }

    this.restart = function() {
        this.x = 0;
        this.y = 0;

        this.xspeed = 1;
        this.yspeed = 0;

        this.total = 2;
        this.tail = [createVector(this.x - scl, this.y - scl), createVector(this.x - 2 * scl, this.y, 2 * scl)];
    }

    this.dir = function(x, y) {
        if (abs(this.xspeed - x) != 2) {
            this.xspeed = x;
        }
        if (abs(this.yspeed - y) != 2) {
            this.yspeed = y;
        }
    }

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.death = function() {
        for (var i = 0; i < this.tail.length; i++) {
            if (this.tail[i].x == this.x && this.tail[i].y == this.y) {
                var c = this.total + 1;
                textSize(56);
                fill(100, 0, 255);
                text("Game Over!", 150, 200);
                text("Score: ", 150, 250);
                text(c, 350, 250);
                noLoop();
            }
        }
    }

    this.update = function() {
        if (this.total === this.tail.length) {
            for (var i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }
        this.tail[this.total - 1] = createVector(this.x, this.y);

        this.x += this.xspeed * scl;
        this.y += this.yspeed * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }

    this.show = function() {
        fill(255);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
    }
}