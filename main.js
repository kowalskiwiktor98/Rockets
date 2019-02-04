var height = 800, width = 800;
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
var engine;
var rocket;
var isLeft, isRight, isUp, isDown;//bool

function setup() {
    var canvas = createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    rocket = new Rocket(200, 300, 40, 100);
    var options = {
        isStatic: true
    };
    ground = Bodies.rectangle(0, height-10, width, 10, options);
    wallRight = Bodies.rectangle(width-10, height, 10, height, options);
    wallLeft = Bodies.rectangle(0, height, 10, height, options);
    wallTop = Bodies.rectangle(height-10, 0, width, 10, options);
    World.add(world, ground);

    
    Matter.Body.setMass(rocket.body,5)
}

function draw() {
    //console.log("X = " + mouseX + ", Y = " + mouseY);
    background(150);
    Engine.update(engine);
    rocket.show();
    keyCheck();
    noStroke(255);
    fill(170);
    rectMode(CENTER);
    //console.log(rocket.body.position);
    ellipse(rocket.body.position.x, rocket.body.position.y, 5,);
    //vectors
    line(rocket.body.position.x, rocket.body.position.y, rocket.body.force.x, rocket.body.force.y)
}

function keyCheck() {
    //console.log(key);
    if (isUp) thrust();
    if (isDown);//dunno
    if (isLeft) steerLeft();
    if (isRight) steerRight();
}

function thrust() {
    Matter.Body.applyForce(rocket.body, rocket.body.position, { x: 0, y: -0.01 });
    console.log(rocket.body.position);
}
function steerLeft(){
    Matter.Body.setAngularVelocity(rocket.body,rocket.body.angularVelocity - 0.001);
}
function steerRight(){
    Matter.Body.setAngularVelocity(rocket.body,rocket.body.angularVelocity + 0.001);
}

function mouseClicked() {
    console.log(mouseX + " - " + mouseY)
    //rocket.body.angle = 0;
    //rocket.body.velocity = { x: 0, y: 0 };
    //rocket.body.force = { x: 0, y: 0 };
    //rocket.body.position = { x: mouseX, y: mouseY };
    //Matter.Body.applyForce(rocket.body, rocket.body.position, {x: mouseX,y:mouseY});
}

function keyPressed() {
    setMove(keyCode, true);
}
   
function keyReleased() {
    setMove(keyCode, false);
}

function setMove(key,b) {
    switch (key) {
    case UP_ARROW:
      return isUp = b;
   
    case DOWN_ARROW:
      return isDown = b;
   
    case LEFT_ARROW:
      return isLeft = b;
   
    case RIGHT_ARROW:
      return isRight = b;
   
    default:
      return b;
    }
  }