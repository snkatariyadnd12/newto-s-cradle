
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Body;
const Constraint = Matter.Constraint;

var roof
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var rope1,rope2,rope3,rope4,rope5

function preload(){
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,300,30);
	World.add(world,roof);

	bobObject1 = new bobObject(250,310);
	bobObject2 = new bobObject(300,320);
	bobObject3 = new bobObject(350,330);
	bobObject4 = new bobObject(400,340);
	bobObject5 = new bobObject(450,350);

	rope1 = new Rope(bobObject1.body,roof.body,-100);
	World.add(world,rope1);

	rope2 = new Rope(bobObject2.body,roof.body,-50,0);
	World.add(world,rope2);

	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	World.add(world,rope3);

	rope4 = new Rope(bobObject4.body,roof.body,+50,0);
	World.add(world,rope4);

	rope5 = new Rope(bobObject5.body,roof.body,+100,0);
	World.add(world,rope5);

    Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-1000,y:-50});
	}
}



