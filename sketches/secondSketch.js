function setup() {
    // Lets create a canvas.
    createCanvas(windowWidth, windowHeight);
    
    // Lets set our background to a grey.
    background(153);

	noStroke();
	
	frameRate(20);
}

function draw() {  // called 30 times a second.
	let circleSize = random(255);

	// RED, GREEN, BLUE
	fill(random(255), random(255), random(255));
    // Lets draw a circle to the screen.
    ellipse(random(windowWidth), random(windowHeight), circleSize, circleSize);
    
    var two = add(1, 1); // This is going to equal 2 everytime its called. 
    var five = add(3, 2); 
}


