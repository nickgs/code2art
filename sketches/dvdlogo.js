
let ydir = 5;
let xdir = 5;

let ypos = 0;
let xpos = 0;

// Our setup function.
function setup() {
	
	createCanvas(windowWidth, windowHeight);
	
	background("black");
	
	xpos = random(windowWidth);
	ypos = random(windowHeight);
	
	fill("white");
	
}


//  Our draw function.
function draw() {
	background("black");
	

	rect(xpos, ypos, 20, 20);
	
	// Right wall
	if(xpos >= windowWidth - 20 || xpos <= 0) {
		xdir = xdir * -1;
		fill(random(255), random(255), random(255));
	}
	
	
	// Left wall
	// if(xpos <= 0) {
	// 	xdir *= -1;
	// }

	//  Top wall
	if(ypos >= windowHeight - 20) {
		ydir = ydir * -1;
	}
	
	
	// Bottom wall
	if(ypos <= 0) {
		ydir *= -1;
	}

	xpos = xpos + xdir;
	ypos = ypos + ydir;
	
}