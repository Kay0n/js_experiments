





function setup() {
  createCanvas(753,753);
  
}





var timer = 0
var bodyArray = []

function draw() {

  
  keyPressed()
  if (millis() >= 350 + timer) { //
    
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
    




    for (var i = 0;i < bodyArray.length;i++){  //
      bodyArray[i].display()
      if (bodyArray[i].checkLife(bodyArray.length) == false) {
        bodyArray.splice(i,1)
          
          
      }
    
    }
    dot()


    
  }
}
  

    





var snakeX = 32
var snakeY = 32
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



var dotX;
var dotY;
var dotExists = false;
var coordSet = false;


function dot(){
  print(dotExists)
  if (dotExists == false){
    
    dotExists = true;
    
  
      
    coordSet = false
    
    while (coordSet == false){
      
      dotX = int(random(1,25))
      
      dotY = int(random(1,25))

      for(var i = 0;i < bodyArray.length;i++){
        
        if (bodyArray[i].x != xy(dotX) && bodyArray[i].y != xy(dotY)){
          coordSet = true
          
          break
        }
    
      }
      print("xyCheck")
    }
    
  
  } 
  else{
    print("rectCheck")
    fill("green")
    strokeWeight(4)
    rect(xy(dotX),xy(dotY),30)
  }

}

function xy(coord){
  return coord*30 

}




