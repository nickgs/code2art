
let ydir = 20;
let xdir = 5;

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
	background("black");
	
	fill("white");
	rect(xpos, ypos, 20, 20);
	
	if(xpos >= windowWidth - 20) {
		xdir = xdir * -1;
	}
	
	if(xpos <= 0) {
		xdir *= -1;
	}

	xpos = xpos + xdir;
	
}