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

var pisca, matandoFome;

var coelhinhoTriste

function preload(){
  casa = loadImage("background.png");
  melancia = loadImage("melon.png");
  coelhinho = loadImage("Rabbit-01.png");
  pisca = loadAnimation("blink_1.png", "blink_2.png", "blink_3.png");
  matandoFome = loadAnimation("eat_0.png","eat_1.png","eat_2.png","eat_3.png","eat_4.png");
  coelhinhoTriste = loadAnimation("sad_1.png","sad_2.png","sad_3.png");

  pisca.playing = true;
  matandoFome.looping = false;
  matandoFome.playing = true;
}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  pisca.frameDelay = 20;
  matandoFome.frameDelay = 20;
 
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

  coelho = createSprite(250,630,100,100);
  coelho.addImage(coelhinho);
  coelho.scale = 0.2;
  coelho.addAnimation("piscando", pisca);
  coelho.addAnimation("comendo", matandoFome);
  coelho.addAnimation("tristeza",coelhinhoTriste);
  coelho.changeAnimation("piscando");
  
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
  if(fruta!= null ){
    image(melancia, fruta.position.x, fruta.position.y, 60, 60);
  }
  if(colissao(fruta,coelho)=== true){
    coelho.changeAnimation("comendo");
  }
 if(colissao(fruta,chao.body)=== true){
   coelho.changeAnimation("tristeza");
 }

  

drawSprites();
}
function cair(){
  ligacaoFC.rasgarCorda();
  ligacaoFC = null;
 cordaFruta.break();
}
function colissao(body,sprite){
  if(body!= null ){
    var colissaocorpo = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
    if(colissaocorpo <= 80){
      World.remove(engine.world,fruta);
      fruta = null;
      return true;
    }else{
return false;
    }
    
  }
}




