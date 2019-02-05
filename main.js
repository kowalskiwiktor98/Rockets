//var height = 800, width = 800;
var Engine = Matter.Engine,
Render = Matter.Render,
World = Matter.World,
Bodies = Matter.Bodies;
var engine;
var rocket;
var isLeft, isRight, isUp, isDown;//bool

function setup() {
    rectMode(CENTER);
    var canvas = createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    rocket = new Rocket(200, 300, 40, 100);
    ground = new Obstacle(400,800,800,10);
    lWall = new Obstacle(0,400,10,800);
    rWall = new Obstacle(800,400,10,800);
    celing = new Obstacle(400,0,800,10);
    Matter.Body.setMass(rocket.body,2)
}

function draw() {
    background(150);
    Engine.update(engine);
    //show
    rocket.show();
    celing.show();
    ground.show();
    lWall.show();
    rWall.show();

    keyCheck();
    noStroke(255);
    fill(170);
    rectMode(CENTER);
    //console.log(rocket.body.position);
    ellipse(rocket.body.position.x, rocket.body.position.y, 5,);
    push();
    rotate(rocket.body.angle);
    line(rocket.body.position.x,rocket.body.position.y,rocket.body.position.x,rocket.body.position.y+50);
    pop();
    //ellipse(rocket.body.position.x, rocket.body.position.y+50, 5,);
    //vectors
}

function keyCheck() {
    //console.log(key);
    if (isUp) rocket.thrust();
    if (isDown) console.log(rocket.body.position);//dunno
    if (isLeft) steerLeft();
    if (isRight) steerRight();
    //if (key=='r') rocket.body.position = {x:200, y:300};
}

function thrust() {
    
}
function steerLeft(){
    Matter.Body.setAngularVelocity(rocket.body,rocket.body.angularVelocity - 0.001);
    console.log(rocket.body.angle);
}
function steerRight(){
    Matter.Body.setAngularVelocity(rocket.body,rocket.body.angularVelocity + 0.001);
    console.log(rocket.body.angle);
}

function mouseClicked() {
    console.log(mouseX + " - " + mouseY)
}
//Key press handling
//#region 
function keyPressed() {setMove(keyCode, true);}
function keyReleased() {setMove(keyCode, false);}
function setMove(key, b) {
    switch (key) {
        case UP_ARROW: return isUp = b;
        case DOWN_ARROW: return isDown = b;
        case LEFT_ARROW: return isLeft = b;
        case RIGHT_ARROW: return isRight = b;
        default: return b;
    }
}
//#endregion
