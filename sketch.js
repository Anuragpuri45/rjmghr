var ship,shiprunning,ground2,ground;
function preload(){
  shiprunning = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  ground2 = loadImage("sea.png")
}

function setup(){
  createCanvas(600,600);
  ground = createSprite(200,290,200,10)
  ground.addImage('rain' , ground2);
  ground.scale=0.5
  ship = createSprite(200,400,50,50);
  ship.scale=0.2;
   ship.addAnimation("running", shiprunning);

}

function draw() {
  background("white");
if(ground.x<0){
ground.x=400
}
ground.velocityX=-3;


  drawSprites();
}