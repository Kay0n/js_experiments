/*
import('./utils.js').then((module) => {
    coords = module.coords
    drawText = module.drawText
    ellipseCollide = module.ellipseCollide
});
*/


export function drawText(string,x,y,size){   //use <color> to change color in string
    var pos_x = x
    var stringArray = string.split(/[<>]/);
    if (size != undefined){
        textSize(size)
    }
    
    for(var i=0; i<stringArray.length; i++){      
        if(i % 2 != 0){
            fill(stringArray[i])
        } else{
            text(stringArray[i], pos_x, y)
            pos_x += textWidth(stringArray[i])
        }
    }   
}

export function coords(){

    var bWidth = 50
    if (mouseX > 100){bWidth  += 10}
    if (mouseY > 100){bWidth  += 10}
    if (mouseX > 10){bWidth  += 10}
    if (mouseY > 10){bWidth  += 10}

    fill("black")
    rect(10,10,bWidth,20)
    fill("white")
    textSize(15)
    text(mouseX + "," + mouseY,25,25)

}


export function ellipseCollide(x1,y1,r1,x2,y2,r2){
    var distance = dist(x1,y1,x2,y2);
    if (distance < (r1 | r2)){
        return true
    } 
    else {
        return false
    }
    //do something
}





