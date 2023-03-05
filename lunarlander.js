
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
    translate(0,-60);
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
    
    translate(x,y);
    rotate(rotation);
    fill(30, 42, 115); //the main structure
    noStroke();
    rect(-30,-65,60,130); //the box
    rect(-27.5,-72,55,10); //the top part
    rect(-5,-80,10,8.5); //the light holder
    triangle(-6,-80,0,-85,6,-80); //the top of the light
    
    fill(r,g,b); //the light itself
    rect(-3.875,-79,7.5,7.5);

    fill(0,0,0); //the sign
    rect(-25,-60,50,10);
    fill(255,255,255);
    textSize(3.5);
    textAlign(CENTER,CENTER);
    text('POLICE',-15,-55);
    text('BOX',15,-55);
    text('PUBLIC CALL',-4,-57,10);

    fill(38, 53, 145); //the doors
    rect(-25,-50,50,110);

    fill(59, 73, 161); //the door panels
    rect(-22.5,36,20,22);
    rect(2,36,20,22);
    rect(-22.5,10,20,22);
    rect(2,10,20,22);
    rect(-22.5,-16,20,22);
    rect(2,-16,20,22);

    fill(255,255,255); //the paper and the logo on the door
    rect(-20,-14,15,16);
    ellipse(6+20/3,-9,20/3,20/3);
    fill(0,0,0);
    ellipse(6+20/3,-9,4,4);

    stroke(255,255,255); //the windows
    fill(0,0,0);
    rect(-22.5,-45,20/3,11.5);
    rect(-16,-45,20/3,11.5);
    rect(-9.5,-45,20/3,11.5);
    rect(2,-45,20/3,11.5);
    rect(8.5,-45,20/3,11.5);
    rect(15,-45,20/3,11.5);

    rect(-22.5,-34,20/3,11.5);
    rect(-16,-34,20/3,11.5);
    rect(-9.5,-34,20/3,11.5);
    rect(2,-34,20/3,11.5);
    rect(8.5,-34,20/3,11.5);
    rect(15,-34,20/3,11.5);
    pop();
}

// ----------------------------------
//       functionality
// ----------------------------------

let x = window.innerWidth/2; 
let y = 100;
let rotation = 0;
let speed = 0;
let gravity = 0.2;
let currentScreen = 'start';
let lampColor = [0,0,0];
let clickToStartColor = [255,255,255,255];
let clickToStartColorIsFading = true;
 
    function draw() {
    for (let star of stars) {
        drawStars(star);
    }
        // continously set the background color to black
        background(0, 0, 0);
        ground();
        if (currentScreen === 'game' || currentScreen === 'result') {
        // draws the lunar lander
        tardis(x,y,rotation,lampColor);
        }
        

        for (let star of stars) {
            drawStars(star);
        }

        // tests if the current screen is actually the game screen
        if (currentScreen === 'game') {

            
            
            x += Math.sin(rotation) * speed; 
            y += Math.cos(rotation) * gravity; 


            if (keyIsDown(32)) {
                speed += 0.02;
                gravity -= 0.01;
                lampColor = [145, 185, 250];   
            } 
            else {
                gravity += 0.02;
                speed = 0;
                lampColor = [0,0,0];
            }
     
            if (keyIsDown(38)) {
                speed += 0.02;   
            } 
            else if (keyIsDown(40)) { 
                speed = -1;

            }
            else {

            }

            if (keyIsDown(37)) {
                rotation -= 0.05;
            }
            else if (keyIsDown(39)) {
                rotation += 0.05;
            }

            // tests for fail/completion
            if (y >= windowHeight-120) {
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
        else if (currentScreen === 'start') {
            fill(255,255,255);
            textFont('Courier');
            textSize(35);
            textAlign(CENTER,CENTER);
            text('TARDIS Lander',width/2,200);
            textSize(30);
            text('Help the Doctor land safely!',width/2,300);
            fill(clickToStartColor);
            text('Click to Start',width/2,400);
    
                if (clickToStartColorIsFading === true) {
                    clickToStartColor[3] -=5;
                }
                else if (clickToStartColorIsFading === false) {
                    clickToStartColor[3] +=5;
                }
                if (clickToStartColor[3] === 90) {
                    clickToStartColorIsFading = false;
                }
                else if (clickToStartColor[3] === 255) {
                    clickToStartColorIsFading = true;
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
        currentScreen = 'start';
        x = windowWidth/2;  
        y = 100;
        rotation = 0;
        gravity = 0.5;
    }
}



