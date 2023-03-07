//setup the canvas, etc.

function setup() { 
    let canvas = createCanvas(windowWidth,windowHeight); //create a canvas the width and height of the window
    canvas.style('display','block'); //display the canvas as block
    frameRate(30); //set fps to 30
    textFont('Courier'); //set the font used to Courier;
    textSize(35); //set the default text size to 35 
    textAlign(CENTER,CENTER); //align and justify text to center by default
}

function windowResized() { //when window is resized...
    resizeCanvas(windowWidth,windowHeight); //...resize the canvas to fit the new size
} 

//the ground

function ground() {
    push(); //start of new properties
    fill(255,255,255); //set fill color to white
    translate(0,-60); //offset x by 0 and y by -60 
    rect(0,windowHeight,windowWidth,50); //the surface

    rect(0,windowHeight-50,50,50); //the right 1000 rect
    rect(windowWidth-50,windowHeight-50,50,50); //the left one
    
    fill(0,0,0); //set fill (text) color to black
    textSize(20); //set text size to 20
    text('100',0,windowHeight,windowWidth,50); //the text on the surface
    text('1000',0,windowHeight-50,50,50); //the right 1000 rects text
    text('1000',windowWidth-50,windowHeight-50,50,50); //the left 1000 rects text
    pop(); //end of new properties
}

// ----------------------------------
//          stars
// ---------------------------------- 

let stars = []; //let stars be an empty array

function createStars() { //function to create random positions for stars
    const starX = Math.random() * window.innerWidth; //place starX at a random position inside the window
    const starY = Math.random() * window.innerHeight; //same with starY
    return {starX:starX, starY:starY}; //return a simple object where starX has value of the starX const and vice versa with starY
}
function drawStars(star) { //draw the stars (when called upon later)
    push(); //start of new properties
    translate(star.starX,star.starY); //offset by starX and starY of the simple object 'star'
    fill(255,255,255); //set fill color to white
    ellipse(0,0,4); //draw ellipse at x 0 and y 0 (in relation to their offset) and 4x4 big
    pop(); //end of new properties
}

for (let i = 0; i < 150; i++) { //loop that runs 150 times, thus pushing out 150 star positions
    const star = createStars(); //create star variable (simple object), that gets new values from createStars function every time the loop is run
    stars.push(star); //add the star values to the stars array
}

// ----------------------------------
//     TARDIS
// ----------------------------------

function tardis(x,y,rotation,r,g,b) { //the tardis (main character!) 
    push(); //start of new properties
    scale(0.5); //make it half as big
    translate(x*2,y*2); //offset by x*2 and y*2
    rotate(rotation); //rotate by the amount specified by the variable 'rotation'
    fill(30, 42, 115); //set fill color to blue
    noStroke(); //remove the stroke
    rect(-30,-65,60,130); //the box 
    rect(-27.5,-72,55,10); //the top part
    rect(-5,-80,10,8.5); //the light holder
    triangle(-6,-80,0,-85,6,-80); //the top of the light
    
    fill(r,g,b); //let the fill color of light be specified by the r,g,b variables
    rect(-3.875,-79,7.5,7.5); //the light

    fill(0,0,0); //set fill color to black
    rect(-25,-60,50,10); //the sign
    fill(255,255,255); //set fill color to white
    textSize(3.5); //set text size to 3.5
    text('POLICE',-15,-55); //self explanatory
    text('BOX',15,-55); 
    text('PUBLIC CALL',-4,-57,10);

    fill(38, 53, 145); //set fill to lighter blue
    rect(-25,-50,50,110); //the doors

    fill(59, 73, 161); //set fill to even lighter blue
    rect(-22.5,36,20,22); //the door panels
    rect(2,36,20,22);
    rect(-22.5,10,20,22);
    rect(2,10,20,22);
    rect(-22.5,-16,20,22);
    rect(2,-16,20,22);

    fill(255,255,255); //set fill to white
    rect(-20,-14,15,16); //the paper and the logo on the door
    ellipse(6+20/3,-9,20/3,20/3);
    fill(0,0,0); // set fill to black
    ellipse(6+20/3,-9,4,4);

    stroke(255,255,255); //add white stroke
    rect(-22.5,-45,20/3,11.5); //the windows
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
    pop(); //end of new properties
}

// ----------------------------------
//       functionality
// ----------------------------------

let x; //to be given a starting value...
let y;
let rotation;
let speed;
let gravity;
let fuelInTank;
let timeOfThrust;
let timeOfNoThrust;
let score; //...in the play() function

let currentScreen = 'start'; //tells the game what screen should be displayed
let lampColor = [0,0,0]; //array, gives the lamp color a start value (black)
let clickToStartColor = [255,255,255,255]; //array, gives the buttons that fade a starting opacity of 255
let clickToStartColorIsFading = true; //the fading buttons are fading out to start with (and not in, which would be false)
 
