const Engine  = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies  = Matter.Bodies;

var backGroundImg,engine,world,snowBalls;

function preload()
{
 backGroundImg = loadImage("snow3.jpg");
}
function setup() {
  createCanvas(1200,600);
  createSprite(400, 200, 50, 50);

  engine  = Engine.create();
  world = engine.world;
  snowBalls = [];
}

function draw() 
{
  Engine.update(engine);
  background(backGroundImg);  
  drawSprites();
  spawnSnowBalls();
  for(var i =0 ; i<snowBalls.length ; i++)
  {
    snowBalls[i].display();
  }
  text (mouseX+","+mouseY,100,100);
}

function spawnSnowBalls()
{
  if(frameCount % 60 == 0)
  {
    snowBalls.push(new Snow(random(50,width-50),0));
  }
}