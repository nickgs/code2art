
// Our first Sketch.

function setup() {
  createCanvas(screen.width,screen.height);
  background("blue");
}

function draw() {
	// --------------------------
	// Lets draw below this line!
	

}

function drawCloud() {

	// Going to draw a blue circle
	noFill();
	circle(random(0,screen.width), random(0,screen.height), 300);

}