
class player{
    constructor(){
        this.lane = 1
        this.radius = 60
        this.laneList = [100,300,500]
        this.y = height - 100
        this.x = 0
        this.phase = "white"
    }
    move(){
        // sets x-coord based off lane array
        this.x = this.laneList[this.lane]
    }

    display(){
        fill("black")
        stroke("grey")
        strokeWeight(2)
        ellipse(this.x,this.y,this.radius)
        strokeWeight(0)
        fill(this.phase)
        ellipse(this.x,this.y,this.radius/3)
    }
}





class wall{
    constructor(x,phase){
        this.group
        this.lane = int(random(0,3))
        this.width = (width/3)+6
        this.height = 30
        this.x = x
        this.y = 0
        this.phase = phase
        this.death = false
    }

    display(){
        strokeWeight(0)
        fill(this.phase)
        rect(this.x,this.y,this.width,this.height)
    }

    move(speed){
        this.y += speed
        if (this.y > height){
            this.death = true

        }
    }
}



class powerUp{
    constructor(roll){
        this.radius = 60
        this.type = roll
        this.laneList = [100,300,500]
        this.x = this.laneList[int(random(0,2))]
        this.y = 0
        this.death = false
    }
    display(){
        fill("white")
        ellipse(this.x,this.y,this.radius)
    }
    move(speed){
        this.y += speed
        if (this.y > height){
            this.death = true

        }
    }
}