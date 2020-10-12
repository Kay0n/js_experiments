class Tile{
    constructor(x,y){
        this.x = x
        this.y = y
        this.size = 25

    }
    render(){
        fill("white")
        rect(this.x,this.y,this.size)
    }
}



class Player{
    constructor(x,y){
        this.x = x
        this.y = y
        this.width = 40
        this.height = 60
        this.speed = 8

    }
    move(){
        if (keyIsDown(68)){this.x += this.speed}
        if (keyIsDown(65)){this.x -= this.speed}
    }
    display(){
        
        fill("white")
        rect(this.x,this.y,this.width,this.height)
    }
}