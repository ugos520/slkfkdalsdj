
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var monkey,ground,bgroup,ogroup
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
bgroup=createGroup();
ogroup=createGroup();
  
  
}


function draw() {
  background("lightgreen")
  
 if(keyDown("space")&& monkey.y >= 314) {
    
   monkey.velocityY = -12;
    }
   monkey.velocityY = monkey.velocityY + 0.5
  
  monkey.collide(ground)
 console.log(monkey.y);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  score = score + Math.round(getFrameRate()/60);
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score:"+score,500,50);
  
  stroke("black")
  textSize(20)
  fill("balck")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivaltime:"+survivalTime,100,50)
  
      
    
  obstacle();
  food();
  
  drawSprites()
}

function food(){
  if(frameCount%80===0){
 var bana=createSprite(400,1,20,20)
    bana.y= Math.round(random(120,200))
  bana.addImage(bananaImage)
  bana.velocityX=-12;
  bana.scale = 0.1;
  bana.lifetime = 300;
bgroup.add(bana)
  }
}

function obstacle(){
  if(frameCount%130===0){
    var obsta=createSprite(400,318,20,20)
  obsta.addImage(obstacleImage)
  obsta.velocityX=-12;
  obsta.scale=0.15;
  obsta.lifetime=300;
  ogroup.add(obsta)
}
}






