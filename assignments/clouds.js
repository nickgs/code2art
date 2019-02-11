
// Our first Sketch.

function setup() {
  createCanvas(screen.width,screen.height);
  background("blue");
}

function draw() {
	background("blue");
		// --------------------------
	// Lets draw below this line!
	drawCloud();
	translate(600,100);
	drawCloud();
	translate(550,-150);
	drawCloud();
}


function drawCloud() {
	// Going to draw a cloud
	fill('white');
	noStroke();
	circle(150, 150, 50);
	circle(200, 100, 75);
	circle(250, 150, 100);
	circle(350, 150, 80);
	circle(500, 150, 30);
}

