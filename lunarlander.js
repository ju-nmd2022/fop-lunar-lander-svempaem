// designing the lunar lander itself
function lunarLander(x, y, rotation) {
    push();
    translate(x, y);
    rotate(rotation);
    fill(255,255,255);
    ellipse(-20,50,121,81);
    pop();
}

let x = 100;
let y = 100;
let rotation = 0;

function draw() {
    // continously set the background color to black
    background(0, 0, 0);
    lunarLander(x,y,rotation);

    if (keyIsDown(37)) {
        rotation += 0.05;
    }
    if (keyIsDown(39)) {
        rotation -= 0.05;
    }
}