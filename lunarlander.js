function setup() {
    let canvas = createCanvas(windowWidth,windowHeight);
    canvas.style('display','block');
    frameRate(30);
}

function ground() {
    push();
    fill(255,255,255);
    translate(windowWidth/2,-15);
    ellipse(0,windowHeight,windowWidth,100);
    pop();
}

// create function to calculate ellipse

// ----------------------------------
//          stars func
// ---------------------------------- 

// background: functions for having stars appear at rand pos

let stars = [];

function createStars() {
    const starX = Math.random() * windowWidth;
    const starY = Math.random() * windowHeight;
    return {starX:starX, starY:starY};
}
function drawStars(star) { 
    push(); 
    translate(star.starX,star.starY);
    fill(255,255,255); 
    ellipse(0,0,4);
    pop();
}

for (let i = 0; i < 150; i++) {
    // create 150 stars with random position
    const star = createStars();
    stars.push(star);
}

// ----------------------------------
//     lunar lander/smoke design
// ----------------------------------

// designing the lunar lander itself
function lunarLander(x, y, rotation) { 
    push();
    translate(x,y);
    rotate(rotation);
    fill(255,255,255);
    ellipse(0,0,25,25);
    triangle(-10,10,0,0,10,10);
    pop();
}
// designing the 'smoke' 
function smoke(x,y,rotation) {
    push();
    translate(x,y);
    rotate(rotation);
    rect(-12.5,0,25,20); 
    pop();
} 

// ----------------------------------
//       functionality
// ----------------------------------

let x = (windowWidth/2)-25; 
let y = 100;
let rotation = 0;
let speed = 0;
let gravity = 0.5;
let currentScreen = 'game';
 
    function draw() {
    for (let star of stars) {
        drawStars(star);
    }
        // continously set the background color to black
        background(0, 0, 0);
        ground();
        // draws the lunar lander
        lunarLander(x,y,rotation);

        for (let star of stars) {
            drawStars(star);
        }

        // tests if the current screen is actually the game screen
        if (currentScreen === 'game') {
            // the falling motion
            y += gravity;

            x += Math.cos(rotation) * speed;  
            y += Math.sin(rotation);
     
            if (keyIsDown(38)) {
                speed += 0.01;  
                gravity -= speed; 
                smoke(x,y,rotation);
            } 
            else if (keyIsDown(40)) { 
                speed = -1;
                gravity += 0.06;
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
            if (y >= windowHeight) {
                currentScreen = 'result';
            }
            
        }
        else if (currentScreen === 'result') {

            if (gravity < 3) {
                console.log('win'); 
            }
            else { 
                console.log('fail');
            }
        
        }
    }   
    
      
 
function mouseClicked() {
    if (currentScreen === 'start') {
        currentScreen = 'game';
        let x = windowWidth/2; 
        y = 100;
        gravity = 0.5;
    }
    else if (currentScreen === 'result') { 
        currentScreen = 'game';
        let x = windowWidth/2;  
        y = 100;
        gravity = 0.5;
    }
}



