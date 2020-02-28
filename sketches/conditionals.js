let circleSize = 5;
let xpos = 0;
let ypos = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    // initialize the xpos and ypos variables.
    xpos = windowWidth / 2;
    ypos = windowHeight / 2;
    
    background("black");
}

function draw() {
    //fill("red");
    
    noFill();
    
    stroke(random(255), random(255), random(255))
    
   
    
    if(mouseIsPressed) {
       //circleSize = 5;
        xpos = mouseX;
        ypos = mouseY;
        
        ellipse(xpos, ypos, circleSize, circleSize);
         circleSize += 5;
    }
    
    
    
   
}