function preload(){


}


function setup() {

  createCanvas(900, 900);
  fill("grey")
  rect(0,0,900,900)
  
}


function draw() {
    fill("black")
    drawtext("<blue>Hello world!",20,140,140)

}






function drawtext(string,size,x,y){
    var pos_x = x
    var stringColor = string.split(/[<>]/);
    print(stringColor)
    textSize(size)

    for(var i=0; i<=stringColor.length; i++){        
        if(i % 2 != 0){
            print(stringColor[i])

            var string_text = stringColor[i+1]
            var string_color = stringColor[i]
            var string_width = textWidth(string_text)

            fill(string_color)
            text(string_text, pos_x, y)
            pos_x += string_width
        } 
        else if (i == 0){
            text(stringColor[i], x, y)
            pos_x += textWidth(stringColor[i])
        }
     
    } 
        
}