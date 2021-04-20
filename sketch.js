const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constaints = Matter.Constaints;

var engine,world
var bird,base
var blocks;
var base;
var striker;

function preload(){

}

function setup(){
    canvas=createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    background(100)
    blocks=new Blocks(20,20,40,40)
    striker=new Striker(20,20,100,200)
    base= new Base(20,20,20,20);

}

function draw(){
    Engine.update(engine);


    



    
    blocks.display();
    base.display();
    


}
