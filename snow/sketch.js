var position = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < 300; i++){
    position.push({x : Math.random() * width, y : Math.random() * height});
  }
}

function draw() {
  background(15);

  for(var i = 0; i < position.length; i++){
    position[i].x = position[i].x + Math.random()*8 - 4;
    position[i].y = position[i].y + Math.random()*8;

    if(position[i].y > height) position[i].y = 0;

    stroke(255);
    fill(255);
    ellipse(position[i].x, position[i].y, 10);
  }
}