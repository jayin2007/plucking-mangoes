
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;

	var boy = createSprite(200,200,50,50)

	boy.image = loadImage("Plucking mangoes/boy.png")

	//Create the Bodies Here.


  Engine.run(engine);
  
  mango1 = new mango(750,260,70,70);
  mango2 = new mango(700,410,70,70);
  mango3 = new mango(650,230,70,70);
  mango4 = new mango(600,310,70,70);
  mango5 = new mango(550,260,70,70);

  stone1 = new stone(200,200,70,70);

  tree1 = new tree(750,100,70,70);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  
  drawSprites();
 
}



