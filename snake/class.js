




class snakeBlock{
  constructor(x,y){
    this.x = x
    this.y = y
    this.timer = 0
    this.cycles = 0


  }
  display(){
    push()
    fill("red")
    strokeWeight(4)
    rect(this.x,this.y,30)
    pop()

  }
  checkLife(arrLength){
    
    if (millis() >= 350+this.timer) {
      this.timer = millis()
      this.cycles++
    }
    if (arrLength <= this.cycles) {
      return false
    } else {
      return true
    }
      
    
  }

}
































class mouseTracker{ //    args(radius,color)
    constructor(rad,color,mode="CORNER"){
      
      if (mode=="CENTER"){
        this.cent = rad/2
      } else{
        this.cent = 0
      }
      this.x = mouseX - this.cent
      this.y = mouseY - this.cent
      this.r = rad
      this.color = "red"
  
    }
    display(){
      fill(this.color)
      rect(this.x,this.y,this.r)
    }
    move(){
      this.x = mouseX - this.cent
      this.y = mouseY - this.cent
    }
      
  }




  class wasdTracker{
    constructor(spawnX,spawnY,size){
      this.x = spawnX
      this.y = spawnY
      this.size = size
      this.speed = 10

    }

    display(){
      ellipse(this.x,this.y,this.size)

    }

    move(){
      if (keyIsDown(16)){
        this.speed = 4
      } else{
        this.speed = 10
      }

      if (keyIsDown(87) & this.y > 0){ // W
        this.y -= this.speed
      }
      if (keyIsDown(83)){ // S
        this.y += this.speed             
      }
      if (keyIsDown(65) & this.x > 0){ // A
        this.x -= this.speed             
      }
      if (keyIsDown(68)){ // D
        this.x += this.speed             
      }

    }
    
  }