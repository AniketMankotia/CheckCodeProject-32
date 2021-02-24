const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxEnemy = 1;
var player;
var enemy = [];
var slingShot;
var backgroundImg;
var bg;
var score = 0;
var SoundLoop;

function preload(){
  getBackground();
  SoundLoop = loadSound("Sounds/sounds.wav");
}

function setup() {
  createCanvas(400,600);
  SoundLoop.loop();
  engine = Engine.create();
  world = engine.world;

  player = new Player(200,505,50);

  enemy = new Enemy(random(100,300),100,40);

  slingShot = new SlingShot(player.body,{x:200,y:450});
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
    }

  Engine.update(engine); 

  
  player.display();

  enemy.display();
  
  slingShot.display();

  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(player.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(player.body);
  }
}

async function  getBackground() {
  var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responsejSON= await response.json();
  var Datetime= responsejSON.datetime;
  var hour= Datetime.slice(11,13);
  console.log(hour);
  if(hour >= 09 && hour <= 18){
      bg = "images/bg.png";
  }
  else {
      bg = "images/bg2.jpg";
  }
  backgroundImg = loadImage(bg);
}
