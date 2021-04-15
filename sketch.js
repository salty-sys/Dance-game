var fairy, fairy_running, fairy_collided;

var score=0

var ground, invisibleGround, groundImage;



var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,
obstacle6

var newImage;

function preload(){
  fairy_running = loadAnimation("Fairy MC Idle.png","Fairy MC Suceed.png");
  fairy_collided = loadAnimation("Fairy MC lose life.png");
  
  groundImage = loadImage("cartoon-fantasy-candy-land-location-vector-9653098.jpg");
  
  
  obstacle1=loadImage("mushroom.jpg");
  obstacle2=loadImage("unnamed.png");
  obstacle3=loadImage("mushroom.jpg");
  obstacle4=loadImage("unnamed.png");
  obstacle5=loadImage("mushroom.jpg");
  obstacle6=loadImage("unnamed.png");
}


function setup() {
  createCanvas(600, 200);

  fairy = createSprite(50,160,20,50);
  fairy.addAnimation("running", fairy_running);
  // fairy.addAnimation("collided",fairy_collided)
  fairy.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  text("Score:"+score,500,50)
  score=score+Math.round(frameCount/60)
  if(keyDown("space")&& fairy.y >= 100) {
    fairy.velocityY = -10;
  }
  
  fairy.velocityY = fairy.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  fairy.collide(invisibleGround);
  
  
    
    
}
function spawnObstacles(){
if (frameCount % 60 === 0) {
    obstacle = createSprite(550,165,10,40);
obstacle.velocityX=-6;
  var rand= Math.round(random(1,6));
  
switch(rand) {
  case 1:obstacle.addImage(obstacle1); 
        break;
  case 2:obstacle.addImage(obstacle2); 
        break;
  case 3:obstacle.addImage(obstacle3); 
        break;
  case 4:obstacle.addImage(obstacle4);
        break;
  case 5:obstacle.addImage(obstacle5); 
        break;
  case 6:obstacle.addImage(obstacle6); 
        break;
  default: break       
}
obstacle.scale=0.5

obstacle.lifetime=100
}
}
  