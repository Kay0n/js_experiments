function setup(){
  createCanvas(600,800)
  player = new player()
}

function draw(){
  background("#4d4d4d")
  graphics()
  player.move()
  player.display()

  
  
}




function keyPressed(){
  if (keyCode == 65){player.lane -= 1}
  if (keyCode == 68){player.lane += 1}
  print(player.lane)

}


function graphics(){
  push()

  // lane lines
  stroke("#8f8f8f")
  strokeWeight(5) 
  line(200,0,200,800)
  line(400,0,400,800)
  
  // top box
  strokeWeight(4)
  stroke("black")
  fill("white")
  rect(0,0,600,50)


  pop()
}