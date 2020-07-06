let imgB;
let imgC;
let imgD;
let imgE;
let imgF;
let imgH;
let imgI;
let imgJ;
let imgL;


let x = 100; //imgB
let y = 100;
let x1 = 50; //imgC
let y1 = 50;
let x2 = 20; //imgD
let y2 = 20;
let x3 = 60; //imgE
let y3 = 60;
let x4 = 50; //imgF
let y4 = 50;
let x5 = 20; //imgG
let y5 = 20;
let x6 = 100; //imgH
let y6 = 100;
let x7 = 50; //imgI
let y7 = 50;
let x8 = 20; //imgj
let y8 = 20;
let x9 = 20; //imgL
let y9 = 20;

let sz = 70;


let a;
let c;
let b;
//let x=600
//let startX=0;
//let y=20;
//let startY=0;

//let fr = 0.01
let coordenadas = ['Norte', 'Centro', 'Lisboa e Vale do Tejo', 'Alentejo', 'Algarve'];

let vid = "demanda1.mp4"


function preload() {
  fontRegular = loadFont('BadScript-Regular.ttf');

  imgB = loadImage("Agrestis.Peq.Br.png', 'Sketch Files");
  imgC = loadImage("R.Bl.Peq.Br.png', 'Sketch Files");
  imgD = loadImage("Corymbifera.Peq.Br.png', 'Sketch Files");
  imgE = loadImage("Mircantha.Peq.Br.png', 'Sketch Files");
  imgF = loadImage("Pouzinii.Peq.Br.png', 'Sketch Files");
  imgG = loadImage("Rubiginosa.Peq.Br.png', 'Sketch Files");
  imgH = loadImage("sempervirens.Peq.Br.png', 'Sketch Files");
  imgI = loadImage("Squarro.Peq.Br.png', 'Sketch Files");
  imgJ = loadImage("Stylosa.Peq.Br.png', 'Sketch Files");
  imgL = loadImage("Tomentosa.Peq.Br.png', 'Sketch Files");
}

function setup() {

  vid = createVideo(
    ['demanda1.mp4'],
    vidLoad
  );
  vid.size(550, 300);
  vid.position(0, 20);


  a = height / 2;
  a = 450;
  c = 116
  b = 45

  let canvas = createCanvas(windowWidth, windowHeight);



  //imagem do mapa  
  imgA = createImg('Rosa_mapaNV.TIFF', 'Sketch Files');

  //imagens das espécimes  
  //imgC = createImg('R.Bl.Peq.Br.png', 'Sketch Files');
  //imgB = createImg('Agrestis.Peq.Br.png', 'Sketch Files');
  // imgD = createImg('Corymbifera.Peq.Br.png', 'Sketch Files');
  //imgE = createImg('Mircantha.Peq.Br.png', 'Sketch Files');
  //imgF = createImg('Pouzinii.Peq.Br.png', 'Sketch Files');
  //imgG = createImg('Rubiginosa.Peq.Br.png', 'Sketch Files');
  //imgH = createImg('sempervirens.Peq.Br.png', 'Sketch Files');
 // imgI = createImg('Squarro.Peq.Br.png', 'Sketch Files');
  //imgJ = createImg('Stylosa.Peq.Br.png', 'Sketch Files');
  //imgL = createImg('Tomentosa.Peq.Br.png', 'Sketch Files');
  img1 = createImg('Agrestis.Peq.Br.png', 'Sketch Files');
  img2 = createImg('R.Bl.Peq.Br.png', 'Sketch Files');
  img3 = createImg('Corymbifera.Peq.Br.png', 'Sketch Files');
  img4 = createImg('Mircantha.Peq.Br.png', 'Sketch Files');
  img5 = createImg('Pouzinii.Peq.Br.png', 'Sketch Files');
  img6 = createImg('Rubiginosa.Peq.Br.png', 'Sketch Files');
  img7 = createImg('sempervirens.Peq.Br.png', 'Sketch Files');
  img8 = createImg('Squarro.Peq.Br.png', 'Sketch Files');
  img9 = createImg('Stylosa.Peq.Br.png', 'Sketch Files');
  img0 = createImg('Tomentosa.Peq.Br.png', 'Sketch Files');

}


//video
//function vidLoad() {

//  vid.play().time(1);
//  vid.volume(1);

//}

