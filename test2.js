
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


let x = window.innerWidth/2; 
let y = 100;
let rotation = 0;
let speed = 0;
let gravity = 0.2;
let currentScreen = 'start';
let lampColor = [0,0,0];
let clickToStartColor = [255,255,255,255];
let clickToStartColorIsFading = true;
let fuelInTank = 1000;

function draw() {

            x += Math.sin(rotation) * speed; 
            

            y += gravity;

            background(0,0,0);
            tardis(x,y,rotation); 

            if (keyIsDown(32) && fuelInTank > 0) { //if space is pressed and there is tank in the fuel
                speed += 0.02;
                gravity -= 0.01;
                lampColor = [145, 185, 250];   
                fuelInTank -= 1;  
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
          }