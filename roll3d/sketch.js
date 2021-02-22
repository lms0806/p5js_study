function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);//바탕 검은색
  noFill();//도형색 x
  stroke(255, 0, 0);
  rotateX(frameCount * 0.01);//x축 회전
  rotateY(frameCount * 0.01);//y축 회전
  //프로그램이 실행되면 count++;
  box(200, 200, 200);//3D 박스

  stroke(255, 255, 255);
  sphere(300);
}
