const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var w1,w2,w3,w4;
var start = 0;
var play = 1;
var bird;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  w1 = new Wall(5,400,20,800)
  w2 = new Wall(400,5,800,20)
  w3 = new Wall(795,400,20,800)
  w4 = new Wall(400,795,800,20)
  bird = new Bird(40,40,50)
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
