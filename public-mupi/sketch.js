const NGROK = `https://${window.location.hostname}`;
let socket = io(NGROK, { path: "/real-time" });
console.log("Server IP: ", NGROK);

//Pantalla
let screen = 0;

//Imágenes
let img1;
let img2; //Pantalla 1
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;

//Fuente
let arialFontBold;

let controllerX,
  controllerY = 0;
let deviceWidth,
  deviceHeight = 0;
let mupiWidth,
  mupiHeight = 0;



function preload() {

  img1 = loadImage("mupiimages/muppi2.png");

  //Tutorial
  img8 = loadImage("mupiimages/Tutorialmupi1.png")
  img9 = loadImage("mupiimages/Instruccion1.png")

  //Preguntas
  img2 = loadImage("mupiimages/Pantallamupi1.png");
  img3 = loadImage("mupiimages/Pantallamupi2.png");
  img4 = loadImage("mupiimages/Pantallamupi3.png");
  img5 = loadImage("mupiimages/Pantallamupi4.png");
  img6 = loadImage("mupiimages/Pantallamupi5.png");
  img7 = loadImage("mupiimages/Pantallamupi6.png");

  arialFontBold = loadFont("mupiimages/ArialBold.ttf");
}

function setup() {
  frameRate(60);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.style("position", "fixed");
  canvas.style("top", "0");
  canvas.style("right", "0");
  controllerX = windowWidth / 2;
  controllerY = windowHeight / 2;
  mupiWidth = windowWidth;
  mupiHeight = windowHeight;
  background(0);

  /*imageMode("center");
  image(img1, windowWidth / 2, windowHeight / 2, 550, 800);
  console.log(img1, img1.width / 2, img1.height / 2);
  */
}

function draw() {
  /*background(0, 5);
    newCursor(pmouseX, pmouseY);
    fill(255);
    ellipse(controllerX, controllerY, ballSize, ballSize);
    */

  switch (screen) {
    case 0:
      imageMode("center");
      image(img1, windowWidth / 2, windowHeight / 2, 550, 800);
      break;

    case 1:
      image(img8, 0, 0, windowWidth, windowHeight);
      image(img9, 460, 100, 950, 800);
      fill(255, 255, 255);
      textSize(60);
      textFont(arialFontBold);
      text('Mueve tu celular a los lados para elegir', 390,100);
      break;

    case 2:
      image(img2, 0, 0, windowWidth, windowHeight);
      fill(255, 255, 255);
      textSize(40);
      textFont(arialFontBold);
      text('¿Qué te gusta comer?', 750,500);
      break;

    case 3:
      image(img3, 0, 0, windowWidth, windowHeight);
      fill(255, 255, 255);
      textSize(40);
      textFont(arialFontBold);
      text('¿Qué te gusta?', 750,500);
      break;

    case 4:
      image(img4, 0, 0, windowWidth, windowHeight);
      fill(255, 255, 255);
      textSize(40);
      textFont(arialFontBold);
      text('¿Qué prefieres?', 750,500);
      break;

    case 5:
      image(img5, 0, 0, windowWidth, windowHeight);
      fill(255, 255, 255);
      textSize(40);
      textFont(arialFontBold);
      text('Si fueras un animal...', 750,500);
      break;

    case 6:
      image(img6, 0, 0, windowWidth, windowHeight);
      fill(255, 255, 255);
      textSize(40);
      textFont(arialFontBold);
      text('Te gusta más', 750,500);
      break;

    case 7:
      image(img7, 0, 0, windowWidth, windowHeight);
      fill(255, 255, 255);
      textSize(40);
      textFont(arialFontBold);
      text('Te gusta escuchar', 750,500);
      break;

    case 8:
      //image(img8, 0, 0, windowWidth, windowHeight);
      break;
        
  
    default:
      break;
  }

  newCursor(pmouseX, pmouseY);
}

function mouseDragged() {
  socket.emit("positions", { controlX: pmouseX, controlY: pmouseY });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function newCursor(x, y) {
  /*  noStroke();
    fill(255);
    ellipse(x, y, 10, 10);*/
}

socket.on("mupi-instructions", (instructions) => {
  console.log("ID: " + socket.id);

  let { interactions } = instructions;
  switch (interactions) {
    case 0:
      let { pmouseX, pmouseY } = instructions;
      controllerX = (pmouseX * mupiWidth) / deviceWidth;
      controllerY = (pmouseY * mupiHeight) / deviceHeight;
      console.log({ controllerX, controllerY });
      break;
    case 1:
      /*let { pAccelerationX, pAccelerationY, pAccelerationZ } = instructions;
      ballSize = pAccelerationY < 0 ? pAccelerationY * -2 : pAccelerationY * 2;*/
      break;
    case 2:
      let { rotationX, rotationY } = instructions;
      controllerY = (rotationX * mupiHeight) / 90;
      controllerX = (rotationY * mupiWidth) / 90;
      break;
  }
});

socket.on("mupi-size", (deviceSize) => {
  let { windowWidth, windowHeight } = deviceSize;
  deviceWidth = windowWidth;
  deviceHeight = windowHeight;
  console.log(
    `User is using a smartphone size of ${deviceWidth} and ${deviceHeight}`
  );
});

socket.on("accion 1", (action) => {
<<<<<<< HEAD
  /*ballSize += 20;
  alert("izquierda");*/
});

socket.on("accion 2", (action) => {
  /*ballSize -= 20;
  alert("derecha");*/
=======
  ballSize += 20;
  alert("izquierda");
  points += 5;
});

socket.on("accion 2", (action) => {
  ballSize -= 20;
  alert("derecha");
  points += 10;
>>>>>>> caa45a7c77e10873b3b55c921d13be34925b8857
});
