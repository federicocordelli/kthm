let Stalinist;
let Xanh;
let XanhItal;
let rot = 0;
let value = 0;



function preload() {
Stalinist = loadFont('addons/StalinistOne-Regular.ttf');
Xanh = loadFont('addons/XanhMono-Regular.ttf');
XanhItal = loadFont('addons/XanhMono-Italic.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //createCanvas(displayWidth, displayHeight, WEBGL);
  noSmooth();


  textFont(Stalinist);
  textSize(100);



}

function draw() {
  background('black');

  push();
  textFont(Xanh);
  textSize(50);
  //translate(30,30);
  //textAlign(LEFT);
  fill('white');
  rotateX(millis() / 2500);
  text("Hybridisation is the Lev Manovich's therm to define a specific new digital media nature - ",30,30);
  pop();

    push();
    textFont(Xanh);
    textSize(50);
    //translate(width-30,height-30);
    //textAlign(LEFT);
    fill('white');
    rotateX(millis() / 2500);
    text("Kynetic Typography Manifesto - by Federico Cordelli - Kynetic Typography Manifesto - by Federico Cordelli - ",width-30,height-30);
    pop();



  //translate(windowWidth/2,windowHeight/2);
  //rotate(frameCount/50);


  //rotateX(time / 1000);
  //rotateZ(time / 1234);
  /*
  push();
  rotateZ(rot/20000);
  rotateX(rot/5000);
  rotateY(rot/50000);
  scale((-rot+100000)/100000,(-rot+100000)/100000);

  fill('white');
  text("HYBRID",0,0);
  pop();

  push();
  rotateZ(rot/20000);
  rotateX(rot/5000);
  rotateY(rot/50000);
  scale((-rot+100000)/100000,(-rot+100000)/100000);
  translate(0,0,rot/100);

  fill('white');
  text("HYBRID",0,0);
  pop();

  push();
  rotateZ(rot/20000);
  rotateX(rot/5000);
  rotateY(rot/50000);
  scale((-rot+100000)/100000,(-rot+100000)/100000);
  translate(0,0,-(rot/100));

  fill('white');
  text("HYBRID",0,0);
  pop();

  push();
  rotateZ(rot/20000);
  rotateX(rot/5000);
  rotateY(rot/50000);
  scale((-rot+100000)/100000,(-rot+100000)/100000);
  translate(0,0,rot/50);

  fill('white');
  text("HYBRID",0,0);
  pop();

  push();
  rotateZ(rot/20000);
  rotateX(rot/5000);
  rotateY(rot/50000);
  scale((-rot+100000)/100000,(-rot+100000)/100000);
  translate(0,0,-(rot/50));

  fill('white');
  text("HYBRID",0,0);
  pop();

  push();
  rotateZ(rot/20000);
  rotateX(rot/5000);
  rotateY(rot/50000);
  scale((-rot+100000)/100000,(-rot+100000)/100000);
  translate(0,0,rot/32.5);

  fill('white');
  text("HYBRID",0,0);
  pop();

  push();
  rotateZ(rot/20000);
  rotateX(rot/5000);
  rotateY(rot/50000);
  scale((-rot+100000)/100000,(-rot+100000)/100000);
  translate(0,0,-(rot/32.5));

  fill('white');
  text("HYBRID",0,0);
  pop();

  push();
  rotateZ(rot/20000);
  rotateX(rot/5000);
  rotateY(rot/50000);
  scale((-rot+100000)/100000,(-rot+100000)/100000);
  translate(0,0,rot/25);

  fill('white');
  text("HYBRID",0,0);
  pop();

  push();
  rotateZ(rot/20000);
  rotateX(rot/5000);
  rotateY(rot/50000);
  scale((-rot+100000)/100000,(-rot+100000)/100000);
  translate(0,0,-(rot/25));

  fill('white');
  text("HYBRID",0,0);
  pop();
*/
//scritte nuove
push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();

push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,value*120);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();

push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,-value*120);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();

push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,value*200);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();

push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,-value*200);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();


push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,value*300);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();


push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,-value*300);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();

push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,value*400);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();


push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,-value*400);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();

push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,value*500);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();


push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,-value*500);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();

//scrittine


}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight, WEBGL);
  //resizeCanvas(displayWidth, displayHeight, WEBGL);

  return false;
}

/*
function touchMoved(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  rot += event.delta;
  //uncomment to block page scrolling
  return false;
}
*/

function touchMoved() {
  value = value + 0.05;

  if (value > 3.1) {
    value = 0;
  }
/*
if (value < -500) {
  value = value-0.05;
}
*/
}
