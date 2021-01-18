
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,600,50);

	bob1 = new Bob(400,500,100);
	bob2 = new Bob(500,500,100);
	bob3 = new Bob(600,500,100);
	bob4 = new Bob(300,500,100);
	bob5 = new Bob(200,500,100);
	rope1 = new Rope(bob1,roof,-200,0)


	Engine.run(engine);
  
}


function draw(){

  rectMode(CENTER);
  background(225);
  
  Engine.update(engine);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}



