
class player{
    constructor(l1,l2,l3,w,y){
        this.lane = 2
        this.width = w
        this.l1 = l1
        this.l2 = l2
        this.l3 = l3
        this.y = y-this.width/2
    }
    move(){
        if (this.lane < 1){this.lane = 1}
        if (this.lane == 1){this.x = this.l1 - this.width/2}
        if (this.lane == 2){this.x = this.l2 - this.width/2}
        if (this.lane == 3){this.x = this.l3 - this.width/2}
        if (this.lane > 3){this.lane = 3}

    }
    display(){
        fill("black")
        rect(this.x,this.y,this.width)

    }
}
x
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
