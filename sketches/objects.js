var myHome;
var mySecondHome;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background("black");
	fill("red");
	
	myHome = new House(3);
	myHome.draw();
	
	mySecondHome = new House(10);
	mySecondHome.draw();
}

function draw() {
	
}

class House {
	
	constructor(_numRooms) {
		this.numRooms = _numRooms;
	}
	
	draw() {
		
		for(var i = 0; i < this.numRooms; i++) {
			rect(20 * i, 20, 20, 20);
		}
		
	}
}