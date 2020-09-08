


import('./utils.js').then((module) => {
    coords = module.coords
    drawText = module.drawText

});


function setup(){
    p = new player(150,400,650,80,550)
    createCanvas(800,800)
}


function keyPressed(){
    if (keyCode == 65){p.lane -= 1}
    if (keyCode == 68){p.lane += 1}
    print(p.lane)

}

function draw(){
    background("#4d4d4d")
    p.move()
    coords()
    p.display()
    


}