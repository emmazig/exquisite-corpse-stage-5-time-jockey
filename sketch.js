
let light = [];
let light2 = [];



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}




function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10)


  for(s = 0; s < 1000; s++){
    let x = mouseX;
    let y = mouseY
    light[s] = new Sun (x, y);
  }
  for(s = 0; s < 100; s++){
    let x = mouseX;
    let y = mouseY
    light2[s] = new Sun2 (x, y);
  }
}

function draw() {
  background(2, 15, 2);

 

  for(x = 0; x < light.length; x++){
    light[x].grow();
    light[x].show();
  }
  for(x = 0; x < light2.length; x++){
    light2[x].grow();
    light2[x].show();
  }
 

  
}

class Sun{

  constructor(x, y){
    this.x  = windowWidth/2
    this.y  = windowHeight/2
  }

  grow(){
    this.x += random(-3, 3)
    this.y += random(-3, 3)
  }

  show(){
    strokeWeight(10);
    stroke(234, 237, 145,100)
    point(this.x,this.y );
  }

}

class Sun2{

  constructor(x, y){
    this.x  = windowWidth/2
    this.y  = windowHeight/2
  }

  grow(){
    this.x += random(-3, 3)
    this.y += random(-3, 3)
  }

  show(){
    strokeWeight(10);
    stroke(255,100)
    point(this.x,this.y);
  }

}