class ConecxaoFruta{
constructor(corpoA,corpoB){
 var ultimo = corpoA.body.bodies.length - 2; 
 this.ligacao = Constraint.create({
   bodyA:corpoA.body.bodies[ultimo],
   pointA:{x:0,y:0},
   bodyB:corpoB,
   pointB: {x:0,y:0},
   length: - 10,
   stiffness:0.01
 })
 World.add(engine.world,this.ligacao);
}
rasgarCorda(){
  World.remove(engine.world,this.ligacao);
    }
}