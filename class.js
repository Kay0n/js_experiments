
class player{
    constructor(){
        this.lane = 1
        this.radius = 60
        this.laneList = [100,300,500]
        this.y = 600
    }
    move(){
        // keeps lanes between 1 and 3
        if (this.lane > 2){this.lane = 2}
        else if (this.lane < 0){this.lane = 0}

        // sets x-coord based off lane array
        this.x = this.laneList[this.lane]
    }
    display(){
        fill("black")
        ellipse(this.x,this.y,this.radius)

    }
}
class wall{
    constructor(){
        this.lane = random(0,2)
        this.width = 100
        this.height = 10
        this.x = (this.lane*200)
        this.y = 0
        this.death = false
    }
    display(){
        fill("red")
        rect(this.x,this.y,this.width,this.height)
    }
    move(speed){
        this.y += speed
        if (this.y > 700){
            this.death = true

        }
    }
}
