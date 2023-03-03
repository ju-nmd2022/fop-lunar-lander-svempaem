
function setup() {
    let canvas = createCanvas(windowWidth,windowHeight);
    canvas.style('display','block');
    frameRate(30);
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}

function ground() {
    push();
    fill(255,255,255);
    translate(0,-50);
    rect(0,windowHeight,windowWidth,50);
    pop();
}

// create function to calculate ellipse

// ----------------------------------
//          stars func
// ---------------------------------- 

// background: functions for having stars appear at rand pos

let stars = [];

function createStars() {
    const starX = Math.random() * window.innerWidth;
    const starY = Math.random() * window.innerHeight;
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
//     TARDIS
// ----------------------------------

let colorOfLight = [200,200,200];

function tardis(x,y,rotation,r,g,b) {
    push();
    rotate(rotation);
    translate(-200,-200);
    fill(30, 42, 115); //the main structure
    noStroke();
    rect(x,y,60,125); //the box
    rect(x+1.25,y-10,57.5,10); //the top part
    rect(x+25,y-18,10,8.5); //the light holder
    triangle(x+24,y-18,x+30,y-22,x+36,y-18); //the top of the light
    
    fill(r,g,b); //the light itself
    rect(x+26.5,y-17.5,7.5,7.5);

    fill(0,0,0); //the sign
    rect(x+5,y+2.5,50,10);
    fill(255,255,255);
    textSize(3.5);
    textAlign(CENTER,CENTER);
    text('POLICE',x+15,y+7.5);
    text('BOX',x+44.5,y+7.5);
    text('PUBLIC CALL',x+26.5,y+5.5,10);

    fill(38, 53, 145); //the doors
    rect(x+5,y+15,50,105);

    fill(59, 73, 161); //the door panels
    rect(x+7.5,y+94,20,23.125);
    rect(x+32.5,y+94,20,23.125);
    rect(x+7.5,y+68.375,20,23.125);
    rect(x+32.5,y+68.375,20,23.125);
    rect(x+7.5,y+42.75,20,23.125);
    rect(x+32.5,y+42.75,20,23.125);

    fill(255,255,255); //the paper and the logo on the door
    rect(x+10,y+45,15,17.5);
    ellipse(x+42.5,y+50,7.5,7.5);
    fill(0,0,0);
    ellipse(x+42.5,y+50,5,5);

    stroke(255,255,255); //the windows
    fill(0,0,0);
    rect(x+7.5,y+17.125,6.65,11.562);
    rect(x+14.15,y+17.125,6.65,11.562);
    rect(x+20.8,y+17.125,6.65,11.562);
    rect(x+7.5,y+28.6875,6.65,11.562);
    rect(x+14.15,y+28.6875,6.65,11.562);
    rect(x+20.8,y+28.6875,6.65,11.562);

    rect(x+32.5,y+17.125,6.65,11.562);
    rect(x+39.15,y+17.125,6.65,11.562);
    rect(x+45.8,y+17.125,6.65,11.562);
    rect(x+32.5,y+28.6875,6.65,11.562);
    rect(x+39.2,y+28.6875,6.65,11.562);
    rect(x+45.8,y+28.6875,6.65,11.562);
    pop();
}

// ----------------------------------
//       functionality
// ----------------------------------

let x = 500; 
let y = 500;
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
        tardis(x,y,rotation);

        for (let star of stars) {
            drawStars(star);
        }

        // tests if the current screen is actually the game screen
        if (currentScreen === 'game') {
            // the falling motion


            x += Math.cos(rotation) * speed;  
            y += Math.sin(rotation);
     
            if (keyIsDown(38)) {
                speed += 0.02;   
            } 
            else if (keyIsDown(40)) { 
                speed = -1;
                gravity += 0.06;
            }
            else {
                gravity += 0.05; 
                speed = 0;
            }

            if (keyIsDown(37)) {
                rotation += 0.05;
            }
            else if (keyIsDown(39)) {
                rotation -= 0.05;
            }

            // tests for fail/completion
            if (y >= windowHeight-50) {
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
        x = windowWidth/2; 
        y = 100;
        rotation = 0;
        gravity = 0.5;
    }
    else if (currentScreen === 'result') { 
        currentScreen = 'game';
        x = windowWidth/2;  
        y = 100;
        rotation = 0;
        gravity = 0.5;
    }
}



