let ball;


function setup() {
  createCanvas(200, 200); 
  ball = new Walker();
}


function draw() {
  background(220, 5);
  ball.move();
  ball.show();
}