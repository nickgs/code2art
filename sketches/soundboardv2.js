let value = 0;
let pad1;
let pad2;
let padSize = 100;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background("black");
	
	pad1 = new Pad(220, 100, 100);
	pad2 = new Pad(330, 200, 200);
	
}

function draw() {
    background("black");
	pad1.draw();
	pad2.draw();
}

function keyPressed() {
  if(keyCode == 68) {
  	pad1.play();
  }
}


class Pad {
	
	constructor(x, y, freq) {
		
		this.x = x;
		this.y = y;
		this.freq = freq;

		this.osc = new p5.Oscillator();
		this.osc.amp(0);
		this.osc.setType('sine');
		this.osc.start();

		
		this.width = padSize;
		this.height = padSize;
		
		this.env = new p5.Env();
	  	// set attackTime, decayTime, sustainRatio, releaseTime
	  	this.env.setADSR(0.001, 0.1, 0.2, 0.1);
	  	// set attackLevel, releaseLevel
	  	this.env.setRange(3, 0);
	
	  	// p5.Amplitude will analyze all sound in the sketch
	  	// unless the setInput() method is used to specify an input.
	  	this.analyzer = new p5.Amplitude();
	  	this.analyzer.setInput(this.env);
	}
	
	draw() {
		 // get volume reading from the p5.Amplitude analyzer
		let level = this.analyzer.getLevel();

		// use level to draw a green rectangle
		let levelHeight = map(level, 0, 0.4, 0, height);
		fill(100, 250, 100);
		rect(this.x, this.y, this.width, -levelHeight);
	}
	
	play() {
		this.osc.freq(243);
		this.env.play(this.osc);
	}
	
}
