

var pixelArray = []



function setup(){
  createCanvas(500,500)
  player = new Player(100,100)
  
}

function draw(){
  background("grey")

  for(var i = 0;i<pixelArray.length;i++){
    pixelArray[i].render()
  }
  player.move()
  player.display()

  
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

function collideCheck(obj1,obj2,xD,yD){
  obj1X = obj1.x + xD
  obj1Y = obj1.y + yD
  return collideRectRect(obj1X,obj1Y,obj1.width,obj1.height,obj2.x,obj2.y,obj2.width,obj2.height)
}