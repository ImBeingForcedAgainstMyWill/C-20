var a,b;
function setup() {
  createCanvas(800,400);
  a= createSprite(400, 200, 50, 50);
  b= createSprite(200, 200, 50, 50);
  a.shapeColor = "green";
  b.shapeColor = "green";
}

function draw() {
  background(255,255,255);
  a.x = mouseX;
  a.y = mouseY;  
  if (a.x-b.x<48 && b.x-a.x<48 && a.y-b.y<48 && b.y-a.y<48){
    a.shapeColor = "red";
  b.shapeColor = "red";
  }
else {
  a.shapeColor = "green";
  b.shapeColor = "green";
}
  drawSprites();
}