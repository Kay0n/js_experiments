
function setup() {
  createCanvas(753,753); 
}


var score = 0
var timer = 0
var bodyArray = []

function draw() {
  keyPressed()
  if (millis() >= 350 + timer) { 
    fill("grey")
    rect(0,0,753)
    if (snakeDirection == "UP"){
      snakeY -= xy(1)
    } else if (snakeDirection == "DOWN"){
      snakeY += xy(1)
    } else if (snakeDirection == "LEFT"){
      snakeX -= xy(1)
    } else if (snakeDirection == "RIGHT"){
      snakeX += xy(1)
    }
    body = new snakeBlock(snakeX,snakeY)
    bodyArray.push(body)
    timer = millis()
    eat()
    dot() //must be here
    
    for (var i = 0;i < bodyArray.length;i++){  
      bodyArray[i].display()
      if (bodyArray[i].checkLife(bodyArray.length) == false) {
        bodyArray.splice(i,1)  
      }
    } 
    
    


  }
}
  









var dotX;
var dotY;
var dotExists = false;
var coordSet = false;


function dot(){
  
  if (dotExists == false){   
    dotExists = true;
    coordSet = false
    while (coordSet == false){ 
      dotX = int(random(1,25)) 
      dotY = int(random(1,25))
      
      for(var i = 0;i <= bodyArray.length;i++){   
        if (bodyArray[i].x != xy(dotX) && bodyArray[i].y != xy(dotY)){
          coordSet = true
          
          break
        }
      }
    }
  } 
  else{
    
    fill("green")
    
    rect(xy(dotX),xy(dotY),30)

  }
}




var snakeX = 30
var snakeY = 30
var snakeDirection = "DOWN"
function keyPressed(){
  if (keyCode === 87){ // W
    snakeDirection = "UP"
  }
  if (keyCode === 83){ // S
    snakeDirection = "DOWN"         
  }
  if (keyCode === 65){ // A
    snakeDirection = "LEFT"             
  }
  if (keyCode === 68){ // D
    snakeDirection = "RIGHT"           
  }
}




function xy(coord){
  return coord*30 
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


var headX = 0
var headY = 0

function eat(){
  print(bodyArray.length)
  headX = bodyArray[bodyArray.length - 1].x
  headY = bodyArray[bodyArray.length -1 ].y
  print("eatCheck")
  if (xy(dotX) == headX && xy(dotY) == headY){
    print("collect")
    dotExists = false
    score += 1
    for(var i=0;i < bodyArray.length;i++){
      bodyArray[i].cycles = bodyArray[i].cycles - 1
    }

    
  }
  
}