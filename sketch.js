const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var particles = [];
var plinkos = []; 
var divisions =[];
var divisionHeight=300;

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,800);
  ground = new Ground(400,height,1200,20);
  for (var k = 0; k <=800; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight)); 
    }

    for (var j = 75; j <=width; j=j+50) { 
      plinkos.push(new Plinko(j,75));
     }
     for (var j = 50; j <=width-10; j=j+50) { 
      plinkos.push(new Plinko(j,175));
     }
     for (var j = 75; j <=width; j=j+50) { 
      plinkos.push(new Plinko(j,275));
     }
     for (var j = 50; j <=width-10; j=j+50) { 
      plinkos.push(new Plinko(j,375));
     }
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  for (var k = 0; k <plinkos.length; k = k + 1) {
    plinkos[k].display(); 
   }
  for (var k = 0; k <divisions.length; k = k + 1) {
    divisions[k].display(); 
   }
   if(frameCount%60===0){ 
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    //  score++;
     }
     for (var k = 0; k <particles.length; k = k + 1) {
      particles[k].display(); 
     }
}