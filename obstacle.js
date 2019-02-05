function Obstacle(x,y,w,h){
    var options = {
        isStatic: true
    };
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.x= x;
    this.y = y;
    this.w = w;
    this.h = h;
    World.add(world, this.body);

    this.show = function(){
        push();
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255);
        fill(50);
        rect(this.x, this.y, this.w, this.h);
        pop();

    }
}