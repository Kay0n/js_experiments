var enemyArray = []
var enemyXArray = [-3,197,397]
var speed = 5
var score = 0
var gameTime = 0
var multiplier = 1
var gameState = 0 // 0:menu, 1:options, 2:game, 3:gameover, 4:pause
var tempArray = []
var num = 0
var enemyPhase
var highScore
var deathFadeAlpha = 0
var prevState = 0

function setup(){
  createCanvas(600,750)
  player = new player()
  playButton = rect(28,220,155,38)
}

function executeStateSwitch(){
  if (gameState != prevState && prevState != 4){
    if (gameState == 0){
    }
    else if (gameState == 1){
    }
    else if (gameState == 2){
      gameTime = 1
      score = 0
      speed = 5
      multiplier = 1
    }
    else if (gameState == 3){
    }
    else if (gameState == 4){
      fill(10,10,10,100)
      rect(0,0,width,height)
    }
  }
  prevState = gameState
}


function draw(){
  if (gameState == 0){menu()}
  else if (gameState == 2){game()}
  else if (gameState == 3){gameOver()}
}

// give up
var urlVar = false
function url(){
  if (urlVar == false){
    urlVar = true
    window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
}

function game(){
  //one bar at all times
  if (enemyArray.length == 0){
    createEnemy()
  }
  // draws background lanes
  push()
  background("#2b2b2b")
  stroke("#595959")
  strokeWeight(6) 
  line(width/3,0,width/3,height)
  line((width/3)*2,0,(width/3)*2,height)
  pop()

  // player movement and display methods
  player.move()
  player.display()

  powerExecute()

  // render and move enemy objects
  for (var i = 0;i < enemyArray.length;i++){
    enemyArray[i].move(speed)
    enemyArray[i].display()

    // splice enemy if out of canvas
    if (enemyArray[i].death == true){
      enemyArray.splice(i,1)
      i -= 1
      continue
    }

    // check for collision with player; end game
    if (collideRectCircle(enemyArray[i].x, enemyArray[i].y, enemyArray[i].width, enemyArray[i].height, player.x,player.y,player.radius)){
      if (enemyArray[i].phase != player.phase){
        enemyArray = []
        deathFadeAlpha = 0  
        gameState = 3
        executeStateSwitch()
      }
    }
  }
  scoreBox()
  //ticking
  speed += 1/800
  score += multiplier
  gameTime += 1
}






// main menu code
function menu(){
  background(10,10,10)

  playButton = textBG("Play Game",30,250,"white","#444444",30,4)
  optionsButton = textBG("Options",30,300,"white","#444444",30,4)

}
 



// game over state

function gameOver(){
  if (deathFadeAlpha < 255){
    deathFadeAlpha += 1
    fill(10,10,10,deathFadeAlpha)
    rect(0,0,width,height)
  }else{
    background(10,10,10)
  }
  fill("white")
  textAlign(CENTER)
  textSize(80)
  text("Game Over",300,100)
  textSize(30)
  text("Score: " + score, 300,140)
  
  menuButton = textBG("Main Menu",300,250,"white","#444444",30,4)
  replayButton = textBG("Play Again",300,300,"white","#444444",30,4)
  textAlign(LEFT)
} 















// keypress detection
function keyPressed(){
  // player movement and pause
  if (gameState == 4){
    if (keyCode == 27){
      gameState = 2
      executeStateSwitch()
    }

  }


  else if (gameState == 2){ 
    if (keyCode == 27){
      gameState = 4
      executeStateSwitch()
    }
    if (keyCode == 65 && player.lane > 0){setTimeout(eval,reactTime,"player.lane -= 1")} // A
    if (keyCode == 68 && player.lane < 2){setTimeout(eval,reactTime,"player.lane += 1")} // D
    if (keyCode == 32|| keyCode == 87 || keyCode == 83){ //phase keys [space,w,s]
      if(player.phase == "red"){
        player.phase = "blue"
      } else{
        player.phase = "red"
      }
    }
  }
  
}





var activePower = 0
var reactTime = 0


function powerExecute(){
  // spawns a new powerup every 10 seconds
  if (gameTime % 1000 == 0){
    powerRoll = int(random(1,3))
    activePower = new powerUp(powerRoll)
    print("powerup Spanwed")
  }
  // executes if a powerup exists
  if (activePower != 0){
    print("tick")

    //moves and displays powerup
    activePower.display()
    activePower.move(speed)
    // removes if below canvas
    if (activePower.death == true){
      activePower = 0
      print("death")
    }
    // if player collides with powerup, remove and run effect
    else if (collideCircleCircle(activePower.x, activePower.y, activePower.radius, player.x,player.y,player.radius)){
        print("collected")
        print(activePower.type)
        switch (activePower.type){
          case 1: // reaction powerdown
            reactTime = 200
            setTimeout(eval,8000,"reactTime = 0")
          case 2: // speed slow down
            speed = speed/1.5
          case 3: // multiplier
            multiplier += 1

        }
        activePower = 0
    }
  }

}














function createEnemy(){
  // unlinks array objects
  tempArray = JSON.parse(JSON.stringify(enemyXArray))
  
  // set phase
  enemyPhase = "#9c9c9c"
  if (gameTime > 3000){tempNum = int(random(0,3))}else{tempNum = int(random(0,2))}
  
  // rand number of enemys; loops through temp array to set position & phase
  for (var i = 0;i<=tempNum;i++){
    if (tempArray.length == 1){
      if (int(random(0,2)) == 0){
        enemyPhase = "red"
      }
        else{
        enemyPhase = "blue"
      }
    }
    num = int(random(0,tempArray.length))
    enemy = new wall(tempArray[num],enemyPhase)
    enemyArray.push(enemy)
    tempArray.splice(num,1)
  }
}
 

// game score box
function scoreBox(){
  // top box
  push()
  strokeWeight(4)
  stroke("black")
  fill("white")
  rect(0,0,width,50)

  //score
  strokeWeight(1)
  textSize(20)
  fill("black")

  //dynamicly adjusts score to stay on screen
  var scoreX = score.toString().length * 10
  text("Score: "+score, 520-scoreX,32)
  pop()
}


// just for testing
function testing(){
  

}

// 3D text button function
function textBG(string,x,y,color1,color2,size,buffer){
  textSize(size)
  // checks to see if mouse is over text; draws seccond text behind to give 3d effect
  var collide = false
  if(collidePointRect(mouseX,mouseY,x,y-size,textWidth(string),size)){
    fill(color2)
    text(string,x+buffer,y+buffer)
    collide = true
  }
  fill(color1)
  text(string,x,y)
  //returns true if mouse is over text, can be used for mouseClick events
  return collide
}

// menu button click detection
function mouseClicked() {
  if (gameState == 0){
    if (playButton) {gameState = 2}
    else if (optionsButton) {gameState = 1}
  }
  else if (gameState == 3){
    if (replayButton) {gameState = 2}
    else if (menuButton) {gameState = 0}
  }
  executeStateSwitch()
}
