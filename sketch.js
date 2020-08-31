var fixedRect, movingRect;
var OB1,OB2,OB3,OB4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "purple";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  OB1 = createSprite(100,100,50,50);
  OB1.shapeColor = "red";
  OB2 = createSprite(400,100,50,50);
  OB2.shapeColor = "orange";
  OB3 = createSprite(200,100,50,50);
  OB3.shapeColor = "yellow";
  OB4 = createSprite(600,100,50,50);
  OB4.shapeColor = "blue";
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  OB1.velocityX = 5;
  OB2.velocityX = -5;
  OB3.velocityX = 5;
  OB4.velocityX = -5;
}

function draw() {
  background(0,0,0);  
bounceOff(OB1,OB2);
bounceOff(movingRect,fixedRect);

if (isTouching(OB3,OB4)) {
   OB3.shapeColor = "white";
   OB4.shapeColor = "white";
}
else {
  OB3.shapeColor = "yellow";
  OB4.shapeColor = "blue";
}

  
  drawSprites();
}

