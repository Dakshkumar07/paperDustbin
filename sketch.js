
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var box1,box2,box3;


function setup() {
	createCanvas(1000, 800);
	
	engine = Engine.create();
	world = engine.world;
	
ground = new Ground(600,650,1200,20);
paper = new Paper(200,100,40);

box1 = new Box(700,590,20,70);
box2 = new Box(900,590,20,70);
box3 = new Box(800,590,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  keyPressed();
 
}
function keyPressed(){
if(keyCode === UP_ARROW) {

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

}


}


