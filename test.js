background(0,0,0);

let stars = [];

function createStars() {
    const starX = Math.random() * width;
    const starY = Math.random() * height;
    return {starX:starX, starY:starY};
}
function drawStars(star) {
    push();
    translate(star.starX,star.starY);
    fill(255,255,255);
    ellipse(0,0,6);
    pop();
}

for (let i = 0; i < 100; i++) {
    // create 100 particles with random position
    const star = createStars();
    stars.push(star); 
}

// add draw function
function draw() {
    background(0,0,0);
    for (let star of stars) {
        drawStars(star);
    }
}



function draw() {
    ground();
}