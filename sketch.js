// Daniel Shiffman
// Matter.js + p5.js Examples
// This example is based on examples from: http://brm.io/matter-js/


var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Composite = Matter.Composite;

var engine;

var boxA;
var boxB;
var ground;

function setup() {
  createCanvas(800, 600);

  // create an engine
  engine = Engine.create();

  // create two boxes and a ground
  boxA = Bodies.rectangle(400, 200, 80, 80);
  boxB = Bodies.rectangle(450, 50, 80, 80);
	ground = Bodies.rectangle(400, 610, 810, 60, {isStatic: true});
	circle = Bodies.circle(450, 100, 30);


  // add all of the bodies to the world
  World.add(engine.world, [boxA, boxB, ground, circle]);

  // run the engine
  Engine.run(engine);
}






function draw() {

	background(51);
	fill("red")
	renderRect(boxA.vertices)
	renderRect(boxB.vertices)
	renderRect(ground.vertices)
	renderCircle(circle)
}


function renderRect(obj){
	beginShape();
  for (var i = 0; i < obj.length; i++) {
    vertex(obj[i].x, obj[i].y);
  }
  endShape();

}

function renderCircle(obj){
	ellipse(obj.position.x, obj.position.y, obj.circleRadius * 2);
}