// draw the game

    function draw() { 

        //if the fading buttons are fading out (as defined by the boolean), remove opacity
        if (clickToStartColorIsFading === true) { 
            clickToStartColor[3] -=5;
        }
        // if not, add opacity
        else if (clickToStartColorIsFading === false) {
            clickToStartColor[3] +=5;
        }
        //change the boolean back and forth if the opacity hits a min or max value
        if (clickToStartColor[3] === 90) {
            clickToStartColorIsFading = false;
        }
        else if (clickToStartColor[3] === 255) {
            clickToStartColorIsFading = true;
        }

        // continously set the background color to black
        background(0, 0, 0);
        ground(); //draw the ground

        //if the current screen is 'game' or 'result', draw the tardis
        if (currentScreen === 'game' || currentScreen === 'result') {
        
        tardis(x,y,rotation,lampColor); // draw the tardis

        }
    
        //draw the stars
        for (let star of stars) { //loop that runs 150 times (the number of star values in the stars array)
            drawStars(star); //draw stars at the random star positions
        }

        // test if the current screen is the game screen
    if (currentScreen === 'game') {
            push(); //start of new properties
            fill(255,255,255); //set fill to white
            textAlign(RIGHT,CENTER); //justify text right, align center
            text('Fuel: ' + fuelInTank,width-10,20); //self explanatory
            text('Thrust:' + (speed*10).toFixed(0),width-10,50);
            text('Gravity Pull: ' + (gravity*10).toFixed(0),width-10,80);
            pop();

            if (x >= width || x <= 0) { // "out of bounds x"
                x -= 50;
            }
            if (y <= 0) { // "out of bounds y"
                y += 50;
            }

            x += Math.sin(rotation) * speed; //enables horizontal movement and changes it depending on the rotation of the tardis
            y += gravity; //the tardis falls with gravity

            if (gravity > -0.5) { // min gravity
                gravity -= (speed/30); //when above min gravity, gravity is lowered by speed, adjusted for the fps
            }
            if (gravity < 2) { // max gravity
                gravity += timeOfNoThrust/1000; //when below max gravity, gravity is increased depending on how long the thruster has been off
            }

            // button presses

            if (keyIsDown(32) && fuelInTank > 0) { //if space is pressed and there is tank in the fuel
                timeOfThrust += 1/30; //count the thrust time
                if (speed < 1.5) { //max speed
                    speed += timeOfThrust/1000; //if speed is below max speed, increase speed depending on how long the thruster is pressed
                }

                timeOfNoThrust = 0; //reset count for the thrust being unpressed
                
                lampColor = [145, 185, 250]; //the lamp becomes blue while thrust is on  
                fuelInTank -= 1; //the fuel goes down while thrust is on 
            } 

            else { 
                if (speed > 0.02) { //as long as speed is above 0.05 (to avoid negative speed)
                    speed -= 0.02; //deacellerate
                }
                timeOfNoThrust += 1/30; //count the 'no thrust' time
                lampColor = [0,0,0]; //lamp becomes black while thrust is off
                timeOfThrust = 0; //reset counter for thrust
            }

            //rotate left or right depending on what arrow key is pressed
            if (keyIsDown(37)) { 
                rotation -= 0.04;
            }

            else if (keyIsDown(39)) {
                rotation += 0.04;
            }

            // test for fail/completion
            if (y >= windowHeight-90) { //score 100
                currentScreen = 'result';
                score = 100;
            }
            else if (y >= windowHeight - 140) {
                if ((x > 0 && x < 64) || (x > windowWidth -64 && x < windowWidth)) { //score 1000
                    currentScreen = 'result';
                    score = 1000;
                }
            }

            
        }

        //test if the current screen is the result screen
    else if (currentScreen === 'result') {
            fill(255,255,255);
            if (gravity < 0.3) { //win
                text('You Landed Safely!', width/2, 200);
                text('Score: ' + score, width/2, 400);
                fill(clickToStartColor);
                text('Play Again', width/2, 600);
            }
            else { //lose
                text('You Crashed!',width/2,200);
                text('The Daleks are on their way',width/2,300);
                fill(clickToStartColor);
                text('Try Again',width/2,400);
            }
        
        }

        //test if the current screen is the start screen
    else if (currentScreen === 'start') {
            fill(255,255,255);
            text('TARDIS Lander',width/2,200);
            textSize(30);
            text('Help the Doctor land safely!',width/2,300);
            fill(clickToStartColor);
            text('Click to Start',width/2,400);
        }
    }   
    
function play() { //function to setup the game
    if (currentScreen !== 'game') { // only works if the current screen is not the game screen
        x = windowWidth/2; //start in the middle of the screen
        y = 200; //and at y pos 200
        rotation = 0; //no rotation
        gravity = 0.6; //0.6 gravity pull
        fuelInTank = 2000; //starting fuel
        speed = 0; //zero fuel
        timeOfThrust = 0; //reset...
        timeOfNoThrust = 0; //...counters
        score = 0; //reset score

    if (currentScreen === 'start') { //if screen is start, make it game
        currentScreen = 'game';
    }
    else if (currentScreen === 'result') { //if screen is result, make it start
        currentScreen = 'start';
    }
    }
}
 
function mouseClicked() { //self explanatory
    play(); //run play() function
}
function keyPressed() { //---||---
    play(); //---||---
}



