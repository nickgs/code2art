const SIZE = 3;
// const SCREEN_WIDTH = 1080; 
// const SCREEN_HEIGHT = 1080;

const FETA = 90;
const STEP = 5;


function grow() {
    console.log("Growing an lsystem...");

    let dna = "F+F+F+F";    // Starting shape... a square.

    for(var i = 0; i <= SIZE; i++) {
        dna = dna.replaceAll("F", "FF+F-F+F+FF");
    }

    return dna;
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background("black");
    stroke("white");
    strokeWeight(1);
    angleMode(DEGREES);

    const instructions = grow();

    translate(windowWidth/2, windowHeight/2);

    for(let i = 0; i < instructions.length; i++) {
        switch(instructions[i]) {
            case "F":
                console.log("Drawing a branch");
                line(0, 0, STEP, 0); 
                translate(STEP, 0);
                break;
            case "+":
                console.log("Rotating branch");
                rotate(-FETA);
                break;
            case "-":
                console.log("Turning left");
                rotate(FETA);
                break;

        }
        scale(1.002, 1.002);
    }
}

function draw() {

    // translate(windowWidth/2, windowHeight/2);
    
    // for(let i = 0; i <= dna.length; i++) {
    //     switch(dna[i]) {
    //         case "F":
    //             console.log("Drawing a branch");
    //             line(0, 0, 10, 0); 
    //             translate(10, 0);
    //             break;
    //         case "+":
    //             console.log("Rotating branch");
    //             rotate(-FETA);
    //             break;
    //         case "-":
    //             console.log("Turning left");
    //             rotate(FETA);
    //             break;

    //     }
    //     //scale(1.002, 1.002);
    // }

    // rotate(FETA);
}