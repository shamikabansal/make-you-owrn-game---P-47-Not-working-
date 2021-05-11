var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var Runner1, Runner2, Runner3, Runner4,runners;
var runner1_img,runner2_img, runner3_img,runner4_img
var track, ground;


function preload(){
 // track = loadImage("track2.png");
  
  runner1_img = loadImage("Runner1.png");
  runner2_img = loadImage("Runner2.png")
  runner3_img = loadImage("Runner3.png")
  runner4_img = loadImage("Runner3.png")
  //ground = loadImage("images/ground.png");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}



