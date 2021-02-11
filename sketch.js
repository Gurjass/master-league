var PLAY = 1;
var END = 0;
var gameState = PLAY;

var score=0;

var gameOver, restart;

var invisibleGround;

var maskCount=0;
var faceshieldCount=0;

function preload(){
manAnimation = loadAnimation("images/1.png","images/2.png","images/3.png");
backgroundImage = loadImage("images/hospital.jpg");
maskImage = loadImage("images/vaccine.jpg");
faceshieldImage = loadImage("images/faceshield.jpg");
}
function setup() {
  createCanvas(1200,400);
  background1 = createSprite(600,200,1200,400)
  background1.addImage(backgroundImage)
  background1.scale=1.3;
  background1.velocityX=-5;

  ground=createSprite(600,390,1200,20)
  ground.visible=false;

  man = createSprite(200, 300, 50, 50);
  man.addAnimation("running",manAnimation);
  man.scale=0.3;

  maskGroup=new Group();
  faceshieldGroup=new Group();

  

  
}

  
function draw() { 
  background("black")
  if(background1.x<0){
    background1.x=1000;
  }
  if(keyDown("space")&&man.y>300){ 
    man.velocityY=-15;
  }
  man.velocityY=man.velocityY+0.8;
  man.collide(ground)
  if(man.isTouching(maskGroup)) {
    maskCount = maskCount+1;
    maskGroup.destroyEach()
  }
  if(man.isTouching(faceshieldGroup)) {
    faceshieldCount = faceshieldCount+1;
    faceshieldGroup.destroyEach()
  }
  spawnMask();
  spawnFaceshield();
  drawSprites();
  textSize(20);
  fill("red"); 
  text("mask="+maskCount,1100,100)
  fill("red"); 
  text("faceshield="+faceshieldCount,1100,100)
}
  function spawnMask() {
    if(frameCount%200==0) {
     // console.log("hi")
      mask=createSprite(1200,250,40,40)
      mask.addImage(maskImage);
      mask.scale=4;
      mask.velocityX = -10;
      mask.scale=0.2
      maskGroup.add(mask);
    }
  }
  function spawnFaceshield() {
    if(frameCount%400==0) {
     // console.log("hi")
      faceshield=createSprite(1000,400,100,100)
      faceshield.addImage(faceshieldImage);
      faceshield.scale=2;
      faceshield.velocityX = -10;
      faceshield.scale=0.2
      faceshieldGroup.add(faceshield);
    }
  }