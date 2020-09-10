var canvasHeight = 700
var canvasWidth = 600
var enemyArray = []
var speed = 5
var score = 0
var time = 0
var multiplier = 1
var gameState = 0 // 0:menu, 1:options, 2:game, 3:gameover  
var selectedOption = 0

function setup(){
  createCanvas(canvasWidth,canvasHeight)
  player = new player()
}



function draw(){
  if (gameState == 0){
    menu()
  }
  else if (gameState == 2){
    game()
  }
}



function game(){
  // draws background
  gameBackground()

  // player movement and display
  player.move()
  player.display()
  
  //render and move enemy objects
  for (var i = 0;i < enemyArray.length;i++){
    enemyArray[i].move(speed)
    enemyArray[i].display()
    if (enemyArray[i].death == true){
      enemyArray.splice(i,1)
      continue
    }
    if (collideRectCircle(enemyArray[i].x, enemyArray[i].y, enemyArray[i].width, enemyArray[i].height, player.x,player.y,player.radius)){
      score = 0
      player.lane = 1
      enemyArray = []
    }
  }

  // draws score box
  displayBox()

  //score ticking
  score += multiplier
}




function menu(){
  background("#888888")

  // select box highliting
  fill("white")
  if (collidePointRect(mouseX, mouseY, 28, 220, 155, 38)) {fill("white")}
  else{fill("#888888")}
  rect(28,220,155,38)

  if (collidePointRect(mouseX, mouseY, 28, 271, 112, 38)){fill("white")}
  else{fill("#888888")}
  rect(28,271,112,38)

  // menu text
  strokeWeight(1)
  textSize(30)
  fill("black")
  text("Play Game",30,250)
  text("Options",30,300)
    
  
  }

 
  
  function mouseClicked() {
    if (gameState == 0){
      if (collidePointRect(mouseX, mouseY, 28, 220, 155, 38)) {gameState = 2}
    }
  }
  
  




// movement detection
function keyPressed(){
  if (gameState == 0){
    if (keyCode == 87 | keyCode == 83){
      if (selectedOption == 1){selectedOption = 0}
      else{selectedOption = 1}
    }
  }
  else if (gameState == 2){
    if (keyCode == 65 && player.lane > 0){player.lane -= 1} // A
    if (keyCode == 68&& player.lane < 2){player.lane += 1} // D
  }
  

  if (keyCode == 32){
    enemy = new wall()
    enemyArray.push(enemy)
  }
}



function gameBackground(){
  push()
  background("#4d4d4d")
  // lane lines
  stroke("#8f8f8f")
  strokeWeight(5) 
  line(200,0,200,canvasHeight)
  line(400,0,400,canvasHeight)
  pop()
}






function displayBox(){
  // top box
  push()
  strokeWeight(4)
  stroke("black")
  fill("white")
  rect(0,0,600,50)

  //score
  strokeWeight(1)
  textSize(20)
  fill("black")
  var scoreX = score.toString().length * 10
  text("Score: "+score, 520-scoreX,32)
  pop()
}