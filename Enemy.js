class Enemy{
    constructor(x,y,r,angle){
        var options={
            isStatic:false
        }
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("images/enemy.png");
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        rotate(angle);
        ellipseMode(RADIUS);
        translate(this.body.position.x, this.body.position.y); imageMode(CENTER);
        image(this.image,0, 0, 50, 50);
        pop();

        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(200,300), y:random(50,80)});
        }
    }
}