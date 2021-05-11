class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

  Runner1 = createSprite(100,200);
  Runner1.addImage("Runnner1",runner1_img);
  Runner2 = createSprite(300,200);
  Runner2.addImage("Runnner2",runner2_img);
  Runner3 = createSprite(500,200);
  Runner3.addImage("Runnner3",runner3_img);
  Runner4 = createSprite(700,200)
  Runner4.addImage("Runnner4",runner4_img);
  runners = [Runner1, Runner2, Runner3, Runner4];
}

play(){
  form.hide();

  Player.getPlayerInfo();
  player.getRunnersAtEnd();

  if(allPlayers !== undefined){
    //background(rgb(198,5,1));
    image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
    
 
    var index = 0;

    
    var x = 175 ;
    var y;

    for(var plr in allPlayers){
      
      index = index + 1 ;

      
      x = x + 200;
     
      y = displayHeight - allPlayers[plr].distance;
      runners[index-1].x = x;
      runnerss[index-1].y = y;
   

     
      if (index === player.index){
        stroke(10);
        fill("red");
        ellipse(x,y,60,60);
        runners[index - 1].shapeColor = "red";
        camera.position.x = displayWidth/2;
        camera.position.y = cars[index-1].y;
      }
     
      //textSize(15);
      //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
    }

  }

  if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance +=10
    player.update();
  }

  if(player.distance > 3860){
    gameState = 2;
    player.rank +=1
    Player.updateRunnersAtEnd(player.rank)
  }
 
  drawSprites();
}

end(){
  console.log("Game Ended");
  console.log(player.rank);

}

}

