var enemyArray = []
var enemyXArray = [3,203,403]
var speed = 5
var score = 0
var time = 0
var multiplier = 1
var gameState = 0 // 0:menu, 1:options, 2:game, 3:gameover, 4:test
var tempArray = []

function setup(){
  createCanvas(600,700)
  player = new player()
  playButton = rect(28,220,155,38)
  font = loadFont('./Fira.ttf');


}


function buttonAdd(x,y,w,h){
  fill(color)
  obj = rect(x,y,w,h);


  // Attach a callback function called overpara to the p element's mouseOver event
  fill(obj.mouseOver(isSlelected(true)))

  // Attach a callback function called outpara to the p element's mouseOut event
  fill(obj.mouseOut(isSlelected(false)))
}

function isSelected(bool){

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

  
  //render and move enemy objects
  for (var i = 0;i < enemyArray.length;i++){
    enemyArray[i].move(speed)
    enemyArray[i].display()
    if (enemyArray[i].death == true){
      enemyArray.splice(i,1)
      continue
    }
    if (collideRectCircle(enemyArray[i].x, enemyArray[i].y, enemyArray[i].width, enemyArray[i].height, player.x,player.y,player.radius)){
      if (enemyArray[i].phase == true){

      }else{
        enemyArray = []
        gameState = 3
      }
      
    }
  }
  // draws score box
  scoreBox()
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


    var group = int(random(0,3))
    print(group)
    tempArray = JSON.parse(JSON.stringify(enemyXArray))
    var enemyPhase = false

    for (var i = 0;i<=group;i++){
      if (tempArray.length == 1){
        enemyPhase = true
      }

      var num = int(random(0,tempArray.length))
      
    
      enemy = new wall(tempArray[num],enemyPhase)
      enemyArray.push(enemy)
      tempArray.splice(num,1)
    }
  }
}



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


var testArray = [100,300,500]
var temp = []
function testing(){
  temp = JSON.parse(JSON.stringify(testArray));
  
  temp.splice(0,1)
  print("temp - " + temp)
  print("testarray - " + testArray)
  

}


function mouseClicked() {
  if (gameState == 0){
    if (collidePointRect(mouseX, mouseY, 28, 220, 155, 38)) {gameState = 2}
  }
}


