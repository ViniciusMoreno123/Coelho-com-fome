class Chao {
    constructor(x,y,l,a){
        var opcoes ={
            isStatic: true
        }

        this.corpo = Bodies.rectangle(x,y,l,a, opcoes);
        this.l = l;
        this.a = a;
        World.add(world, this.corpo);
    }
    mostrar(){
        var pos = this.corpo.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill(148,127,146);
        rect(pos.x, pos.y, this.l, this.a);
        pop();
    }
}