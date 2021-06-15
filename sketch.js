var spaceship,spacemodule,spacemoduleimg,spacemoduleimg1,invi,button,random,randy,topinvi;
var backgroundimg;
var gamestate="PLAY"


function preload(){
bagro=loadImage("spacebg.jpg");
spaceimg=loadImage("iss.png");
spacemoduleimg=loadImage("spacecraft1.png")
spacemoduleimg1=loadAnimation("spacecraft1.png")
}
function setup() {
 
  
  createCanvas(1000,700);
  topinvi=createSprite(450,240,110,90)
  topinvi.visible=false;
  spaceship=createSprite(500, 270, 50, 50);
  spacemodule=createSprite(200,400,40,20);
  invi=createSprite(345,345,20,20);
  invi.visible=false;
  spacemodule.setCollider("rectangle",0,0,200,250)
  spaceship.setCollider("circle",0,0,70)
  rando=random(60,150);
  randy=random(100,200);
  console.log(random)
  spacemodule.x=rando;
  spacemodule.y=randy
}

function draw() {
  background(bagro);
  if(spacemodule.isTouching(invi)){
    gamestate="OVER"
  }
  if(spacemodule.isTouching(spaceship)|| spacemodule.isTouching(topinvi)){
    gamestate="CRASHED"
  }
  
  if (gamestate==="PLAY")  {
  
  spaceship.addImage("spa",spaceimg)
  spacemodule.addImage("mod",spacemoduleimg)
  spacemodule.scale=0.25
  
  if (keyDown("up")){
    spacemodule.y=spacemodule.y-5
    spacemodule.changeAnimation("mod",spacemoduleimg1);
  }
  if (keyDown("down")){
    spacemodule.y=spacemodule.y+5
  }
  if (keyDown("right")){
    spacemodule.x=spacemodule.x+5
  }
  if (keyDown("left")){
    spacemodule.x=spacemodule.x-5
  }
  


//spaceship.debug=true;
//invi.debug=true;
//spacemodule.debug=true;
  drawSprites();
}
if (gamestate==="OVER"){
  stroke ("green")
  strokeWeight(4)
  textSize(100);
  fill ("red")
  text("YOU WON",200,200);
 
}
if(gamestate==="CRASHED"){
  stroke ("green")
  strokeWeight(4)
  textSize(100);
  fill ("red")
  text("YOU CRASHED",200,200);
  
 
}
}