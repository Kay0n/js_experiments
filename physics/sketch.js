
const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint, Composite } = Matter;
var worldObjects;

var boxA;
var boxB;
var scaleFactor = 1
var transX = 0
var transY = 0







function setup() {
  canvas = createCanvas(800, 600);

  // create an engine
  engine = Engine.create();
  Engine.run(engine);
  worldObjects = Composite.allBodies(engine.world)





  // create two boxes and ground
  boxA = addRect(400, 200, 80, 80);
  boxB = addRect(450, 50, 80, 80);
  ground = addRect(400, 610, 20810, 60, {
    isStatic: true
  });
  player = new Player(200,400) 
  spring = new SlingShot(200,380,player.self)
  spring.attach(player.self)
  MC = new MatterMouse()


  /* Mouse Constraints
  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse,
    collisionFilter : {
      mask: 0x0002
    }
  };
  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(engine.world, mConstraint);

  */

  
}



function addRect(x,y,width,height,properties){
  var body = Matter.Bodies.rectangle(x,y,width,height,properties)
  body.show = function(){
    var vertices = body.vertices;
    beginShape();
    for (var i = 0; i < vertices.length; i++) {
      vertex(vertices[i].x, vertices[i].y);
    }
    endShape();
  }
  World.add(engine.world, body)
  return body
}


function addCircle(x,y,radius,properties){
  var body = Matter.Bodies.circle(x,y,radius,properties)
  body.show = function(){
    ellipse(body.position.x,body.position.y,body.circleRadius*2)
  }
  World.add(engine.world, body)
  return body
}


function renderAll(){
  
}

// Using p5 to render
function draw() {
  background(51);
  scale(scaleFactor)
  translate(transX, transY);

  
  fill("white")
  ground.show()
  boxA.show()
  boxB.show()


  fill("green")
  spring.show()
  fill("red")
  player.render()
  


}

function explode(body, force = 0.02){
  if (!body.isStatic) {
    var forceMagnitude = force * body.mass;

    body.applyForce(body, body.position, { 
        x: (forceMagnitude + Common.random() * forceMagnitude) * Common.choose([1, -1]), 
        y: -forceMagnitude + Common.random() * -forceMagnitude
  });
}
}


function mouseReleased(){

  setTimeout(() => {
    spring.detach()
  }, 100)
  player.self.collisionFilter.category = 0x0001
  
}



function screenMove(axis,dir){
  if (axis == "y"){
    transY += 8 * dir
  }
  else{
    transX += 8 * dir
  }
  
}


function keyPressed(){ // up
  if (keyCode == 32){
    
    Matter.Body.setVelocity(player.self, {
      x: player.self.velocity.x, 
      y: player.self.velocity.y - 11
    })
  }
  if (keyCode == 187){
    scaleFactor += 0.02
  }
  if (keyCode == 189){
    scaleFactor -= 0.02
  }
  if (keyCode == 37){
    screenMove("x",1)
  }
  if (keyCode == 39){
    screenMove("x",-1)
  }
  if (keyCode == 38){
    screenMove("y",1)
  }
  if (keyCode == 40){
    screenMove("y",-1)
  }
}

