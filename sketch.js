var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
 fixedRect =  createSprite(200, 200, 50, 80);
 movingRect = createSprite(400,200,80,30);
 gameObject1 = createSprite(100,100,50,50);
 gameObject2 = createSprite(200,100,50,50);
 gameObject3 = createSprite(300,100,50,50);
 gameObject4 = createSprite(400,100,50,50);

 gameObject1.shapeColor ="green";
 gameObject2.shapeColor ="green";
gameObject3.shapeColor="green";
gameObject4.shapeColor="green";
fixedRect.shapeColor="green";
 movingRect.shapeColor="green";
 fixedRect.debug=true;
 movingRect.debug=true;
}

function draw() {
  background(0);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY; 
  
  bounceOff(movingRect,gameObject2);
  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor="red";
    gameObject2.shapeColor="red";
  }
  else
    {
      movingRect.shapeColor="green";
      gameObject2.shapeColor="green";
    }
  
  drawSprites();
}

