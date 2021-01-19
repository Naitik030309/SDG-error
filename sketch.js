var bg,bgImg;

var bbScreen;
var bbScreenImg;
var dScreen;
var dScreenImg;
var sScreen;
var sScreenImg;
var bScreen;
var bScreenImg;

var bb,b,d,s;
var bbImg,bImg,dImg,sImg;

var bbI,bI,sI,dI;
var bbIImg,bIImg,sIImg,dIImg;

var back,backImg;

var gameState = "info";

function preload(){
    bgImg = loadImage("Images/Other items/bg.png");
    backImg = loadImage("Images/Other items/340.png");
    
    bbScreenImg = loadImage("Images/BB/download2.png");
    dScreenImg = loadImage("Images/D/download1.png");
    sScreenImg = loadImage("Images/S/download3.png");
    bScreenImg = loadImage("Images/B/download.png");

    bbIImg = loadImage("Images/BB/unnamed.png");
    bIImg = loadImage("Images/B/bowling_PNG10.png");
    sIImg = loadImage("Images/S/1024px-Soccerball.svg.png");
    dIImg = loadImage("Images/D/darts_PNG17.png");
}
function setup(){
    createCanvas(displayWidth,displayHeight - 111);

    bg = createSprite(displayWidth/2,displayHeight/2);
    bg.addImage(bgImg);
    bg.scale = 4.0; 

    back = createSprite(displayWidth - 1300,50);
    back.addImage(backImg);
    back.scale = 0.1;
    back.visible = false;
    
    bbScreen = createSprite(displayWidth - 1250,100);
    bbScreen.addImage(bbScreenImg);
    bbScreen.scale = 3.0;

    dScreen = createSprite(displayWidth - 115,100);
    dScreen.addImage(dScreenImg);
    dScreen.scale = 3.0;

    sScreen = createSprite(displayWidth-1250,displayHeight - 211);
    sScreen.addImage(sScreenImg);
    sScreen.scale = 3.0;

    bScreen = createSprite(displayWidth - 115,displayHeight - 211);
    bScreen.addImage(bScreenImg);
    bScreen.scale = 3.0;

    bbI = createSprite(displayWidth - 1250,140);
    bbI.addImage(bbIImg);
    bbI.scale = 0.2;

    bI = createSprite(displayWidth - 100,578);
    bI.addImage(bIImg);
    bI.scale = 0.03;

    sI = createSprite(displayWidth - 1250,589);
    sI.addImage(sIImg);
    sI.scale = 0.09;

    dI = createSprite(displayWidth - 100,125);
    dI.addImage(dIImg);
    dI.scale = 0.3;
}
function draw(){
    background("white");
    mousePressed();
    drawSprites();
    if(gameState === "info"){
        strokeWeight(8);
        stroke("blue");
        fill("cyan");
        textFont("showcard gothic");
        textSize(50);
        text("FOUR IN ONE SPORTS GAME",displayWidth/2 - 300,displayHeight/12);
        strokeWeight(8);
        stroke("yellow");
        fill("red");
        textFont("jokerman");
        textSize(25);
        text("Click on icons of any sports which you like and play it according to the instructions given in the game!",displayWidth/13,displayHeight/2.5);
    }
    if(gameState === "bbPlay"){
        back.visible = true; 
        if(mousePressedOver(back)){
        reset();
       }
    }

    if(gameState === "bPlay"){
        back.visible = true; 
        if(mousePressedOver(back)){
         reset();
        }
    }

    if(gameState === "dPlay"){
        back.visible = true; 
        if(mousePressedOver(back)){
         reset();
        }
    }

    if(gameState === "sPlay"){
        back.visible = true; 
        if(mousePressedOver(back)){
         reset();
        }
    }
    
}
function reset(){
    gameState = "info";
    back.visible = false;
    bbI.visible = true;
    bg.visible = true;
    bbScreen.visible = true;
    dScreen.visible = true;
    sScreen.visible = true;
    bScreen.visible = true;
    bI.visible = true;
    sI.visible = true;
    dI.visible = true;
}

function mousePressed(){
    if(mousePressedOver(bbI)){
        bbI.visible = false;
        bg.visible = false;
        bbScreen.visible = false;
        dScreen.visible = false;
        sScreen.visible = false;
        bScreen.visible = false;
        bI.visible = false;
        sI.visible = false;
        dI.visible = false;
        gameState = "bbPlay";
    }else if(mousePressedOver(bbScreen)){
        bbI.visible = false;
        bg.visible = false;
        bbScreen.visible = false;
        dScreen.visible = false;
        sScreen.visible = false;
        bScreen.visible = false;
        bI.visible = false;
        sI.visible = false;
        dI.visible = false;
        gameState = "bbPlay";
    }

    if(mousePressedOver(bI)){
        bbI.visible = false;
        bg.visible = false;
        bbScreen.visible = false;
        dScreen.visible = false;
        sScreen.visible = false;
        bScreen.visible = false;
        bI.visible = false;
        sI.visible = false;
        dI.visible = false;
        gameState = "bPlay";
    }else if(mousePressedOver(bScreen)){
        bbI.visible = false;
        bg.visible = false;
        bbScreen.visible = false;
        dScreen.visible = false;
        sScreen.visible = false;
        bScreen.visible = false;
        bI.visible = false;
        sI.visible = false;
        dI.visible = false;
        gameState = "bPlay";
    }

    if(mousePressedOver(dI)){
        bbI.visible = false;
        bg.visible = false;
        bbScreen.visible = false;
        dScreen.visible = false;
        sScreen.visible = false;
        bScreen.visible = false;
        bI.visible = false;
        sI.visible = false;
        dI.visible = false;
        gameState = "dPlay";
    }else if(mousePressedOver(dScreen)){
        bbI.visible = false;
        bg.visible = false;
        bbScreen.visible = false;
        dScreen.visible = false;
        sScreen.visible = false;
        bScreen.visible = false;
        bI.visible = false;
        sI.visible = false;
        dI.visible = false;
        gameState = "dPlay";
    }

    if(mousePressedOver(sI)){
        bbI.visible = false;
        bg.visible = false;
        bbScreen.visible = false;
        dScreen.visible = false;
        sScreen.visible = false;
        bScreen.visible = false;
        bI.visible = false;
        sI.visible = false;
        dI.visible = false;
        gameState = "sPlay";
    }else if(mousePressedOver(sScreen)){
        bbI.visible = false;
        bg.visible = false;
        bbScreen.visible = false;
        dScreen.visible = false;
        sScreen.visible = false;
        bScreen.visible = false;
        bI.visible = false;
        sI.visible = false;
        dI.visible = false;
        gameState = "sPlay";
    }
}