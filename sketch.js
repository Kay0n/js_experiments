

var pixelArray = []



function setup(){
  createCanvas(500,500)
  player = new Player(100,0)
  
}

function draw(){
  background("grey")

  for(var i = 0;i<pixelArray.length;i++){
    pixelArray[i].render()
  }
  player.move()
  player.display()
  if(player.y > height){
    player.y = 0
  }
  
}


function mouseClicked(){
  var mX = floor(mouseX/25) * 25
  var mY = floor(mouseY/25) * 25
  var check = false
  for(var i = 0;i<pixelArray.length;i++){
    if (pixelArray[i].x == mX && pixelArray[i].y == mY){
      check = true
    }
  }
  if (check == false){
    pixel = new Tile(mX,mY)
    pixelArray.push(pixel)
  }
}






function collideCheck(obj1,array,xD,yD){
  var obj1X = obj1.x + xD
  var obj1Y = obj1.y + yD
  for(var i = 0;i<array.length;i++){
    if(collideRectRect(obj1X,obj1Y,obj1.width,obj1.height,array[i].x,array[i].y,array[i].width,array[i].height)){
      return true
    }
  }
  return false
}






