let colorOfLight = [200,200,200];
let rotation = 0;

function setup() {
    rectMode(CENTER);
}

function tardis(x,y,rotation,r,g,b) {
    push();
    
    translate(width/2,height/2);
    console.log(width);
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

function draw() {
    rotate(rotation);
    background(255,255,255);
    tardis(0,0,rotation,colorOfLight);

    if (keyIsDown(37)) {
        rotation += 0.05;
    }
    else if (keyIsDown(39)) {
        rotation -= 0.05;
    }
}

// var x = 0;

// function setup() { 
//   createCanvas(400, 400);
//   rectMode(CENTER);
// } 

// function draw() { 
//   background(220);
	
  
// 	x+= 0.02;
//   translate (width/2, height/2);
//   rotate(x);
// 	rect(0, 0, 120, 400);
// }