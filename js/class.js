


class mouseTracker{
    constructor(rad){
      this.x = mouseX
      this.y = mouseY
      this.r = rad
      this.color = "red"
  
    }
    display(){
      fill(this.color)
      ellipse(this.x,this.y,this.r)
    }
    move(){
      this.x = mouseX
      this.y = mouseY
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