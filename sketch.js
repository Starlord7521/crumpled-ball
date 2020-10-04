
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	sphere = new Ball(700, 90, 85)
	rect1 = new box (600, 320, 50, 50);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  rect1.display();
 
}
function applyforce(){
	if(keyPressed(UP_ARROW)){
	Matter.Body.applyforce(sphereObject.body, sphereObject.body.position,{x:85, y:-85})	
	}
}


