/*
import('./utils.js').then((module) => {
    coords = module.coords
    drawText = module.drawText
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












