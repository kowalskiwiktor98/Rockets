function Rocket(x,y,w,h){
    var options = {
        friction: 0.1,
        restitution: 0.6
      };
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    var mid;
    World.add(world, this.body);

    this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255);
        fill(127);
        rect(0, 0, this.w, this.h);
        //line(0, 0, 0, 50);
        ellipse(0,50, 5,);
        mid = pos;
        pop();
    };

    this.thrust = function(){
        var vector = { x: 0, y: -0.005 };
        Matter.Vector.rotate(vector,this.body.angle,vector);
        Matter.Body.applyForce(this.body, this.body.position, vector);
        console.log(rocket.body.position);
    }
}