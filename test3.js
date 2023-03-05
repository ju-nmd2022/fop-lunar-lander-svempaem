

function car(x,y,rotation) {
    push();
    translate(x,y);
    rotate(rotation);
    rect(-50,-30,100,60);
    pop();
}

let x = 100;
let y = 100;
let rotation = 0;

function draw() {
    background(0,0,0);
    car(x,y,rotation);

    if (keyIsDown(37)) {
        rotation += 0.2;
    }
    else if (keyIsDown(39)) {
        rotation -= 0.2;
    }
}