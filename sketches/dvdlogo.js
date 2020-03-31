
let ydir = 5;
let xdir = 5;

let ypos = 0;
let xpos = 0;

let img;

let imageWidth = 220;
let imageHeight = 158;

function preload() {
	
	img = loadImage('images/dvdlogo.png');

}

// Our setup function.
function setup() {
	
	createCanvas(windowWidth, windowHeight);
	
	background("black");
	
	xpos = random(windowWidth - imageWidth);
	ypos = random(windowHeight - imageHeight);
	
	
	tint(random(255), random(255), random(255));
}


//  Our draw function.
function draw() {
	background("black");
	
	// Calling the image function.
	image(img, xpos, ypos, imageWidth, imageHeight);

	// Right wall
	if(xpos + imageWidth  >= windowWidth) {
		xdir = xdir * -1;
		tint(random(255), random(255), random(255));
	}
	
	
	// Left wall
	if(xpos <= 0) {
		xdir *= -1;
		tint(random(255), random(255), random(255));
	}

	//  Bottom wall
	if(ypos + imageHeight >= windowHeight) {
		ydir = ydir * -1;
		tint(random(255), random(255), random(255));
	}
	
	
	// Top wall
	if(ypos <= 0) {
		ydir *= -1;
		tint(random(255), random(255), random(255));
	}

	xpos = xpos + xdir;
	ypos = ypos + ydir;
	
}