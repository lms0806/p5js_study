var position = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < 300; i++){
    position.push({x : Math.random() * width, y : Math.random() * height});
  }
}

function draw() {
  background(0);

  for(var i = 0; i < position.length; i++){
    position[i].y = position[i].y + Math.random()*4;

    if(position[i].y > height) position[i].y = 0;

    stroke(255);
    fill(255);
    ellipse(position[i].x, position[i].y, 10);
  }
}
