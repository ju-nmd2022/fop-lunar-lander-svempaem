// designing the lunar lander itself
function lunarLander(x, y, rotation) {
    push();
    translate(x,y);
    rotate(rotation);
    fill(255,255,255);
    ellipse(0,0,40,40);
    triangle(-10,10,-20,20,10,10);
    pop();
}

let x = 100;
let y = 100;
let rotation = 0;
let speed = 0;
let gravity = 0.5;
let currentScreen = 'game';
 
    function draw() {
        // continously set the background color to black
        background(0, 0, 0);

        // tests if the current screen is actually the game screen
        if (currentScreen === 'game') {
            // the falling motion
            y += gravity;
            lunarLander(x,y,rotation);
     
            if (keyIsDown(38)) {
                speed = 5;
                gravity -= 0.02;
            }
            else {
                gravity += 0.05;
            }

            if (keyIsDown(37)) {
                rotation += 0.05;
            }
            else if (keyIsDown(39)) {
                rotation -= 0.05;
            }

            // tests for fail/completion
            if (y > 578-40) {
                currentScreen = 'result';
            }
        }
    }

    function draw() {
        if (currentScreen === 'result') {  
        }
    }

function mouseClicked() {
    if (currentScreen === 'start') {
        currentScreen = 'game';
    }
    else if (currentScreen === 'result') {
        currentScreen = 'game';
    }
}