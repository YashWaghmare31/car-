function setup() {
  createCanvas(800,400);
  car=createSprite(200, 200, 50, 50);
  car.shapeColor="red"
  wall=createSprite(750,200,30,150);
  wall.shapeColor="red"
  car.velocityX=3;

}

function draw() {
  background(255,255,255);  
  
/* if(isTouching(car,wall)){
  //msquare.shapeColor="green"
  wall.shapeColor="green"
 }
 else{
  //msquare.shapeColor="red"
  wall.shapeColor="red"
 }*/
 bounceoff(car,wall);

  drawSprites();
}







