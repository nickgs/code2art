let pads = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background("black");
	
	for(let i = 0; i < 10; i++) {
		pads[i] = new Pad(10+(i*100), 100, 100+(i*5));
	}
	
}

function draw() {
	background("black");
	
	for(let i = 0; i < 10; i++) {
		pads[i].draw();	
	}
}

function keyPressed() {
  if(keyCode == 68) { // the D key
  	pads[0].play();
  }
  if(keyCode == 70) { // the F key
  	pads[1].play();
  }
  if(keyCode == 71) { 
  	pads[2].play();
  }
  if(keyCode == 72) { 
  	pads[3].play();
  }
  if(keyCode == 74) { 
  	pads[4].play();
  }
}


class Pad {
	
	constructor(x, y, freq) {
		
		this.x = x;
		this.y = y;
		this.width = 100;
		this.height = 100;
		this.freq = freq;
		
		// Oscillator, Envelope, Analyzer
		this.osc = new p5.Oscillator();
		this.osc.amp(0);
		this.osc.setType('sine');
		this.osc.start();
		
		this.env = new p5.Env();
		// attackTime, decayTime, sustainRatio, releaseTime
		this.env.setADSR(0.001, 0.1, 0.2, 0.1);
		this.env.setRange(3, 0);
		
		this.analyzer = new p5.Amplitude();
		this.analyzer.setInput(this.env);
	}
	
	draw() {
		let level  = this.analyzer.getLevel();
		let levelHeight = map(level, 0, 0.4, 0, this.height)
		
		rect(this.x, this.y, this.width, -levelHeight);
	}
	
	play() {
		this.osc.freq(this.freq);
		this.env.play(this.osc);
	}
	
}
