let current_colour;
    
function setup() {
  createCanvas(windowWidth, windowHeight);
  current_colour = color(200,0,0);
  background(0);
  noStroke();
}

function draw() {
  fill(current_colour);
  let mouseSpeed = abs(sqrt((mouseX - pmouseX)*(mouseX - pmouseX)+(mouseY - pmouseY)*(mouseY - pmouseY)));
  if (mouseIsPressed) {
    ellipse(mouseX,mouseY,abs(50-5*mouseSpeed));
    if (mouseButton === RIGHT) {
      background(0);
    }
  }
}



/*
function mouseReleased(){
  current_colour = color(200,0,0);
} */