
var fixedRect,movingRect;


function setup() {

  createCanvas(800,800);
  fixedRect = createSprite(400, 400, 50, 80);
  movingRect = createSprite(200,100,80,50);
  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "red"
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if ( movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
     && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 
     && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
     && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "yellow"
    movingRect.shapeColor = "blue"

  }
  else{
    fixedRect.shapeColor = "green"
    movingRect.shapeColor = "red"

  }


  drawSprites();
}