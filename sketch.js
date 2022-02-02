const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var chao;
var cordaFruta;
var fruta;
var ligacaoFC;

var casa, melancia, coelhinho;

var coelho; 

var botaoRasgar;

function preload(){
  casa = loadImage("background.png");
  melancia = loadImage("melon.png");
  coelhinho = loadImage("Rabbit-01.png");
}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50)

  chao = new Chao(200,690,600,20);
  var opcao = {
  density:0.001
  }
  fruta = Bodies.circle(300,300,15,opcao);
  cordaFruta = new Rope(6,{x:245,y:30});

  coelho = createSprite(250,650,100,100);
  coelho.addImage(coelhinho);
  coelho.scale = 0.2;
  botaoRasgar = createImg("cut_button.png");
  botaoRasgar.position(220,30);
  botaoRasgar.size(50,50);
  botaoRasgar.mouseClicked(cair);



  Matter.Composite.add(cordaFruta.body,fruta);
  ligacaoFC = new ConecxaoFruta(cordaFruta,fruta);
}

function draw() 
{
  background(51);
  image(casa, width/2, height/2, 500, 700);

  Engine.update(engine);
   
  chao.mostrar();
  cordaFruta.show();
  image(melancia, fruta.position.x, fruta.position.y, 60, 60);

drawSprites();
}
function cair(){
  ligacaoFC.rasgarCorda();
  ligacaoFC = null;
 cordaFruta.break();
}




