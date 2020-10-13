class Tile{
	constructor(x,y){
		this.x = x
		this.y = y
		this.width = 25
		this.height = 25
		
	}
	render(){
		fill("white")
		rect(this.x,this.y,this.width)
	}
}



class Player{
	constructor(x,y){
		this.x = x
		this.y = y
		this.width = 40
		this.height = 60
		this.gravSpeed = 0
		this.velX = 0
		this.friction = 0.6
		this.acceleration = 0.3

	}
	move(){



 
		if (keyIsDown(65)){		// left key
			this.velX -= this.acceleration
			if (this.velX > 0){		// friction
				this.velX -= this.friction
			} 
		}

		else if (keyIsDown(68)){ //right key
			this.velX += this.acceleration
			if (this.velX < 0){	   // friction
				this.velX += this.friction
			} 
		} 

		else { // idle movement
			if (this.velX > 0){ // friction 
				this.velX -= this.friction
			} 

			else if (this.velX < 0){ // friction
				this.velX += this.friction
			} 

			if (this.friction > this.velX && this.velX > -this.friction){
				this.velX = 0
			} // eventual stop
		}




		// check for collision
		if(!collideCheck(this,pixelArray,this.velX,0)){
			if (this.velX > 5){
				this.velX = 5
			}
			else if (this.velX < -5){
				this.velX = -5
			}
			this.x += this.velX
			print("notcollide")   // actual movement
		} else {            // if collide, teselate to body
			while (collideCheck(this,pixelArray,this.velX,0)){
				if (this.velX > 0){
					this.velX -= this.acceleration
				}
				else {
					this.velX += this.acceleration
				}
			}
			print("yescollide")
			this.x += this.velX
			this.velX = 0    // actual movement
		}

	   
		// gravity
		if (!collideCheck(this,pixelArray,0,this.gravSpeed)){ //collision check
			this.y += this.gravSpeed
			this.gravSpeed += 0.4 // increase acceleration
			if(this.gravSpeed>5){this.gravSpeed = 5}
			
		} else {
			while (collideCheck(this,pixelArray,0,this.gravSpeed)){
				this.gravSpeed -= 0.1
			}
			this.y += this.gravSpeed
			this.gravSpeed = 0
		}

	}
	display(){
		
		fill("white")
		rect(this.x,this.y,this.width,this.height)
	}
}