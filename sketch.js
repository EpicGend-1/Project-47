//variables
//character
var ninja,ninjaAnime,ninjaImg
//doors
//floor1
var normaldoor1,normaldoor1Img,claweddoor1,claweddoor1Img,monsterbehinddoor1,monsterbehinddoor1Img
//floor2
var olddoor2,olddoor2Img,cleandoor2,cleandoor2Img,bloodunderdoor2,bloodunderdoor2Img
//gameInfoText
var gameInfoText,gameInfoTextImg
//background and hand use and playbutton background
var backgroundfordoors,backgroundfordoorsImg
var playbutton,playbuttonImg
var retrybutton,retrybuttonImg
var hand, handImg
var blackbackgroundwithplaybutton,blackbackgroundwithplaybuttonImg
var background
var nextbutton,nextbuttonImg
var jumpscareGif,jumpscareGifImg
//gamestate
var gamestate = 0
//borders
var Rborder, Lborder


//function preload
function preload() {
  //animations
  ninjaAnime = loadAnimation("./assets/Nwalk1.png","./assets/Nwalk2.png","./assets/Nwalk3.png","./assets/Nwalk2.png")
  ninjaImg = loadAnimation("./assets/Nwalk2.png","./assets/Nwalk2.png","./assets/Nwalk2.png")
  //image
  //doors
  //floor1 
  normaldoor1Img = loadImage("./assets/Doors/normal door1.png")
  claweddoor1Img = loadImage("./assets/Doors/clawed_door1.png")
  monsterbehinddoor1Img = loadImage("./assets/Doors/monster_behind_door1.png")
  //floor2
  olddoor2Img = loadImage("./assets/Doors/old_door2.png")
  cleandoor2Img = loadImage("./assets/Doors/clean_door2.png")
  bloodunderdoor2Img = loadImage("./assets/Doors/blood_under_door2.png")
  //gameInfoTexta
  gameInfoTextImg = loadImage("./assets/gameinfotext.png")
  //background and hand use and playbutton background
  backgroundfordoorsImg = loadImage("./assets/background.png")
  handImg = loadImage("./assets/hand.png")
  blackbackgroundwithplaybuttonImg = loadImage("./assets/blackbackgroundwithplaybutton.png")
  playbuttonImg = loadImage("./assets/playbutton.png")
  nextbuttonImg = loadImage("./assets/nextbutton.png")
  jumpscareGifImg = loadImage("./assets/jumpscare.gif")
  retrybuttonImg = loadImage("./assets/retrybutton.png")
}




function setup() {
  createCanvas(1600,800);

  
  
  background = createSprite(800,500)
  //background.addImage(jumpscareGif)
  background.addImage(gameInfoTextImg)
  background.addImage(backgroundfordoorsImg)
  background.addImage(blackbackgroundwithplaybuttonImg)
  background.scale = 2.1

  jumpscareGif = createSprite(800,400)
  jumpscareGif.addImage(jumpscareGifImg)
  jumpscareGif.scale = 1.6 
  jumpscareGif.visible = false;
 
  retrybutton = createSprite(5000,650)
  retrybutton.addImage(retrybuttonImg)
  retrybutton.scale = 1.5

  nextbutton = createSprite(100000,650)
      nextbutton.addImage(nextbuttonImg)
      nextbutton.scale = 1.5 
  ///image
  //doors485
  //floor1
  normaldoor1 = createSprite(500,10000)
  normaldoor1.addImage(normaldoor1Img)
  normaldoor1.scale = 1

  claweddoor1 = createSprite(965,10000)
  claweddoor1.addImage(claweddoor1Img)
  claweddoor1.scale = 1

  monsterbehinddoor1 = createSprite(1430,10000)
  monsterbehinddoor1.addImage(monsterbehinddoor1Img)
  monsterbehinddoor1.scale = 1

  //floor2
  
  cleandoor2 = createSprite(965,10000)
  cleandoor2.addImage(cleandoor2Img)
  cleandoor2.scale = 1

  olddoor2 = createSprite(500,10000)
  olddoor2.addImage(olddoor2Img)
  olddoor2.scale = 1

  bloodunderdoor2 = createSprite(1430,10000)
  bloodunderdoor2.addImage(bloodunderdoor2Img)
  bloodunderdoor2.scale = 1

    hand = createSprite(10000,250)
    hand.addImage(handImg)
    hand.scale = 0.7

//animations
  ninja = createSprite(200,600,200,200)
  ninja.addAnimation("ninjaImg",ninjaImg)
  ninja.addAnimation("anime",ninjaAnime)
  ninja.scale = 3
  ninja.visible = false;

  Rborder = createSprite(-1,500,5,1000)
  Rborder.visible = false;
  

  Lborder = createSprite(1600,500,5,1000)
  Lborder.visible = false;
  
  if(gamestate === 0){
    background.addImage(blackbackgroundwithplaybuttonImg)
  
    playbutton = createSprite(800,400,30,50)
    playbutton.addImage(playbuttonImg)
    playbutton.scale = 2    
  }

  claweddoor1.setCollider("rectangle",0,0,claweddoor1.width-150,claweddoor1.height);
  monsterbehinddoor1.setCollider("rectangle",0,0,monsterbehinddoor1.width-150,monsterbehinddoor1.height);
  normaldoor1.setCollider("rectangle",0,0,normaldoor1.width-150,normaldoor1.height);
  bloodunderdoor2.setCollider("rectangle",0,0,claweddoor1.width-150,claweddoor1.height);
  olddoor2.setCollider("rectangle",0,0,monsterbehinddoor1.width-150,monsterbehinddoor1.height);
  cleandoor2.setCollider("rectangle",0,0,normaldoor1.width-150,normaldoor1.height);
  //normaldoor1.debug= true;
  ninja.setCollider("rectangle",0,0,ninja.width-35,ninja.height);
  //ninja.debug= true;
 
  
}

