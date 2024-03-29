var nParticles = 100;
var particles = [];
var particleSize = 40;
var maxCounter = 150;

//The function tells to provide a RANDOM direction when the dist is LESS than the radius.
function checkCollision() {
  for(var i=0; i<nParticles; i++) {
    for(var j=0; j<nParticles; i++) {
      if(i!=j) {
        var distance = p5.Vector.dist(
          particles[i].position,
          particles[j].position
        );
        if(distance < particleSize) {
          if(particles[i].counter == 0) {
            particles[i].direction.rotate(Math.random());
            particles[i].counter = maxCounter;
          }
          
          if(particles[j].counter == 0) {
            particles[j].direction.rotate(Math.random());
            particles[j].counter = maxCounter;
          }
        }
      }
    }
  }
}

function createParticle() {
  var particle = {};
  particle.position = createVector(
    Math.random() * width,
    Math.random() * height,
  );
  particle.direction = createVector(
    Math.random(),
    Math.random(),
  );
  particle.update = function() {
      this.position.add(this.direction);
      if(this. position.x > width || this.position.x < 0)
        this.position.x = width/2;
      if(this. position.y > height || this.position.y < 0)
        this.position.y = height/2;
        if(this.counter > 0)
        this.counter -= 1;
    }
    particle.counter = 0;
    return particle;
  }


function setup() {
  createCanvas(400,400);
  background(200); //0 = black; 255 = white; 
  stroke(0, 80);
  fill(0, 90);
  //Let's create the 100 particules
  
  for(var i=0; i<nParticles; i++)
    particles.push(createParticle());
  }

function draw() {
  background(255);
  checkCollision();
  for(var i=0; i<nParticles; i++) {
    particles[i].update();
    ellipse(  //This functions NEED AT LEAST 3 arguments!
      particles[i].position.x,
      particles[i].position.y,
      particleSize //Required
    );
  }
}