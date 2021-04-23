
var catcher;
var score= 0;
var tomatoimage,watermelonimage;
var icecreamimage,burgerimage;
var veggie,junky;
var veggieGroup,junkyGroup;
var gameState = "play"

function preload(){

  tomatoimage = loadImage("tomato.png");
  icecreamimage = loadImage("icecream.jpg");
  burgerimage = loadImage("burger.jpeg");
  watermelonimage = loadImage("watermelon.jpg");


}
function setup() {
  createCanvas(1200,1200);

   catcher = createSprite(400, 600, 50, 50);
  veggieGroup = new Group()
  junkyGroup = new Group()
   
}

function draw() {
  background(0,0,0);
  if(gameState==="play"){




  
catcher.x = mouseX;
catcher.y = mouseY;

//logic for increasing and decreasing score

/*for(var i=0;i<veggieGroup.maxDepth();i=i+1){
  var veggieSprite=veggieGroup.get(i);
  if(veggieSprite!=null&&catcher.isTouching(veggieSprite)){
    veggieSprite.destroy();
    score=score+5;
    
  }
}
for(var i=0;i<junkyGroup.maxDepth();i=i+1){
  var veggieSprite=junkyGroup.get(i);
  if(veggieSprite!=null&&catcher.isTouching(veggieSprite)){
    veggieSprite.destroy();
    score=score-5;
    
  }
}*/
if(score<0){

  gameState= "end"
}
Spawnveggies();
Spawnjunk();
  }
if(gameState=== "end"){
  text("gameover",600,600)
  catcher.destroy()
  veggieGroup.destroyEach()
    junkyGroup.destroyEach()
  
}
textSize(25);
text("SCORE :"+ score,700,120)
  drawSprites();
}
function Spawnveggies(){
  if(frameCount%40===0){
  veggie = createSprite(random(20,1100),10,50,50)
var r = Math.round(random(1,2))

 if(r===1){
   veggie.addImage(watermelonimage);
 
 } else if(r===2){
  veggie.addImage(tomatoimage);
}
veggie.scale = 0.1;
veggie.velocityY = 5;
veggie.lifetime = 240;
veggieGroup.add(veggie);

  }

}
function Spawnjunk(){
  if(frameCount%40===0){
  junky = createSprite(random(20,1100),10,50,50)
var r = Math.round(random(1,2))

 if(r===1){
   junky.addImage(icecreamimage);
 
 } 
  if(r===2){
  junky.addImage(burgerimage);
}
junky.scale = 0.1;
junky.velocityY = 5;
junkyGroup.add(junky)
  }

}
