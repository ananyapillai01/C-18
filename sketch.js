var backgrounds, backgroundImage;
var player, playering;
var ground, grounding;
var foodGroup, bananaImage;
var obstacleGroup, stoneImage;
var score;
var PLAY = 1;
var END = 0;
gameState = PLAY;

function preload() {
backgroundImage = loadImage("jungle.png");
playering = loadAnimation("Monkey_01.png, Monkey_02.png, Monkey_03.png, Monkey_04.png, Monkey_05.png, Monkey_06.png, Monkey_07.png, Monkey_08.png, Monkey_09.png, Monkey_10.png");
 
bananaImage = loadImage("banana.png");
stoneImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  backgrounds = createSprite(0, 0, 400, 400);
  backgrounds.addImage(backgroundImage);
  backgrounds.scale = 1.5;
  backgrounds.x = backgrounds.width / 2;
  backgrounds.velocityX = -3;
 
  player = creteSprite(100, 350, 20, 30);
  player.addAnimation(playering);
  player.scale = 0.5;
 
  ground = createSprite(100, 355, 400, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  ground.visible = false;
 
  foodGroup = new Group();
  stoneGroup = new Group();
 
  score = 0;
}

function draw() {
  background(220);
  if(keyDown("space")) {
  player.velocityY = -10;
  }
  player.velocityY = player.velocityY + 0.8
 
  if(ground.x < 0) {
    ground.x = ground.width / 2;
     }
  spawnFood();
  spawnStones();
  if(foodGroup.isTouching(player)){
    score = score + 2;
  }
  switch(score) {
      case 10: player.scale = 0.12;
              break;
      case 20: player.scale = 0.14;
              break;
      case 30: player.scale = 0.16;
              break;
      case 40: player.scale = 0.18;
              break;
      default: break;
    }
  if(stoneGroup.isTouching(player)){
    player.scale = 0.01;
  }
  player.collide(ground);
}
  function spawnFood() {
  if (frameCount % 300 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(70,130));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
   
    banana.lifetime = 200;
   
    foodGroup.add(banana);
  }
}

function spawnStones() {
  if(frameCount % 300 === 0) {
    var stone = createSprite(600,165,10,40);
    stone.velocityX = -4;
    stone.addImage(stoneImage);
    
               
    stone.scale = 0.5;
    stone.lifetime = 300;
    stoneGroup.add(stone);
  }
}
