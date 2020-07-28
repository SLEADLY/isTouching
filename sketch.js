var fixedRect,movingRect


function setup() {
  createCanvas(800,800);
 fixedRect = createSprite(400, 200, 50, 50);
movingRect = createSprite (400,400,50,50);

fixedRect.shapeColor = "blue"
  movingRect.shapeColor = "red"  


}

function draw() {
  background(0);
  
movingRect.y=mouseY;
movingRect.x=mouseX;

if (movingRect.x - fixedRect.x < fixedRect.width/ 2 + movingRect.width/2
 &&fixedRect.x - movingRect.x < fixedRect.width/ 2 + movingRect.width/2
  && movingRect.y - fixedRect.x < fixedRect.height/ 2 + movingRect.height/2
&& fixedRect.y - movingRect.x < fixedRect.height/ 2 + movingRect.height/2
){
  fixedRect.shapeColor = "purple"
  movingRect.shapeColor = "purple"  

}
else{
  fixedRect.shapeColor = "red"
  movingRect.shapeColor = "blue"  


}

drawSprites();
}