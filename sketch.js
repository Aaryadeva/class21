var mObject,fObject
function setup() {
  createCanvas(800,400);
  fObject=createSprite(400, 200, 50, 100);
  mObject=createSprite(750,180,100,50);
  hObject=createSprite(200,200,50,100);
  jObject=createSprite(200,100,50,50);
  kObject=createSprite(600,100,50,50);
  jObject.velocityX=2;
  kObject.velocityX=-2;
  fObject.shapeColor="green";
  mObject.shapeColor="green";
  fObject.debug=true;
  mObject.debug=true;
}

function draw() {
  background(255,255,255);
  mObject.y=mouseY;
  mObject.x=mouseX; 
  console.log(mObject.x) ;
  console.log(mObject.width/2+fObject.width/2);
  console.log(mObject.x-hObject.x);
  if(isTouching(mObject,hObject)){
  hObject.shapeColor="blue";
        mObject.shapeColor="blue";
      }
      else{
        hObject.shapeColor="green";
        mObject.shapeColor="green";
      }
bounceOff(jObject,kObject);
  drawSprites();
}
