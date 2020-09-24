const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var bird,log1,log2,log3,log4;
function setup(){
    var canvas = createCanvas(1200,525);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,490,50,50);
    box2 = new Box(900,490,50,50);
    pig1 = new Pig(800,490);
    log1 = new Log(800,410,300,PI/2)
    ground = new Ground(600,515,1200,20)
    bird = new Bird(100,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    bird.display();
    log1.display();
}