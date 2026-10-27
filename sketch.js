let ball;


function setup() {
  createCanvas(300, 600); 
  ball = new Walker();
}


function draw() {
  background(220, 5);
  ball.move();
  ball.show();
}