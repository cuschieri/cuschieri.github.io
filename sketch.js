function setup() {
  createCanvas(800, 800);
  background(220);
  fill(40);
  noStroke();
}

function draw() { 
    if (mouseIsPressed && (mouseButton==LEFT)) {
      fill(mouseX/2,mouseY/2,255);
      ellipse(mouseX,mouseY,mouseX/5,mouseY/5);
      
    } 
  }

