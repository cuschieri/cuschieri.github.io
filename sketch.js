let current_colour;
    
function setup() {
  createCanvas(windowWidth, windowHeight);
  current_colour = color(200,0,0);
  background(0);
  noStroke();
  fill(255,255,255);
  textFont('Courier New');
  textSize(12);
  text('Left button to draw.\nRight click to clear.',windowWidth/32,windowHeight/16);
  document.oncontextmenu = function() {
    return false;
}
}

function draw() {
 
  fill(current_colour);
  let mouseSpeed = abs(sqrt((mouseX - pmouseX)*(mouseX - pmouseX)+(mouseY - pmouseY)*(mouseY - pmouseY)));
  if (mouseIsPressed) {
    ellipse(mouseX,mouseY,abs(50-5*mouseSpeed));
    if (mouseButton === RIGHT) {
      background(0);
    noStroke();
    fill(255,255,255);
    textFont('Courier New');
    textSize(12);
    text('Left button to draw.\nRight click to clear.',windowWidth/32,windowHeight/16);
    }
  }
}



/*
function mouseReleased(){
  current_colour = color(200,0,0);
} */