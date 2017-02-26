/**
 * Based on a paper here:
 * http://algorithmicbotany.org/papers/abop/abop-ch4.pdf
 */

var n = 0;
var c = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);
}

function draw() {
  var a = n * 137.5;
  var r = c * sqrt(n);

  var x = r * cos(a) + width / 2;
  var y = r * sin(a) + height /2;

  fill(n % 256, 255, 255);
  noStroke();
  ellipse(x, y, 8, 8);

  n++;
}
