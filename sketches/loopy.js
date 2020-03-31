// 1. setup()
function setup() {
    createCanvas(windowWidth, windowHeight);
    background("black");


    for(i = 0; i < 100; i++) {
       ellipse(random(windowWidth),random(windowHeight),20);
    }
    

}
