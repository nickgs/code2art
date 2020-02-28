
let ydir = 1;
let xdir = 1;

let ypos = 0;
let xpos = 0;

// Our setup function.
function setup() {
	
	createCanvas(windowWidth, windowHeight);
	
	background("black");
	
	xpos = windowWidth/2;
	ypos = windowHeight/2;
	
}


//  Our draw function.
function draw() {
	
	fill("white");
	rect(xpos, ypos, 20, 20);
	
	if(xpos >= windowWidth) {
		xdir = -1;
	}

	xpos = xpos + xdir;
	
}