var enemyArray = []
var enemyXArray = [3,203,403]
var speed = 5
var score = 0
var time = 0
var multiplier = 1
var gameState = 0 // 0:menu, 1:options, 2:game, 3:gameover, 4:test
var tempArray = []
var num = 0
var enemyPhase

function setup(){
  createCanvas(600,700)
  player = new player()
  playButton = rect(28,220,155,38)
}



function draw(){
  if (gameState == 0){menu()}
  else if (gameState == 2){game()}
  else if (gameState == 3){gameOver()}
  else if (gameState == 4){testing()}
}



function game(){

  // draws background
  gameBackground()

  // player movement and display
  player.move()
  player.display()

  // render and move enemy objects
  for (var i = 0;i < enemyArray.length;i++){
    enemyArray[i].move(speed)
    enemyArray[i].display()

    // splice enemy if out of canvas
    if (enemyArray[i].death == true){
      enemyArray.splice(i,1)
      continue
    }

    // check for collision with player
    if (collideRectCircle(enemyArray[i].x, enemyArray[i].y, enemyArray[i].width, enemyArray[i].height, player.x,player.y,player.radius)){
      if (enemyArray[i].phase != true){
        enemyArray = []
        gameState = 3
      }
    }
  }
  scoreBox()
  //score ticking
  score += multiplier
}



// main menu code
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

 
  


  
// game over state
function gameOver(){
  background("grey")
  push()
  textAlign(CENTER)
  rectMode(CENTER)
  textSize(60)
  fill("black")
  text("Game Over",300,100)
  pop()
}



// keypress detection
function keyPressed(){
  // player movement
  if (gameState == 2){ 
    if (keyCode == 65 && player.lane > 0){player.lane -= 1} // A
    if (keyCode == 68&& player.lane < 2){player.lane += 1} // D
  }

  // code for spawning of enemy objects
  if (keyCode == 32){

    // unlinks array objects
    tempArray = JSON.parse(JSON.stringify(enemyXArray))
    
    // rand number of enemys; loops through temp array to set position & phase
    enemyPhase = false
    for (var i = 0;i<=int(random(0,3));i++){
      if (tempArray.length == 1){
        enemyPhase = true
      }
      num = int(random(0,tempArray.length))
      enemy = new wall(tempArray[num],enemyPhase)
      enemyArray.push(enemy)
      tempArray.splice(num,1)
    }
  }
}


// background lanes and colors
function gameBackground(){
  push()
  background("#4d4d4d")
  // lane lines
  stroke("#8f8f8f")
  strokeWeight(5) 
  line(200,0,200,700)
  line(400,0,400,700)
  pop()
}







function scoreBox(){
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

  //dynamicly adjusts score to stay on screen
  var scoreX = score.toString().length * 10
  text("Score: "+score, 520-scoreX,32)
  pop()
}


//just for testing
function testing(){
}

// menu button click detection
function mouseClicked() {
  if (gameState == 0){
    if (collidePointRect(mouseX, mouseY, 28, 220, 155, 38)) {gameState = 2}
  }
}


