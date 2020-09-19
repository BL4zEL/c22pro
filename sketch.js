var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	rect1=createSprite(375,640,150,30);
	rect1.shapeColor=color(255,0,0);

	rect2=createSprite(315,580,30,150);
	rect2.shapeColor=color(255,0,0);

	rect3=createSprite(435,580,30,150);
	rect3.shapeColor=color(255,0,0);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	rect1 = Bodies.rectangle(400,630, 150, 40 , {isStatic:true} );
	 World.add(world, rect1);
	 
	 rect2 = Bodies.rectangle(315,580,30,150, {isStatic:true} );
	 World.add(world, rect2);
	 
	 rect3 = Bodies.rectangle(435,580,30,150, {isStatic:true} );
 	World.add(world, rect3);

	Engine.run(engine);
}


function draw() {
 Engine.update(engine);
  rectMode(CENTER);
  background(0);
  keyPressed();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}



