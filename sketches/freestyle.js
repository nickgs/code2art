
let posX = 10; // Globally defined
let posY = 10;

function setup() {
	

	
	createCanvas(windowWidth, windowHeight);
	background("#000000");
	
	//frameRate(5)
}


function draw() {

	background('rgba(255,255,255, 0.05)');
	
	//let r = random(windowHeight);
	//let p = random(windowWidth);
	fill("red");
	//   x   y   s1  s2
	rect(mouseX, mouseY, 50, 50);
	
	posX = posX + 1;
}
