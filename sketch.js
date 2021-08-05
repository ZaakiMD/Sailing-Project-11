//adding variables
var ship;
var sea;
var seaimage;
var sailing;
var edges;

//load animations and images
function preload(){
  
  sailing=loadAnimation("ship-1.png","ship-2.png");
  seaimage=loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);

  //creating sea sprite
  sea=createSprite(200,180,400,20);
  sea.addImage("image",seaimage);

  //creating ship sprite
  ship=createSprite(260,280,20,50);
  ship.addAnimation("sail",sailing);
  ship.scale=0.2;
 
  edges=createEdgeSprites();
}

function draw() {
  background("blue");
 
  //making the sea move left
  sea.velocityX=3;

  //infinte scrolling effect
  if(sea.x<0){
    sea.x=sea.width/2;
  }

  drawSprites();
}