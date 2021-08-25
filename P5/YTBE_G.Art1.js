//Let's set the var for the colors.
let r = 1;
let g = 1;
let b = 1;

//Let's CHANGE the position of the objects
let vp = 1; //Horiz. pos.
let hp = 1; //Vert. pos.

function setup() {
  createCanvas(400, 600);
  background(220);
  frameRate(15);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  
  
//This will let the colors change automatically - for rect. 
  r = random(150, 255);
  g = random(0, 100);
  b = random(0, 100);
  fill(r,g,b);
  rect(25 * hp,25 * vp,50,50);
  
//This will let the colors change automatically - for cicle.
  r = random(0, 100);
  g = random(0, 100);
  b = random(150, 255);
  fill(r,g,b);
  circle(25 * hp,25 * vp,42);

  //Here we create the potision changes pattern.
  hp = hp + 2;
  if(hp > 16){
  vp = vp + 2;
  hp = 1;
  };
}