
class player{
    constructor(){
        this.lane = 1
        this.radius = 60
        this.laneList = [100,300,500]
        this.y = 600
        this.x = 0
    }
    move(){
        // sets x-coord based off lane array
        this.x = this.laneList[this.lane]

    }
    display(){
        fill("black")
        ellipse(this.x,this.y,this.radius)
    }
}





class wall{
    constructor(x,phase){
        this.group
        this.lane = int(random(0,3))
        this.width = 193
        this.height = 30
        this.x = x
        this.y = 0
        this.phase = phase
        this.death = false
    }
    display(){
        strokeWeight(4)
        fill("red")
        if (this.phase == true){
            fill("blue")
        }
        rect(this.x,this.y,this.width,this.height)

    }
    move(speed){
        this.y += speed
        if (this.y > 700){
            this.death = true

        }
    }
}

