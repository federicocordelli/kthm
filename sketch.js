let Stalinist;
let Xanh;
let XanhItal;
let rot = 0;



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
  textAlign(CENTER, CENTER);


}

function draw() {
  background('black');



  //translate(windowWidth/2,windowHeight/2);
  //rotate(frameCount/50);


  //rotateX(time / 1000);
  //rotateZ(time / 1234);
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


  push();
  textFont(Xanh);
  textSize(30);
  textAlign(CENTER);
  translate(-windowWidth/2,windowHeight/2-20);
  fill('white');
  rotateX(millis() / 2500);
  text("Hybridisation is the Lev Manovich's therm to define a specific new digital media nature - Hybridisation is the Lev Manovich's therm to define a specific new digital media nature - Hybridisation is the Lev Manovich's therm to define a specific new digital media nature - Hybridisation is the Lev Manovich's therm to define a specific new digital media nature-",0,0);
  pop();

  push();
  textFont(Xanh);
  textSize(30);
  textAlign(CENTER);
  translate(-windowWidth/2,-windowHeight/2+10);
  fill('white');
  rotateX(millis() / 2500);
  text("Kynetic Typography Interactive Poster - by Federico Cordelli - Kynetic Typography Interactive Poster - by Federico Cordelli - Kynetic Typography Interactive Poster - by Federico Cordelli - Kynetic Typography Interactive Poster - by Federico Cordelli - Kynetic Typography Interactive Poster - by Federico Cordelli -",0,0);
  pop();



}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight, WEBGL);
  //resizeCanvas(displayWidth, displayHeight, WEBGL);

  return false;
}

function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  rot += event.delta;
  //uncomment to block page scrolling
  return false;
}
