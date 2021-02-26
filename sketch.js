const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var w1,w2,w3,w4;
var start = 0;
var play = 1;
var bird,b2;
var c,c1,c2,c3,c4,c5,c6,c7;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  w1 = new Wall(5,400,20,800)
  w2 = new Wall(400,5,800,20)
  w3 = new Wall(795,400,20,800)
  w4 = new Wall(400,795,800,20)
  bird = new Bird(400,40,50)
  c = new Wall(10)

}
 
function draw() {
background("black")

Engine.update(engine);

w1.display()
w2.display()
w3.display()
w4.display()
bird.display()

  drawSprites()
}


function keyPressed() {
  if (keyCode === RIGHT_ARROW) {

  Matter.Body.applyForce(bird.body,bird.body.position,{x:40,y:-100});

  }
  if (keyCode === LEFT_ARROW) {

    Matter.Body.applyForce(bird.body,bird.body.position,{x:-40,y:-100});
  
    }
}
