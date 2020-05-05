let ship;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background("black");
	
	ship = new Ship(windowWidth / 2, windowHeight / 2);

}

function draw() {
	background('black');
	ship.draw();
	
	if(keyIsPressed) {
		// this code will execute when a key is held down. 
		if(keyCode === LEFT_ARROW) {
			// if the user hits the left arrow, this block of code will execute.
			ship.x -= 3;
		}
	}
}

class Ship {
	
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	
	draw() {
		fill("white");
		triangle(this.x, this.y, this.x - 10, this.y + 30, this.x + 10, this.y + 30);
	}
	
}