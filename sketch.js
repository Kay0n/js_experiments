var canvasHeight = 700
var canvasWidth = 600
var enemyArray = []


function setup(){
  createCanvas(canvasWidth,canvasHeight)
  player = new player()
}

function draw(){
  background("#4d4d4d")
  graphics()
  player.move()
  player.display()
  for (var i = 0;i < enemyArray.length;i++){
    enemyArray[i].move()
    enemyArray[i].display()
    if (enemyArray[i].death == true){
      enemyArray[i].splice(i,1)
    }
  }
}


function keyPressed(){
  if (keyCode == 65){player.lane -= 1}
  if (keyCode == 68){player.lane += 1}

  if (keyCode == 32){
    enemy = new wall()
    enemyArray.push(enemy)
    print(enemyArray.length)
  }
}


function graphics(){
  push()

  // lane lines
  stroke("#8f8f8f")
  strokeWeight(5) 
  line(200,0,200,canvasHeight)
  line(400,0,400,canvasHeight)
  
  // top box
  strokeWeight(4)
  stroke("black")
  fill("white")
  rect(0,0,600,50)


  pop()
}