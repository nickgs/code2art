
// Our first Sketch.



var radius = 0;

function setup() {
 
  
  createCanvas(screen.width,screen.height);
  background("blue");
}

function draw() {
	
	drawCircleEffect();

	radius = radius + 1;

}

function drawCircleEffect() {
	
	stroke(random(1000));
	noFill();
	circle(500,500,radius);

}




