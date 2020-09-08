
class player{
    constructor(){
        this.lane = 2
        this.radius = 60
        this.laneList = [100,300,500]
        this.y = 700
    }
    move(){
        // keeps lanes between 1 and 3
        if (this.lane > 3){this.lane = 3}
        else if (this.lane < 1){this.lane = 1}

        // sets x-coord based off lane array
        this.x = this.laneList[this.lane-1]
    }
    display(){
        fill("black")
        ellipse(this.x,this.y,this.radius)

    }
}



/*
class wall{
    constructor(speed){
        this.lane = random(1,3)
        this.width = 10
        this.x = (this.lane*200) - 200
        this.speed = speed
        this.y = 0
    }
    move(){
        this.y += 1
        if (this.y >= 700 - this.width){

        }
    }
}
*/