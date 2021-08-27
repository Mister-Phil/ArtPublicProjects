//keep it empty to start the points
var points = []
var mult = 0.005;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
 
  
  var density = 10; //for the x of points per row.
  var space = width / density; //The space between them

  for (var x = 0; x < width; x += space) { //will create ALL starting points with the loop
    for (var y = 0; x < height; y += space) {
        var p = createVector(x, y);
        points.push(p)
    }
  }
}

function draw() {
    noStroke()
    fill(255)

    for (var i = 0; i < point.length; i++) {
      
      var angle = map(noise(points[i].x * mult, points[i].y * mult),
      o, 1, 0, 720) //the angle of the points

      //THe vector of each points based on the angle.
      points[i].add(createVector(cos(angle), sin(angle)))
    
      ellipse(points[i].x, points[i].y, 1)
  }    
}