class mouseTracker{
    constructor(){
      this.x = mouseX
      this.y = mouseY
      this.r = 50
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