function draw() {
  background(0);



  //imagem do mapa  
  imgA.position(300, 445)
  imgA.size(241, 480);


  //imagem da máquina
  imgMaq = createImg('maqP.png', 'sketch.js');
  imgMaq.position(1350, 400);
  imgMaq.size(420, 660);

  //imagens das espécimes em movimento
  push();
  
  image(imgB, x, y, sz, sz);
  x = x + 2;
  y = y + 2;
  if (x > 600) {
    x = -1;
  }
  if (y > 600) {
    y = -1;
  }

  image(imgC, x1, y1, sz, sz);
  x1 = x1 + 2;
  y1 = y1 + 3;
  if (x1 > 600) {
    x1 = -1;
  }
  if (y1 > 600) {
    y1 = -1;
  }

  image(imgD, x2, y2, sz, sz);
  x2 = x2 + 1;
  y2 = y2 + 3;
  if (x2 > 600) {
    x2 = -1;
  }
  if (y2 > 600) {
    y2 = -1;
  }

 image(imgE, x3, y3, sz, sz);

  x3 = x3 + 2;
  y3 = y3 + 2;

  if (x3 > 600) {
    x3 = -1;
  }
  if (y3 > 600) {
    y3 = -1;
  }

  image(imgF, x4, y4, sz, sz);

  x4 = x4 + 2;
  y4 = y4 + 3;

  if (x4 > 600) {
    x4 = -1;
  }
  if (y4 > 600) {
    y4 = -1;
  }

  image(imgG, x5, y5, sz, sz);
  x5 = x5 + 1;
  y5 = y5 + 3;

  if (x5 > 600) {
    x5 = -1;
  }
  if (y5 > 600) {
    y5 = -1;
  }
   image(imgH, x6, y6, sz, sz);
  x6 = x6 + 1;
  y6 = y6 + 3;
  if (x6 > 600) {
    x6 = -1;
  }
  if (y6 > 600) {
    y6 = -1;
  }

 image(imgI, x7, y7, sz, sz);

  x7 = x7 + 2;
  y7 = y7 + 2;

  if (x7 > 600) {
    x7 = -1;
  }
  if (y7 > 600) {
    y7 = -1;
  }

  image(imgJ, x8, y8, sz, sz);

  x8 = x8 + 2;
  y8 = y8 + 3;

  if (x8 > 600) {
    x8 = -1;
  }
  if (y8 > 600) {
    y8 = -1;
  }

  image(imgL, x9, y9, sz, sz);
  x9 = x9 + 1;
  y9= y9 + 3;

  if (x9 > 600) {
    x9 = -1;
  }
  if (y9 > 600) {
    y9 = -1;
  }
  

  pop();

  //o texto das espécimes
  textFont(fontRegular);
  fill(random(220, 255), random(220, 255), random(220, 255), 200);
  textSize(25);



  text(' rosa agrestis', c - 8, a + 15);
  text('rosa blondeana', c, a + 75);
  text(' rosa corymbifera', c - 8, a + 125);
  text(' rosa micrantha', c - 8, a + 165);
  text('rosa pouzinii', c, a + 215);
  text('rosa rubinosa', c, a + 260);
  text('rosa semperviren', c, a + 300);
  text('rosa squarrosa', c, a + 345);
  text('rosa stylosa', c, a + 385);
  text('rosa tomentosa', c, a + 435);



  //imagem das espécimes na legenda


//  img1.position(b, a - 10);
 // img1.size(b, b);
  //image(img1, b,a-10,b,b);

  img2.position(b, a + b);
  img2.size(b, b);

  img3.position(b, a + (2 * b))
  img3.size(b, b);

  img4.position(b, a + (3 * b))
  img4.size(b, b);

  img5.position(b, a + (4 * b))
  img5.size(b, b);

  img6.position(b, a + (5 * b))
  img6.size(b, b);

  img7.position(b, a + (6 * b))
  img7.size(b, b);

  img8.position(b, a + (7 * b))
  img8.size(b, b);

  img9.position(b, a + (8 * b))
  img9.size(b, b);

  img0.position(b, a + (9 * b))
  img0.size(b, b);


  //circulos de cor das rosas no mapa
  fill(0, 174, 255, 200);
  ellipse(100, a + 10, 10, 10);

  fill(255, 144, 0, 200);
  ellipse(100, a + 65, 10, 10);

  fill(255, 0, 0, 200);
  ellipse(100, a + 115, 10, 10);

  fill(255, 240, 0, 200);
  ellipse(100, a + 160, 10, 10);

  fill(11, 204, 66, 200);
  ellipse(100, a + 200, 10, 10);

  fill(254, 6, 234, 200);
  ellipse(100, a + 250, 10, 10);

  fill(158, 6, 254, 200);
  ellipse(100, a + 290, 10, 10);

  fill(174, 254, 161, 200);
  ellipse(100, a + 335, 10, 10);

  fill(127, 246, 217, 200);
  ellipse(100, a + 380, 10, 10);

  fill(252, 83, 8, 200);
  ellipse(100, a + 430, 10, 10);





  //texto da demanda 
  push();
  fill(random(200, 255), random(200, 255), random(200, 255), 200);
  textSize(45);
  text('clica na rosa e leva-a para a agulha da máquina', 900, 300);
  fill(random(220, 255), random(220, 255), random(220, 255), 200);
  textSize(30);
  pop();

 // push();
 // if (vid.Stop) {
   // fr = 0.001;
  //  frameRate(fr)
   // fill(0);
  //  rect(110, 350, 750, 70);
  //  fill(255);
  //  textSize(40);
  //  text('procura a rosa na zona do               ', 120, 400)
  //  let index = int(random(0, coordenadas.length));
  //  if (index == coordenadas.length) {
   //   index = 0;
   // }
   // text(coordenadas[index], 535, 400);

  //  pop();
  }
  
  function mouseDragged() {
  if (dist(x, y, mouseX, mouseY) < sz) {
    x = mouseX;
    y = mouseY
  }
  if (dist(x1, y1, mouseX, mouseY) < sz) {
    x1 = mouseX;
    y1 = mouseY
  }
  if (dist(x2, y2, mouseX, mouseY) < sz) {
    x2 = mouseX;
    y2 = mouseY
  }
    if (dist(x3, y3, mouseX, mouseY) < sz) {
    x3 = mouseX;
    y3 = mouseY
  }
  if (dist(x4, y4, mouseX, mouseY) < sz) {
    x4 = mouseX;
    y4 = mouseY
  }
  if (dist(x5, y5, mouseX, mouseY) < sz) {
    x5= mouseX;
    y5 = mouseY
  }if (dist(x6, y6, mouseX, mouseY) < sz) {
    x6 = mouseX;
    y6 = mouseY
  }
  if (dist(x7, y7, mouseX, mouseY) < sz) {
    x7 = mouseX;
    y7 = mouseY
  }
  if (dist(x8, y8, mouseX, mouseY) < sz) {
    x8 = mouseX;
    y8 = mouseY
  }
    if (dist(x9, y9, mouseX, mouseY) < sz) {
    x9 = mouseX;
    y9 = mouseY
  }

}