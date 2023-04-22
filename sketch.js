function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}
var rb = 'red';
var br = 0;
function draw() {
  background(br);
  if((mouseX >= width/2-50 && mouseX <= width/2+50) || (mouseY >= height/2+50&&mouseY <= height/2-50)){
    fill(0, 0, 255, 100);
    rb = 'blue';
  }
  else{
    fill(255, 0, 0, 100);
    rb ='red'
  }
  
  rect(width/2, height/2, 100, 100);
  ellipse(width/2, height/2, 30, 100);
  ellipse(width/2, height/2, 100, 30)
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
function mousePressed(){
  if(rb == 'blue'){
    if(br==0){
      br = 255;
    }
    else{
      br = 0;
    }
  }
}