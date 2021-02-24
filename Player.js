class Player{
    constructor(x,y,r,angle){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("images/Bomb1.png");
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,0, 0, 50, 50);
        pop();
    }
}