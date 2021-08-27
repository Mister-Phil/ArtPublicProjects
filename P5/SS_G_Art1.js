//Change those values to see a different result.
var a=-1.4, b=-2.1, c=2.8, d=-2.5;
var x=1, y=1; 

function setup() {
  //frameRate(150);
  createCanvas(500,500);
  stroke(150, 50, 20, 50); //Here the 4th value is Alpha for  a 3D effect. *So use it to change color. 
  }

/*
1.To see anything you need that function. 
2. THe default frame is called 60x/sec.*/
function draw() {
  for(var i=0;i<1000;i++){
  var oldX = x;
  var oldY = y;
  x = sin(a * oldY) - cos(b * oldX);
  y = sin(c * oldX) - cos(b * oldY);;
  var scaledX = map(x, -2, 2, 0, width);
  var scaledY = map(y, -2, 2, 0, height);
  point(scaledX, scaledY);
  }
}
  