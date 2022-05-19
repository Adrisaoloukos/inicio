java script do game pong feito no p5js

//variaveis
//menu
let menu1 = 100;
let menu0 = 0;
let jogador = 0;
//bolinha
let yBolinha = 200;
let xBolinha = 300;
let velox = 6;
let veloy = 6;
let diametro = 25;
let raio = diametro / 2;
let partida = 1;
//raquete
let yRaquete1 = 150;
let yRaquete2 = 150;
let cRaquete1 = 15;
let cRaquete2 = 15;
let cRaquetebot = 15;
let yRaquetebot = 150;
let vRraquetebot;
//controles
let W = 87;
let S = 83;
let esc = 27;
let espaco = 32;

//placar
let pontos1 = 0;
let pontos2 = 0;

//inicialização do pong
function setup() {
  createCanvas(600, 400);
}

//fução que repete sem parar
function draw() {
  background(220);
  if (jogador === 0) menu();
  if (jogador === 100) solo();
  if (jogador === 200) duo();
  if (jogador === 300) configuracoes();
}

//função do menu
function menu() {
  noStroke();
  fill(40);
  rect(150, menu1, 300, 70, 10);
  fill(30, 144, 255);
  textSize(50);
  textAlign(CENTER);
  text("𝓟𝓞𝓝𝓖", 300, 40, 0);
  textSize(40);
  text("𝟭 𝗝𝗢𝗚𝗔𝗗𝗢𝗥", 300, 150);
  text("𝟮 𝗝𝗢𝗚𝗔𝗗𝗢𝗥𝗘𝗦", 300, 250);
  text("𝘾𝙊𝙉𝙁𝙄𝙂", 300, 350);
}

function configuracoes() {
  textSize(50);
  textAlign(CENTER);
  fill(30, 144, 255);
  text("Mo Preguiça", 300, 200);
}

//função do modo um jogador
function solo() {
  background(0);
  //bolinha
  fill(500);
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velox;
  yBolinha += veloy;
  if (xBolinha + raio > 600 || xBolinha - raio < 0) {
    velox *= -1;
  }
  if (yBolinha + raio > 400 || yBolinha - raio < 0) {
    veloy *= -1;
  }
  //sua raquete
  //detector de colisão da sua raquete
  if (
    xBolinha - raio < 10 + cRaquete1 &&
    yBolinha - raio < yRaquete1 + 100 &&
    yBolinha + raio > yRaquete1
  ) {
    velox *= -1;
  }
  //controle da sua raquete
  if (
    (keyIsDown(W) && yRaquete1 > 0) ||
    (keyIsDown(UP_ARROW) && yRaquete1 > 0)
  ) {
    yRaquete1 -= 10;
  }
  if (
    (keyIsDown(S) && yRaquete1 < 280) ||
    (keyIsDown(DOWN_ARROW) && yRaquete1 < 280)
  ) {
    yRaquete1 += 10;
  }
  //sua raquete
  rect(10, yRaquete1, 15, 100, 20);
  bot();
  textAlign(CENTER);
  textSize(20);
  text(pontos1, 200, 30);
  text(pontos2, 400, 30);
  if (xBolinha > 585) {
    pontos1 += 1;
  }
  if (xBolinha < 15) {
    pontos2 += 1;
  }
}
//bot
function bot(x, y) {
  if (
    xBolinha + raio > 575 &&
    yBolinha + raio < yRaquetebot + 120 &&
    yBolinha + raio > yRaquetebot + 1
  ) {
    velox *= -1;
  }
  //arrumar
  vRaquetebot = yBolinha - yRaquetebot - cRaquetebot / 2 - 100;
  rect(575, yRaquetebot, 15, 100, 20);
  yRaquetebot += vRaquetebot;
}

//função do modo dois jogadores
function duo() {
  background(0);
  //bolinha
  fill(500);
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velox;
  yBolinha += veloy;
  if (xBolinha + raio > 600 || xBolinha - raio < 0) {
    velox *= -1;
  }
  if (yBolinha + raio > 400 || yBolinha - raio < 0) {
    veloy *= -1;
  }
  //detector de colisão com a raquete 1
  if (
    xBolinha - raio < 10 + cRaquete1 &&
    yBolinha - raio < yRaquete1 + 120 &&
    yBolinha + raio > yRaquete1
  ) {
    velox *= -1;
  }
  //contoles da raquete 1
  if (keyIsDown(W) && yRaquete1 > 0) {
    yRaquete1 -= 10;
  }
  if (keyIsDown(S) && yRaquete1 < 280) {
    yRaquete1 += 10;
  }
  rect(10, yRaquete1, cRaquete1, 120, 20);

  //controles da raquete 2
  if (keyIsDown(UP_ARROW) && yRaquete2 > 0) {
    yRaquete2 -= 10;
  }
  if (keyIsDown(DOWN_ARROW) && yRaquete2 < 280) {
    yRaquete2 += 10;
  }
  if (
    xBolinha + raio > 575 &&
    yBolinha + raio < yRaquete2 + 120 &&
    yBolinha + raio > yRaquete2 + 1
  ) {
    velox *= -1;
  }
  rect(575, yRaquete2, cRaquete2, 120, 20);
  textAlign(CENTER);
  textSize(20);
  text(pontos1, 200, 30);
  text(pontos2, 400, 30);
  if (xBolinha > 585) {
    pontos1 += 1;
  }
  if (xBolinha < 15) {
    pontos2 += 1;
  }
}

function controles() {}

function keyPressed() {
  if (keyCode === DOWN_ARROW && menu1 < 300) {
    menu1 = menu1 + 100;
  }
  if (keyCode === UP_ARROW && menu1 > 150) {
    menu1 = menu1 - 100;
  }
  if (keyCode === ENTER && menu0 === 0) {
    jogador = menu1;
    partida = menu1;
    menu0 = 1;
  }
  if (keyCode === espaco) {
    xBolinha = 300;
    yBolinha = 200;
    yRaquete1 = 150;
    yRaquete2 = 150;
    yRaquetebot = 150;
  }
  if (keyCode === esc) {
    jogador = 0;
    menu0 = 0;
    menu1 = 100;
    xBolinha = 300;
    yBolinha = 200;
    yRaquete1 = 150;
    yRaquete2 = 150;
    pontos1 = 0;
    pontos2 = 0;
  }
}
