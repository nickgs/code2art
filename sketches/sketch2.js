// Lets play with some box fitting.

var circles = [];

var campfire = ['#3b444b', '#f2f3f4', '#a52a2a', '#7c0a02', '#cc3300'];
var pallette = campfire;

/**
 * Setup our sketch. Here we set things like canavas size and background color.
 * We should also initialize any global variables to our sketch.
 **/
function setup() {
  // Lets make our canvas be the size of the browser window.
  createCanvas(windowWidth, windowHeight);
  background(0);
}

/**
 * Our draw function. This is called in a loop according to your frame rate.
 **/
function draw() {
  // Lets draw some things.
  background(0);

  circles.forEach(function(c) {
    c.draw();
    if(c.growing) {
      if(c.edges()) {
        c.growing = false;
      }
      else {
        // Lets check all other circles and see if we are growing.
        for(var i = 0; i < circles.length; i++) {
          var d = dist(c.pos.x, c.pos.y, circles[i].pos.x, circles[i].pos.y);
          if(d - 5 < (c.r + circles[i].r) && c != circles[i]) {
            c.growing = false;
            break;
          }
        }
      }
      c.grow();
    }
  });

  //create a new circle if we can find a valid one.
  var c = newCircle();
  if(c) {
    circles.push(c);
  }
}

function newCircle() {
  // Pick a random point.
  var newPos = createVector(random(windowWidth), random(windowHeight));
  var valid = true;

  for(var i = 0; i < circles.length; i++) {
    var d = dist(newPos.x, newPos.y, circles[i].pos.x, circles[i].pos.y);
    if(d < circles[i].r) {
      valid = false;
      break;
    }
  }

  if(valid) {
    return new Circle(newPos);
  } else {
    return null;
  }

}

var Circle = function(pos) {
  this.pos = pos;
  this.r = 3;
  this.color = random(pallette);

  this.growing = true;
}

Circle.prototype.draw = function() {
  stroke(0);
  fill(this.color);
  ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
}

Circle.prototype.grow = function () {
  this.r = this.r + 1;
}

Circle.prototype.edges = function() {
  return (this.pos.x + this.r > windowWidth || this.pos.x - this.r < 0 || this.pos.y + this.r > windowHeight || this.pos.y - this.r < 0);
}
