


var img;
function preload() {
  img = loadImage('jpg.jpg');
}


function setup() {
  createCanvas(500,500)
  fill("grey")
  rect(0,0,500)

  image(img, 10, 10, 100, 100);

}




function draw(){

}