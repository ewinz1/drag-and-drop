// drag and drop program by edwin

// canvas and 2D graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 800;

// global variables
let vert1 = {
    x: 400,
    y: 350,
}

let vert2 = {
    x: 350,
    y: Math.round(350+50*Math.sqrt(3)),
}

let vert3 = {
    x: 450,
    y: Math.round(350+50*Math.sqrt(3)),
}

let circ1 = {
    x: vert1.x,
    y: vert1.y,
    r: 2.5,
}

let circ2 = {
    x: vert2.x,
    y: vert2.y,
    r: 2.5,
}

let circ3 = {
    x: vert3.x,
    y: vert3.y,
    r: 2.5,
}

let mouseIsPressed = false;

// Main Mouse events
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);

function mousedownHandler() {
    mouseIsPressed = true;
}

function mouseupHandler() {
    mouseIsPressed = false;
}

let mouseX, mouseY;

document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(event) {
    // get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect();

    // Calc mouse coordinates using mouse event and canvas location info
    mouseX = event.clientX - cnvRect.left;
    mouseY = event.clientY - cnvRect.top;

    // define x and y mouse/circle coordinates
    var x1= circ1.x;
    var x2 = circ1.y;
    var x2 = mouseX;
    var y2 = mouseY;

    d = dist(x1, y1, x2, y2);
    

    if (d(mouseX, mouseY, circ1.x, circ1.y) < circ1.r) {
        console.log("detect1");
    }  

    else if (mouseX == vert2.x && mouseY == vert2.y) {
        console.log("detect2");
    }  

    else if (mouseX == vert3.x && mouseY == vert3.y) {
        console.log("detect3");
    }
}

requestAnimationFrame(drawshapes);

function drawshapes() {
    // update elements on canvas

    // DRAW CANVAS
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // draw triangle
    ctx.linewidth = 10;
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(vert1.x, vert1.y);
    ctx.lineTo(vert2.x, vert2.y);
    ctx.lineTo(vert3.x, vert3.y);
    ctx.closePath();
    ctx.stroke(); 

    // draw circles

    // circ1
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(circ1.x, circ1.y, circ1.r, 0, 2*Math.PI);
    ctx.fill();

    // circ2
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(circ2.x, circ2.y, circ2.r, 0, 2*Math.PI);
    ctx.fill();

    // circ3
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(circ3.x, circ3.y, circ3.r, 0, 2*Math.PI);
    ctx.fill();

    requestAnimationFrame(drawshapes);
}