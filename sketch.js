
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const Render = Matter.Render;
var ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  createSprite(400, 200, 50, 50);
  ground = new Ground(400,height,400,25);
  Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  ground.display();
  
}