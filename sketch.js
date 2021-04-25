var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor='green';
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor='green';
  car1=createSprite(800,500,80,30);
  car1.shapeColor='red';
  car2=createSprite(650,500,80,30);
  car2.shapeColor='red';
  car3=createSprite(400,500,80,30);
  car3.shapeColor='red';
  car4=createSprite(250,500,80,30);
  car4.shapeColor='red';
}

function draw() {
  background(0,0,0);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(movingRect,car1)){
   movingRect.shapeColor='red';
   car1.shapeColor='red';
  }
  else {
  movingRect.shapeColor='green';
  car1.shapeColor='green';
  }
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2 &&
    object1.y-object2.y<object2.height/2+object1.height/2&&
    object2.y-object1.y<object2.height/2+object1.height/2){
      return true}
    else{
      return false
    }
    
}