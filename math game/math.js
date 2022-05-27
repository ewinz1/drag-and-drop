// drag and drop program by edwin

// canvas and 2D graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 800;

// global variables ---

// 1. shapes
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
    x: 400,
    y: 350,
    r: 2.5,
}

let circ2 = {
    x: 350,
    y: Math.round(350+50*Math.sqrt(3)),
    r: 2.5,
}

let circ3 = {
    x: 450,
    y: Math.round(350+50*Math.sqrt(3)),
    r: 2.5,
}

// 2. mouse variables
let mouseX, mouseY;

// 3. Boolean variables
let v1Drag, v2Drag, v3Drag;

// Main Mouse events
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);

let mouseIsPressed = false;

// handlers for clicking
function mousedownHandler() {

    mouseIsPressed = true;
    
    // variables for mouse/circle coordinates
    var x1= circ1.x;
    var x2 = mouseX;
    var x3 = circ2.x;
    var x4 = circ3.x;
    var y1 = circ1.y;
    var y2 = mouseY;
    var y3 = circ2.y;
    var y4 = circ3.y

    // distance calculations
    d1 = Math.sqrt((x2-x1)**2+(y2-y1)**2);
    d2 = Math.sqrt((x3-x2)**2+(y3-y2)**2);
    d3 = Math.sqrt((x4-x2)**2+(y4-y2)**2);

    if (mouseIsPressed && d1 < circ1.r) {
        v1Drag = true;  

    } else if (mouseIsPressed && d2 < circ2.r) {
        v2Drag = true;  

    } else if (mouseIsPressed && d3 < circ3.r) {
        v3Drag = true;  
    }
}

function mouseupHandler() {
    mouseIsPressed = false;
    v1Drag = false;
    v2Drag = false;
    v3Drag = false;
}

function mousemoveHandler(event) {
    // get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect();

    // Calc mouse coordinates using mouse event and canvas location info
    mouseX = event.clientX - cnvRect.left;
    mouseY = event.clientY - cnvRect.top;

    if (v1Drag === true) {
        vert1.x = mouseX;
        vert1.y = mouseY;
        circ1.x = mouseX;
        circ1.y = mouseY;
    }
    if (v2Drag === true) {
        vert2.x = mouseX;
        vert2.y = mouseY;
        circ2.x = mouseX;
        circ2.y = mouseY;
    }
    if (v3Drag === true) {
        vert3.x = mouseX;
        vert3.y = mouseY;
        circ3.x = mouseX;
        circ3.y = mouseY;
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