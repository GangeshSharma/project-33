var Bodies = Matter.Bodies;
var Engine = Matter.Engine;
var World = Matter.World;
var engine , world;
var bg;
var snow;
function preload(){
bg = loadImage("snow2.jpg") 
}





function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create()
  world = engine.world
  snow = new Snow()
}

function draw() {
  background(bg);
  Engine.update(engine)
  if(frameCount%60==0){
    snow = new Snow()
  }
   snow.display()
}