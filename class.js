class Tile{
	constructor(x,y){
		this.x = x
		this.y = y
		this.width = 25
		this.height = 25
		this.canMove = false
		
	}
	render(){
		fill("white")
		rect(this.x,this.y,this.width)
	}
}



