var bullet,wall;
var speed,weight,thickness;



function setup() {
  createCanvas(1600,400);
  
  speed = random(223,251);
  weight = random(39,52);
  thickness = random(22,83);
  
  bullet = createSprite(50, 200, 50, 20);
  wall = createSprite(900,200,thickness,height/2);
}

function draw() {
  
  background(0);  
  
  console.log(speed);
  console.log(weight);
  bullet.velocityX = speed;
  wall.shapeColor = color(80,80,80);
  
  if(wall.x - bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
  if(damage > 10){
    wall.shapeColor = color(255,0,0);
  }
  if(damage < 10){
    wall.shapeColor = color(0,255,0);
  }
  }
  drawSprites();
}