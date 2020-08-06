


import('./utils.js').then((module) => {
    coords = module.coords
    drawText = module.drawText
    collideCheck = module.collideCheck
    
});



function preload(){

}



function setup() {
  createCanvas(640, 480);
  ball = new mouseTracker()

}



function draw() {
    fill("grey")
    rect(0,0,640, 480)
    coords()
    drawText("<red>R<orange>A<yellow>I<green>N<blue>B<purple>O<black  >W",20,100,60)
    if (collideCheck(ball.x,ball.y,ball.r,100,300,50)){
      fill("black")
    } 
    else {
      fill("white")
    }

    ellipse(100,300,50)
    ball.move()
    ball.display()  

}

