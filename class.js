
class player{
    constructor(){
        this.lane = 1
        this.radius = 60
        this.laneList = [100,300,500]
        this.y = height - 100
        this.x = 0
        this.phase = "white"
        this.reinforce = false
    }
    move(){
        // sets x-coord based off lane array
        this.x = this.laneList[this.lane]
    }

    display(){
        fill("black")
        stroke("grey")
        if(this.reinforce == true){
            stroke("cyan")
        }
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
    constructor(roll,lane){
        this.radius = 30
        this.type = roll
        if (roll < 6){
            this.border = "gold"
        } else {this.border = "red"}
        this.laneList = [100,300,500]
        this.x = lane + 100
        this.y = 25
        this.death = false
    }
    display(){
        strokeWeight(1)
        stroke(this.border)
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