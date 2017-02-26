
// Lets create some pallettes.
var excite = ['#3dfaff', '#ff009a', '#7bff76', '#d63cff', '#ff0000'];
var creamyBlues = ['#a7e0e3', '#92d6da', '#8ecdd0', '#84bfc2', '#7eafb1'];

var pallette = creamyBlues;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
};

function draw() {
    background('rgba(0,0,0, .01)');
    fill(random(pallette));
    noStroke();
    rect(random(windowWidth),random(windowHeight),70,70);
}
