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

    if ((mouseX, mouseY) == (vert1.x, vert1.y)) {
        console.log("detect1")
    }  

    else if ((mouseX, mouseY) == (vert2.x, vert2.y)) {
        console.log("detect2")
    }  

    else if ((mouseX, mouseY) == (vert3.x, vert3.y)) {
        console.log("detect3")
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

    requestAnimationFrame(drawshapes);
}