function draw() {  
//Gamestates
  

  if(mousePressedOver(playbutton)){
    playbutton.scale = 0
    gamestate=1
    }
    if(gamestate!== "end"){
      jumpscareGif.visible = false; 
      retrybutton.x = 10000
    }
    
    if(gamestate === 1){
      background.addImage(gameInfoTextImg)
      background.scale = 2  
      nextbutton.x = 1200
      nextbutton.scale = 1.5
    }
    if (gamestate === 2){
      nextbutton.scale = 0
      background.addImage(backgroundfordoorsImg)
      background.y = 275
      background.scale = 1.8
      ninja.visible = true;
      
      normaldoor1.y = 485
      claweddoor1.y = 485
      monsterbehinddoor1.y = 485
    }

    if(mousePressedOver(nextbutton)){
      gamestate = 2
        
    }    
      
    if(ninja.isTouching(normaldoor1) || ninja.isTouching(claweddoor1) || ninja.isTouching(monsterbehinddoor1)){
      hand.x = 1450
    } 
    else if( ninja.isTouching(cleandoor2) || ninja.isTouching(olddoor2) || ninja.isTouching(bloodunderdoor2)){
      hand.x = 1450
    }else{
      hand.x = 10000
    }


    if(gamestate === "end"){
      //jumpscareGif.x = 800
      jumpscareGif.visible =  true;
      retrybutton.x = 300
      //jumpscareGif.depth = background.depth
      //jumpscareGif.depth +=1  
      
      if(mousePressedOver(retrybutton)){
        gamestate = 1
        background.y = 500
        
      
      }

      //doors
      normaldoor1.y = 2000
      monsterbehinddoor1.y = 2000
      claweddoor1.y = 2000
      bloodunderdoor2.y = 2000
      cleandoor2.y = 2000
      olddoor2.y = 2000

      //ninja
      ninja.visible = false;
    }

    if (mousePressedOver(hand) && ninja.isTouching(normaldoor1)){
      gamestate = 3
    }

    if (gamestate === 3){
      normaldoor1.y = 2000
      monsterbehinddoor1.y = 2000
      claweddoor1.y = 2000

      cleandoor2.y = 485
      olddoor2.y = 485
      bloodunderdoor2.y = 500

    }

   if ( mousePressedOver(hand) && ninja.isTouching(monsterbehinddoor1) || mousePressedOver(hand) && ninja.isTouching(claweddoor1)){ 
      gamestate = "end"
    }
    else if( mousePressedOver(hand) && ninja.isTouching(cleandoor2) || mousePressedOver(hand) && ninja.isTouching(bloodunderdoor2)){
      gamestate = "end"
    }else{

    }
    
  //collisions
  ninja.collide(Lborder)
  ninja.collide(Rborder)
  //functions
  move()
  

  drawSprites();
    textSize(50)
  if(gamestate === 2){
    text("Use D and A keys to move",200,100)
  }
    
}

//functions

function move(){
  if (keyDown("a")){
    //temporary speed
    ninja.changeAnimation("anime",ninjaAnime)
      ninja.x -= 11
  }
  else{
    if(keyDown("d")){
      //temporary speed
    ninja.changeAnimation("anime",ninjaAnime)
    ninja.x += 11
    }
  }
  if(keyDown("d") || keyDown("a")){
    ninja.changeAnimation("anime",ninjaAnime)
  }
  else{
    ninja.changeAnimation("ninjaImg", ninjaImg)
  }
}