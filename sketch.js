//This is a big game so if it's hangs in your machine then try uncommenting the 1st, 2nd and 3rd line to change the gameState.
//Thank You!!

//var gameState = "Intro", workState = "Entry", dialogue = "0";
//var gameState = "Mission", workState = "Basement1", dialogue = "20";
var gameState = "Mission", workState = "Basement5", dialogue = "23";

var health=15, armyHealthBar, Thealth = 20, THealthBar;
var fade = 400;
var fade1 = 0;
var timerValue = 500,instruction;

function preload(){

    bgImage1 = loadAnimation("Images/Map/URI.png");
    bgImage2 = loadAnimation("Images/Map/Fortuna1.png");
    meeting1 = loadImage("Images/Meeting/meeting1.png");
    helicopterGif = loadImage("Images/vehicle/helicopter.gif");

    bombA = loadAnimation("Images/Weapons/bomb/bomb.png");
    armyDeadA = loadAnimation("Images/Character/armydead1.png","Images/Character/armydead2.png","Images/Character/armydead3.png","Images/Character/armydead4.png",
    "Images/Character/armydead5.png","Images/Character/armydead6.png","Images/Character/armydead7.png","Images/Character/armydead8.png");
    flamebA = loadAnimation("Images/Flame/flameb1.png","Images/Flame/flameb2.png","Images/Flame/flameb3.png","Images/Flame/flameb4.png","Images/Flame/flameb5.png",
    "Images/Flame/flameb6.png","Images/Flame/flameb7.png");

    ropeImage = loadAnimation("Images/Basement/rope_35x534.jpg");

    armyLeft = loadAnimation("Images/Character/ab1.jpg","Images/Character/ab2.jpg",
    "Images/Character/ab4.jpg","Images/Character/ab5.jpg","Images/Character/ab6.jpg");
    armyRight = loadAnimation("Images/Character/af1.jpg","Images/Character/af2.jpg",
    "Images/Character/af4.jpg","Images/Character/af5.jpg","Images/Character/af6.jpg");
    armyLeftStill = loadAnimation("Images/Character/als.jpg");
    armyRightStill = loadAnimation("Images/Character/ars.jpg");
    armyShootR = loadAnimation("Images/Character/afg1.png","Images/Character/afg2.png");
    armyShootL = loadAnimation("Images/Character/abg1.png","Images/Character/abg2.png");
    armyRopeImage = loadAnimation("Images/Character/ars.jpg");

    patrolImage1 = loadAnimation("Images/Character/patrol2.png");
    patrolImage2 = loadAnimation("Images/Character/patrol3.png");

    HTImage = loadAnimation("Images/Character/HT.png");
    TImage = loadAnimation("Images/Character/T1.png","Images/Character/T2.png","Images/Character/T3.png","Images/Character/T4.png",
    "Images/Character/T5.png","Images/Character/T6.png","Images/Character/T7.png","Images/Character/T8.png")
    TLImage = loadAnimation("Images/Character/TL.png");
    TRImage = loadAnimation("Images/Character/TR.png")

    helipadImage = loadImage("Images/vehicle/background.png");
    helicopterImage = loadImage("Images/vehicle/helicopter.gif");
    helicopterWithLight = loadAnimation("Images/vehicle/Fly1.png","Images/vehicle/Fly2.png","Images/vehicle/Fly3.png","Images/vehicle/Fly4.png");
    helicopterWithNoLight = loadAnimation("Images/vehicle/Fly5.png","Images/vehicle/Fly6.png","Images/vehicle/Fly7.png","Images/vehicle/Fly8.png");
    helicopterStill = loadAnimation("Images/vehicle/Fly1.png");
    helicopterShoot = loadAnimation("Images/vehicle/FireMissile.png","Images/vehicle/ShootCannon.png");

    cave1Image = loadAnimation("Images/Basement/Cave1.png");
    cave2Image = loadAnimation("Images/Basement/Cave2.png");

    basement1Image = loadAnimation("Images/Basement/Basement1.jpg");
    basement2Image = loadAnimation("Images/Basement/Basement2.jpg");
    basement3Image = loadAnimation("Images/Basement/Basement3.jpg");
    basement4Image = loadAnimation("Images/Basement/Basement4.jpg");
    basement5Image = loadAnimation("Images/Basement/Basement5.jpg");

    missionIntroImage = loadAnimation("Images/Basement/missionBg2.png");

    smokeAnimation = loadAnimation("Images/Basement/smoke1.jpg", "Images/Basement/smoke2.jpg","Images/Basement/smoke3.jpg","Images/Basement/smoke4.jpg",
    "Images/Basement/smoke5.jpg","Images/Basement/smoke6.jpg");

    bulletR = loadAnimation("Images/Weapons/bulletR.png");
    bulletL = loadAnimation("Images/Weapons/bulletL.png");

    missileImage = loadAnimation("Images/vehicle/Missile1.png","Images/vehicle/Missile2.png","Images/vehicle/Missile3.png");

    stillBlood = loadAnimation("Images/Character/armydead8.png");

    armyBulletSound = createAudio("Sound/as.mp3");
    terroristBulletSound = createAudio("Sound/ts.mp3");

    terroristMachineImage = loadAnimation("Images/vehicle/terroristMachine2.png");

    TMFireImage = loadAnimation("Images/Weapons/gflame1.png","Images/Weapons/gflame2.png","Images/Weapons/gflame3.png",
    "Images/Weapons/gflame4.png","Images/Weapons/gflame5.png","Images/Weapons/gflame6.png");
    
    speakC1 = loadAnimation("Images/Meeting/speak.png");
    speakR1 = loadAnimation("Images/Meeting/speakingR1.png");
    mSpeak = loadAnimation("Images/Meeting/speakingC1.png");

    planeImage = loadAnimation("Images/vehicle/plane1.png", "Images/vehicle/plane2.png");

    TMSound = createAudio("Sound/BIGMACHINE.mp3");
    TMFBlastSound = createAudio("Sound/BIGMACHINEBLAST.mp3");
    MachineFall = createAudio("Sound/MachineFalling.mp3");
    missileSound = createAudio("Sound/missileSound.mp3");
    HelicopterStart = createAudio("Sound/HelicopterStart.mp3");
    HelicopterRun = createAudio("Sound/HelicopterRun.mp3");

    pm1 = createAudio("Sound/Dialogue/PM1.mp3");
    pm2 = createAudio("Sound/Dialogue/PM2.mp3");
    armySound = createAudio("Sound/Dialogue/Army.mp3");
    govind11 = createAudio("Sound/Dialogue/Govind11.mp3");
    govind12 = createAudio("Sound/Dialogue/Govind12.mp3");
    govind21 = createAudio("Sound/Dialogue/Govind21.mp3");
    govind22 = createAudio("Sound/Dialogue/Govind22.mp3");
    hc11 = createAudio("Sound/Dialogue/HC11.mp3");
    hc12 = createAudio("Sound/Dialogue/HC12.mp3");
    hc2 = createAudio("Sound/Dialogue/HC2.mp3");
    hc3 = createAudio("Sound/Dialogue/HC3.mp3");
    hc4 = createAudio("Sound/Dialogue/HC4.mp3");
    hc5 = createAudio("Sound/Dialogue/HC5.mp3");
    hd1 = createAudio("Sound/Dialogue/HD1.mp3");
    hd2 = createAudio("Sound/Dialogue/HD2.mp3");
    hd3 = createAudio("Sound/Dialogue/HD3.mp3");
    minister = createAudio("Sound/Dialogue/Minister.mp3");
    someoneIsThere = createAudio("Sound/Dialogue/SomeoneIsThere.mp3");
    terroristGate = createAudio("Sound/Dialogue/TerroristGate.mp3");
    notLeave = createAudio("Sound/Dialogue/We'llNotLeave.mp3");
    shootYou = createAudio("Sound/Dialogue/We'llShootYou.mp3");
    laugh = createAudio("Sound/Dialogue/laugh.mp3");
    gateBlast = createAudio("Sound/gateBlast.mp3");
    bombBlast = createAudio("Sound/bombBlast.mp3");
    luckyDay = createAudio("Sound/luckyDay.mp3");
    herioc = createAudio("Sound/Background/herioc.mp3");
    fallenHero = createAudio("Sound/Background/FallenHero.mp3");
    trouble = createAudio("Sound/Background/Trouble.mp3");
    josh1 = createAudio("Sound/Dialogue/howIsJosh1.mp3");
    josh2 = createAudio("Sound/Dialogue/howIsJosh2.mp3");
    janaGanaMana = createAudio("Sound/JanaGanaMana.mp3");
    parliament = createAudio("Sound/Background/parliament.mp3");
    parliament1 = createAudio("Sound/Background/parliament.mp3");
    victory1 = createAudio("Sound/Background/victory.mp3");
    victory2 = createAudio("Sound/Background/victory2.mp3");
    victory3 = createAudio("Sound/Background/victory.mp3");
    thankSound = createAudio("Sound/Background/thank.mp3");
    spikeSound = createAudio("Sound/spikeSound.mp3");

    crateImage = loadImage("Images/Basement/Crate.png");
    TCImage = loadAnimation("Images/Character/TC3.png","Images/Character/TC4.png");
    TC1Image = loadAnimation("Images/Character/TC1.png");

    health0 = loadAnimation("Images/Health/armyHealth/health0.png");
    health1 = loadAnimation("Images/Health/armyHealth/health1.png");
    health2 = loadAnimation("Images/Health/armyHealth/health2.png");
    health3 = loadAnimation("Images/Health/armyHealth/health3.png");
    health4 = loadAnimation("Images/Health/armyHealth/health4.png");
    health5 = loadAnimation("Images/Health/armyHealth/health5.png");
    health6 = loadAnimation("Images/Health/armyHealth/health6.png");
    health7 = loadAnimation("Images/Health/armyHealth/health7.png");
    health8 = loadAnimation("Images/Health/armyHealth/health8.png");
    health9 = loadAnimation("Images/Health/armyHealth/health9.png");
    health10 = loadAnimation("Images/Health/armyHealth/health10.png");
    health11 = loadAnimation("Images/Health/armyHealth/health11.png");
    health12 = loadAnimation("Images/Health/armyHealth/health12.png");
    health13 = loadAnimation("Images/Health/armyHealth/health13.png");
    health14 = loadAnimation("Images/Health/armyHealth/health14.png");
    health15 = loadAnimation("Images/Health/armyHealth/health15.png");

    Thealth0 = loadAnimation("Images/Health/enemyHealth/health_0.png");
    Thealth1 = loadAnimation("Images/Health/enemyHealth/health_1.png");
    Thealth2 = loadAnimation("Images/Health/enemyHealth/health_2.png");
    Thealth3 = loadAnimation("Images/Health/enemyHealth/health_3.png");
    Thealth4 = loadAnimation("Images/Health/enemyHealth/health_4.png");
    Thealth5 = loadAnimation("Images/Health/enemyHealth/health_5.png");
    Thealth6 = loadAnimation("Images/Health/enemyHealth/health_6.png");
    Thealth7 = loadAnimation("Images/Health/enemyHealth/health_7.png");
    Thealth8 = loadAnimation("Images/Health/enemyHealth/health_8.png");
    Thealth9 = loadAnimation("Images/Health/enemyHealth/health_9.png");
    Thealth10 = loadAnimation("Images/Health/enemyHealth/health_10.png");
    Thealth11 = loadAnimation("Images/Health/enemyHealth/health_11.png");
    Thealth12 = loadAnimation("Images/Health/enemyHealth/health_12.png");
    Thealth13 = loadAnimation("Images/Health/enemyHealth/health_13.png");
    Thealth14 = loadAnimation("Images/Health/enemyHealth/health_14.png");
    Thealth15 = loadAnimation("Images/Health/enemyHealth/health_15.png");
    Thealth16 = loadAnimation("Images/Health/enemyHealth/health_16.png");
    Thealth17 = loadAnimation("Images/Health/enemyHealth/health_17.png");
    Thealth18 = loadAnimation("Images/Health/enemyHealth/health_18.png");
    Thealth19 = loadAnimation("Images/Health/enemyHealth/health_19.png");
    Thealth20 = loadAnimation("Images/Health/enemyHealth/health_20.png");

    spikeImage = loadImage("Images/Weapons/spike.png");
    spikeBImage = loadImage("Images/Weapons/spikeBall.png");

    LAImage = loadAnimation("Images/Character/lastArmy.png");
    
    truckImage = loadAnimation("Images/vehicle/Truck.png");

    FBImage = loadAnimation("Images/Map/FB.png");
    flagImage  = loadAnimation("Images/flag.png");

    AS1Image = loadImage("Images/Character/AS1.png");
    AS2Image = loadImage("Images/Character/AS2.png");
    AS3Image = loadImage("Images/Character/AS3.png");
    AS4Image = loadImage("Images/Character/AS4.png");
    AS5Image = loadImage("Images/Character/AS5.png");

    thankYou = createVideo(["Video/thank1.mp4"]);
    thankYou.hide();

    thankImage = loadImage("Video/thank1.jpg");

    gameOver = loadImage("Images/gameOver.gif");

    instructionImage = loadImage("Images/Meeting/Instructions.png");

}
function setup(){
    createCanvas(windowWidth,windowHeight);
    
    bg1 = createSprite(width/2,height/2);
    bg1.addAnimation("bg1",bgImage1);
    bg1.addAnimation("bg2",bgImage2);
    bg1.addAnimation("meeting", meeting1);
    bg1.scale = 3;

    bg2 = createSprite(width/2, height/2);
    bg2.addImage(helipadImage);
    bg2.visible = false;

    missionBg = createSprite(width/2, height/2+250);
    missionBg.addAnimation("missionIntro", missionIntroImage);
    missionBg.addAnimation("cave1", cave1Image);
    missionBg.addAnimation("cave2", cave2Image);
    missionBg.addAnimation("basement1", basement1Image);
    missionBg.addAnimation("basement2", basement2Image);
    missionBg.addAnimation("basement3", basement3Image);
    missionBg.addAnimation("basement4", basement4Image);
    missionBg.addAnimation("basement5", basement5Image);   
    missionBg.visible = false;

    rope = createSprite(0,0);
    rope.addAnimation("rope", ropeImage);
    rope.visible = false;

    smoke = createSprite(width/2, width/2);
    smoke.addAnimation("smoke", smokeAnimation);
    smoke.visible = false;
    smoke.scale = 2;

    army = createSprite(50, 700);
    army.addAnimation("rope", armyRopeImage);
    army.addAnimation("Left", armyLeft);
    army.addAnimation("Right", armyRight);
    army.addAnimation("LeftStill", armyLeftStill);
    army.addAnimation("RightStill", armyRightStill);
    army.scale = 0.3;
    army.visible = false;

    army1 = createSprite(235,200);
    army1.addAnimation("rope", armyRopeImage);
    army1.addAnimation("Left", armyLeft);
    army1.addAnimation("Right", armyRight);
    army1.addAnimation("LeftStill", armyLeftStill);
    army1.addAnimation("RightStill", armyRightStill);
    army1.scale = 0.4;
    army1.visible = false;

    army2 = createSprite(width-300,0);
    army2.addAnimation("LeftStill", armyLeftStill);
    army2.addAnimation("Left", armyLeft);
    army2.addAnimation("Right", armyRight);  
    army2.addAnimation("RightStill", armyRightStill);
    army2.scale = 0.4;
    army2.visible = false;
    army2.setCollider("rectangle",70,0,200,430);

    army3 = createSprite(width,400);
    army3.addAnimation("LeftStill", armyLeftStill);
    army3.addAnimation("Left", armyLeft);
    army3.addAnimation("Right", armyRight);  
    army3.addAnimation("RightStill", armyRightStill);
    army3.scale = 0.4;
    army3.visible = false;
    army3.setCollider("rectangle",70,0,200,430);

    army4 = createSprite(1550,630);
    army4.addAnimation("LeftStill", armyLeftStill);
    army4.addAnimation("Left", armyLeft);
    army4.addAnimation("Right", armyRight);  
    army4.addAnimation("RightStill", armyRightStill);  
    army4.addAnimation("shootR", armyShootR);
    army4.addAnimation("shootL", armyShootL);
    army4.scale = 0.4;
    army4.visible = false;
    army4.setCollider("rectangle",70,0,200,430);
    
    army5 = createSprite(20,545);
    army5.addAnimation("RightStill", armyRightStill);
    army5.addAnimation("LeftStill", armyLeftStill);
    army5.addAnimation("Left", armyLeft);
    army5.addAnimation("Right", armyRight);
    army5.addAnimation("shootR", armyShootR);
    army5.addAnimation("shootL", armyShootL);
    army5.scale = 0.5;
    army5.visible = false;
    army5.setCollider("rectangle",-60,0,200,430);

    army7 = createSprite(25,620);
    army7.addAnimation("RightStill", armyRightStill);
    army7.addAnimation("LeftStill", armyLeftStill);
    army7.addAnimation("Left", armyLeft);
    army7.addAnimation("Right", armyRight);  
    army7.addAnimation("shootR", armyShootR);
    army7.addAnimation("shootL", armyShootL);
    army7.scale = 0.5;
    army7.visible = false;
    army7.setCollider("rectangle",-60,0,200,430);

    patrol1= createSprite(1200, 950);
    patrol1.addAnimation("patrol",patrolImage1);
    patrol1.addAnimation("dead",armyDeadA);
    patrol1.changeAnimation("patrol", patrolImage1);
    patrol1.setCollider("rectangle", -50,50,200,200);

    patrol2 = createSprite(1000, 830);
    patrol2.addAnimation("patrol",patrolImage2);
    patrol2.addAnimation("dead", armyDeadA);;
    patrol2.changeAnimation("patrol", patrolImage2);
    patrol2.scale = 0.8;

    terrorist = createSprite(2000 ,900);
    terrorist.addAnimation("Left", TImage);
    terrorist.addAnimation("Still", TLImage);
    terrorist.scale = 0.35;
    terrorist.setCollider("rectangle", 0,0,500,100)

    terrorist1 = createSprite(1250, height-250);
    terrorist1.addAnimation("HT", HTImage);
    terrorist1.addAnimation("dead", armyDeadA);
    terrorist1.addAnimation("sb", stillBlood);
    terrorist1.visible = false;
    terrorist1.scale = 0.28;

    terrorist11 = createSprite(1350, height-250);
    terrorist11.addAnimation("HT", HTImage);
    terrorist11.addAnimation("dead", armyDeadA);
    terrorist11.addAnimation("sb", stillBlood);
    terrorist11.visible = false;
    terrorist11.scale = 0.28;
    
    
    terrorist2 = createSprite(930, 645);
    terrorist2.addAnimation("T", TRImage);
    terrorist2.addAnimation("dead", armyDeadA);
    terrorist2.addAnimation("B", stillBlood);
    terrorist2.scale = 0.4;
    terrorist2.visible = false;

    terroristB1 = createSprite(0,0);
    terroristB1.addAnimation("B", stillBlood);
    terroristB1.visible = false;

    bombAtPatrol = createSprite(1345 ,905);
    bombAtPatrol.scale = 0.5;
    bombAtPatrol.addAnimation("bomb", bombA);
    bombAtPatrol.addAnimation("fire", flamebA);
    bombAtPatrol.visible = false;

    missile = createSprite(300, 150);
    missile.addAnimation("missile1", missileImage);
    missile.scale = 0.7;
    missile.visible = false;

    helicopter = createSprite(width/2, height-130);
    helicopter.addAnimation("Light",  helicopterWithLight);
    helicopter.addAnimation("NoLight", helicopterWithNoLight);
    helicopter.addAnimation("Still", helicopterStill);
    helicopter.addAnimation("shoot", helicopterShoot);
    helicopter.setCollider("rectangle", 150,0,350,200) 
    helicopter.scale = 0.8
    helicopter.visible = false;

    missileFlame = createSprite(300, 80);
    missileFlame.addAnimation("fire", flamebA);
    missileFlame.scale = 4;
    missileFlame.visible = false;  

    terroristMachine= createSprite(1155,0);
    terroristMachine.addAnimation("TM", terroristMachineImage);
    terroristMachine.addAnimation("fire", flamebA);
    terroristMachine.scale = 1.5;
    terroristMachine.setCollider("rectangle",0,0,150,230)
    terroristMachine.visible = false;

    PMSpeak = createSprite(670,110);
    PMSpeak.addAnimation("speak", speakC1);
    PMSpeak.scale = 0.25; 
    PMSpeak.visible = false;

    govindSpeak = createSprite(570,175);
    govindSpeak.addAnimation("speak", speakR1);
    govindSpeak.scale = 2; 
    govindSpeak.visible = false;

    ministerSpeak = createSprite(1290,165);
    ministerSpeak.addAnimation("speak", mSpeak);
    ministerSpeak.scale = 1.8; 
    ministerSpeak.visible = false;

    crate = createSprite(845,655);
    crate.addImage("box", crateImage);
    crate.visible = false;

    spike = createSprite(340,200);
    spike.addImage(spikeImage);
    spike.scale = 0.8;
    spike.setCollider("circle",0,0,65);
    spike.visible = false;

    spikeBall = createSprite(640,700);
    spikeBall.addImage(spikeBImage);
    spikeBall.scale = 0.8;
    spikeBall.setCollider("circle",0,0,65);
    spikeBall.visible = false;

    tc = createSprite(1000,600);
    tc.addAnimation("stand", TC1Image);
    tc.addAnimation("B", stillBlood);
    tc.scale = 0.5;
    tc.visible = false;

    plane = createSprite(width-300, 200);
    plane.addAnimation("fly", planeImage);
    plane.scale = 1.2;
    plane.visible = false;

    armyHealthBar = createSprite(170,45);
    armyHealthBar.addAnimation("0", health0);
    armyHealthBar.addAnimation("1", health1);
    armyHealthBar.addAnimation("2", health2);
    armyHealthBar.addAnimation("3", health3);
    armyHealthBar.addAnimation("4", health4);
    armyHealthBar.addAnimation("5", health5);
    armyHealthBar.addAnimation("6", health6);
    armyHealthBar.addAnimation("7", health7);
    armyHealthBar.addAnimation("8", health8);
    armyHealthBar.addAnimation("9", health9);
    armyHealthBar.addAnimation("10", health10);
    armyHealthBar.addAnimation("11", health11);
    armyHealthBar.addAnimation("12", health12);
    armyHealthBar.addAnimation("13", health13);
    armyHealthBar.addAnimation("14", health14);
    armyHealthBar.addAnimation("15", health15);
    armyHealthBar.scale = 0.5;
    armyHealthBar.visible = false;

    THealthBar = createSprite(width-120,45);
    THealthBar.addAnimation("0", Thealth0);
    THealthBar.addAnimation("1", Thealth1);
    THealthBar.addAnimation("2", Thealth2);
    THealthBar.addAnimation("3", Thealth3);
    THealthBar.addAnimation("4", Thealth4);
    THealthBar.addAnimation("5", Thealth5);
    THealthBar.addAnimation("6", Thealth6);
    THealthBar.addAnimation("7", Thealth7);
    THealthBar.addAnimation("8", Thealth8);
    THealthBar.addAnimation("9", Thealth9);
    THealthBar.addAnimation("10", Thealth10);
    THealthBar.addAnimation("11", Thealth11);
    THealthBar.addAnimation("12", Thealth12);
    THealthBar.addAnimation("13", Thealth13);
    THealthBar.addAnimation("14", Thealth14);
    THealthBar.addAnimation("15", Thealth15);
    THealthBar.addAnimation("16", Thealth16);
    THealthBar.addAnimation("17", Thealth17);
    THealthBar.addAnimation("18", Thealth18);
    THealthBar.addAnimation("19", Thealth19);
    THealthBar.addAnimation("20", Thealth20);
    THealthBar.visible = false;

    lastArmy1 = createSprite(820, 685);
    lastArmy1.addAnimation("army", LAImage);
    lastArmy1.scale = 0.4;
    lastArmy1.visible = false;

    lastArmy2 = createSprite(940, 685);
    lastArmy2.addAnimation("army", LAImage);
    lastArmy2.scale = 0.4;
    lastArmy2.visible = false;

    truck = createSprite(1350,600);
    truck.addAnimation("truck", truckImage);
    truck.scale = 0.7;
    truck.visible = false;

    bgf = createSprite(width/2, height/2);
    bgf.addAnimation("FB",FBImage);
    bgf.visible = false;

    flag = createSprite(width/2, height-300);
    flag.addAnimation("flag", flagImage);
    flag.visible = false;

    as1 = createSprite(280,560);
    as1.addImage(AS1Image);
    as1.visible = false;
    as1.scale = 0.8;

    as2 = createSprite(450,565);
    as2.addImage(AS2Image);
    as2.visible = false;
    as2.scale = 0.8;

    as3 = createSprite(1300,570);
    as3.addImage(AS3Image);
    as3.visible = false;
    as3.scale = 0.8;

    as4 = createSprite(600,560);
    as4.addImage(AS4Image);
    as4.visible = false;
    as4.scale = 0.8;

    as5 = createSprite(980,580);
    as5.addImage(AS5Image);
    as5.visible = false;
    as5.scale = 0.65;

    bullet1Group = new Group();
    bullet2Group = new Group();
    bullet3Group = new Group();

    tBullet1 = new Group();
    tBullet2 = new Group();
    tMachine1 = new Group();
    tMachine2 = new Group();
    tMachine3 = new Group();

    setInterval(timeIt, 1000);
    angleMode(DEGREES);
    
}
function draw(){
    background("lightgreen");
    drawSprites();
    frameRate(60);

    if(timerValue <= 0 && gameState == "Mission"){
        workState = "GameOver";
    }

    if(health <= 0){
        workState = "GameOver";
    }

    switch(health){
        case 15: armyHealthBar.changeAnimation("15", health15);
        break;
        case 14: armyHealthBar.changeAnimation("14", health14);
        break;
        case 13: armyHealthBar.changeAnimation("13", health13);
        break;
        case 12: armyHealthBar.changeAnimation("12", health12);
        break;
        case 11: armyHealthBar.changeAnimation("11", health11);
        break;
        case 10: armyHealthBar.changeAnimation("10", health10);
        break;
        case 9: armyHealthBar.changeAnimation("9", health9);
        break;
        case 8: armyHealthBar.changeAnimation("8", health8);
        break;
        case 7: armyHealthBar.changeAnimation("7", health7);
        break;
        case 6: armyHealthBar.changeAnimation("6", health6);
        break;
        case 5: armyHealthBar.changeAnimation("5", health5);
        break;
        case 4: armyHealthBar.changeAnimation("4", health4);
        break;
        case 3: armyHealthBar.changeAnimation("3", health3);
        break;
        case 2: armyHealthBar.changeAnimation("2", health2);
        break;
        case 1: armyHealthBar.changeAnimation("1", health1);
        break;
        case 0: armyHealthBar.changeAnimation("0", health0);
        break;
        default:break;
    }

    switch(Thealth){
        case 20: THealthBar.changeAnimation("20",Thealth20);
        break;
        case 19: THealthBar.changeAnimation("19",Thealth19);
        break;
        case 18: THealthBar.changeAnimation("18",Thealth18);
        break;
        case 17: THealthBar.changeAnimation("17",Thealth17);
        break;
        case 16: THealthBar.changeAnimation("16",Thealth16);
        break;
        case 15: THealthBar.changeAnimation("15",Thealth15);
        break;
        case 14: THealthBar.changeAnimation("14",Thealth14);
        break;
        case 13: THealthBar.changeAnimation("13",Thealth13);
        break;
        case 12: THealthBar.changeAnimation("12",Thealth12);
        break;
        case 11: THealthBar.changeAnimation("11",Thealth11);
        break;
        case 10: THealthBar.changeAnimation("10",Thealth10);
        break;
        case 9: THealthBar.changeAnimation("9",Thealth9);
        break;
        case 8: THealthBar.changeAnimation("8",Thealth8);
        break;
        case 7: THealthBar.changeAnimation("7",Thealth7);
        break;
        case 6: THealthBar.changeAnimation("6",Thealth6);
        break;
        case 5: THealthBar.changeAnimation("5",Thealth5);
        break;
        case 4: THealthBar.changeAnimation("4",Thealth4);
        break;
        case 3: THealthBar.changeAnimation("3",Thealth3);
        break;
        case 2: THealthBar.changeAnimation("2",Thealth2);
        break;
        case 1: THealthBar.changeAnimation("1",Thealth1);
        break;
        case 0: THealthBar.changeAnimation("0",Thealth0);
        break;
    }

    if(gameState == "Intro"){
        terroristIntro();          
    }
    if(gameState == "Meeting"){
        meeting(); 
        trouble.stop();
    }
    if(gameState == "Helicopter"){
        victory1.stop();
        Helicopter();
        keyPressed();
    }
    if(gameState == "HelicopterOverTheMap"){
        helicopterOverTheMap();
        image(helicopterGif, width/2-100, height-200);
    }
    if(gameState == "Mission"){
        mission();
        if(workState == "Rope"){
        army1KeyPressed();
        }else if(workState == "Cave1"){
            herioc.play();
            armyHealthBar.visible = true;
            push();
            textSize(22.5);
            fill("red");
            stroke("red");
            text("Army:",5,50);
            pop();
            army2KeyPressed();
        }else if(workState == "Cave2"){
            herioc.play();
            armyHealthBar.visible = true;
            push();
            textSize(22.5);
            fill("red");
            stroke("red");
            text("Army:",5,50);
            pop();
            army3KeyPressed();
        }else if(workState == "Basement1"){
            herioc.play();
            armyHealthBar.visible = true;
            push();
            textSize(22.5);
            fill("red");
            stroke("red");
            text("Army:",5,50);
            pop();
            army4KeyPressed();
        }else if(workState == "Basement2"){
            herioc.play();
            armyHealthBar.visible = true;
            push();
            textSize(22.5);
            fill("red");
            stroke("red");
            text("Army:",5,50);
            pop();
            army5KeyPressed();
        }else if(workState == "Basement4"){
            herioc.stop();
            armyHealthBar.visible = true;        
            textSize(22.5);
            fill("red");
            stroke("red");
            strokeWeight(1);
            text("Army:",5,50);
            TMSound.play();
            army7KeyPressed();
        }else if(workState == "GameOver"){
            herioc.stop();
            fallenHero.play();
        }
    }  
}

function keyPressed(){

    if(keyDown(LEFT_ARROW)){
        army.x += -10;
        army.changeAnimation("Left", armyLeft)
    }else if(keyWentUp(LEFT_ARROW)){
        army.changeAnimation("LeftStill", armyLeftStill);
    }
    if(keyDown(RIGHT_ARROW)){
        army.x +=10;
        army.changeAnimation("Right", armyRight);
    }else if(keyWentUp(RIGHT_ARROW)){
        army.changeAnimation("RightStill", armyRightStill);
    }
}

function helicopterKeyPressed(){
    
    if(keyDown(UP_ARROW)){
        helicopter.velocityY = -5;
        helicopter.scale = helicopter.scale - 0.005;
    }else if(keyWentUp(UP_ARROW)){
        helicopter.velocityY = 0;
    }
    if(keyDown(DOWN_ARROW)){
        helicopter.velocityY = 5;
        helicopter.scale = helicopter.scale + 0.005;
    }else if(keyWentUp(DOWN_ARROW)){
        helicopter.velocityY = 0;
    }
}
function army1KeyPressed(){
    if(keyDown("LEFT_ARROW")){
        army1.x += -10;
        army1.changeAnimation("Left", armyLeft)
    }else if(keyWentUp("LEFT_ARROW")){
        army1.changeAnimation("LeftStill", armyLeftStill);
    }
    if(keyDown('RIGHT_ARROW')){
        army1.x +=10;
        army1.changeAnimation("Right", armyRight);
    }else if(keyWentUp(RIGHT_ARROW)){
        army1.changeAnimation("RightStill", armyRightStill);
    }
    if(keyDown('UP_ARROW')){
        army1.y +=-20;
    }
}

function army2KeyPressed(){
    if(keyDown("LEFT_ARROW")){
        army2.x += -10;
        army2.changeAnimation("Left", armyLeft)
    }else if(keyWentUp("LEFT_ARROW")){
        army2.changeAnimation("LeftStill", armyLeftStill);
    }
    if(keyDown('RIGHT_ARROW')){
        army2.x +=10;
        army2.changeAnimation("Right", armyRight);
    }else if(keyWentUp(RIGHT_ARROW)){
        army2.changeAnimation("RightStill", armyRightStill);
    }
    if(keyDown('UP_ARROW')){
        army2.y +=-20;
    }
}
function army3KeyPressed(){
    if(keyDown("LEFT_ARROW")){
        army3.x += -10;
        army3.changeAnimation("Left", armyLeft)
    }else if(keyWentUp("LEFT_ARROW")){
        army3.changeAnimation("LeftStill", armyLeftStill);
    }
    if(keyDown('RIGHT_ARROW')){
        army3.x +=10;
        army3.changeAnimation("Right", armyRight);
    }else if(keyWentUp(RIGHT_ARROW)){
        army3.changeAnimation("RightStill", armyRightStill);
    }
    if(keyDown('UP_ARROW')){
        army3.y +=-20;
    }
}
function army4KeyPressed(){
    if(keyDown("LEFT_ARROW")){
        army4.x += -10;
        army4.changeAnimation("Left", armyLeft)
    }else if(keyWentUp("LEFT_ARROW")){
        army4.changeAnimation("LeftStill", armyLeftStill);
    }
    if(keyDown('RIGHT_ARROW')){
        army4.x +=10;
        army4.changeAnimation("Right", armyRight);
    }else if(keyWentUp(RIGHT_ARROW)){
        army4.changeAnimation("RightStill", armyRightStill);
    }
    if(keyDown('UP_ARROW')){
        army4.y +=-20;
    }
}
function army5KeyPressed(){
    if(keyDown("LEFT_ARROW")){
        army5.x += -10;
        army5.changeAnimation("Left", armyLeft)
    }else if(keyWentUp("LEFT_ARROW")){
        army5.changeAnimation("LeftStill", armyLeftStill);
    }
    if(keyDown('RIGHT_ARROW')){
        army5.x +=10;
        army5.changeAnimation("Right", armyRight);
    }else if(keyWentUp(RIGHT_ARROW)){
        army5.changeAnimation("RightStill", armyRightStill);
    }
    if(keyDown('UP_ARROW')){
        army5.y +=-20;
    }
}
function army7KeyPressed(){
    if(keyDown("LEFT_ARROW")){
        army7.x += -10;
        army7.changeAnimation("Left", armyLeft)
    }else if(keyWentUp("LEFT_ARROW")){
        army7.changeAnimation("LeftStill", armyLeftStill);
    }
    if(keyDown('RIGHT_ARROW')){
        army7.x +=10;
        army7.changeAnimation("Right", armyRight);
    }else if(keyWentUp(RIGHT_ARROW)){
        army7.changeAnimation("RightStill", armyRightStill);
    }if(keyDown(UP_ARROW) && army7.y>400){
        army7.y +=-40;
    }   
}
function terroristIntro(){
    trouble.play();
    trouble.volume(0.5);
    camera.position.x = 1300;
    camera.position.y = 850;

    terrorist.velocityY = 0;
    terrorist.velocityX = -5
    terrorist.changeAnimation("Left", TImage);

    if(terrorist.isTouching(patrol1)){
        terrorist.velocityX = 0;
        terrorist.changeAnimation("Still", TLImage);

        if(dialogue == "0"){
            luckyDay.play();
            luckyDay.addCue(1.2, dialogue0);
        }
        fill("black")
        rect(camera.position.x-185, camera.position.y+330,370,30);
        fill("white");
        textSize(20);
        text("Press Enter To See What Happen Next",camera.position.x-170, camera.position.y+350);
    }
    
    if(keyDown("Enter")){
        bombAtPatrol.visible = true;
        bombAtPatrol.velocityX = -5;
        bombAtPatrol.changeAnimation("bomb", bombA);
    }
    if(bombAtPatrol.isTouching(patrol2)){
        terrorist.visible = false;
        bombBlast.play();
        bombAtPatrol.velocityX = 0;
        bombAtPatrol.changeAnimation("fire", flamebA);
        bombAtPatrol.x = 1200;
        bombAtPatrol.y = 950;
        bombAtPatrol.scale = 3;
        patrol1.changeAnimation("dead", armyDeadA);
        patrol1.x = 1120;
        patrol1.y = 1050;
        patrol2.changeAnimation("dead", armyDeadA);
        patrol2.x = 1020;
        patrol2.y = 850;
        setTimeout(destroy,1000); 
    }
    function destroy(){
        terrorist.destroy();
        patrol1.destroy();
        patrol2.destroy();
        bombAtPatrol.destroy();
        gameState = "Meeting";
    }
}
function dialogue0(){
    dialogue = "1";
}
function dialogue1(){
    dialogue = "2";
}
function dialogue2(){
    dialogue = "3";
}
function dialogue3(){
    dialogue = "4";
}
function dialogue4(){
    dialogue = "5";
}
function dialogue5(){
    dialogue = "6";
}
function dialogue6(){
    dialogue = "7";
}
function dialogue7(){
    dialogue = "8";
}
function dialogue8(){
    dialogue = "uri";
    gameState = "Helicopter";
    fade = 400;
}
function Uri(){
    dialogue = "9"
}
function dialogue9(){
    dialogue = "10";
}
function dialogue10(){
    dialogue = "11";
}
function dialogue11(){
    dialogue = "12";
}
function dialogue12(){
    dialogue = "13";
}
function dialogue13(){
    dialogue = "14";
}
function dialogue14(){
    dialogue = "15";
}
function dialogue15(){
    dialogue = "16";
}
function dialogue16(){
    dialogue = "17";
}
function dialogue17(){
    dialogue = "18";
}
function dialogue18(){
    dialogue = "19";
}
function dialogue19(){
    dialogue = "20";
}
function dialogue20(){
    dialogue = "21";
}
function dialogue21(){
    dialogue = "22";
}
function dialogue22(){
    dialogue = "23";
}
function dialogue23(){
    dialogue = "24";
}
function dialogue24(){
    dialogue = "25";
    workState = "missionFinish";
}
function dialogue25(){
    dialogue = "26";
}
function dialogue26(){
    dialogue = "27";
}
function dialogue27(){
    dialogue = "28";
}
function dialogue28(){
    dialogue = "29";
}
function dialogue29(){
    dialogue = "30";
}
function dialogue30(){
    dialogue = "31";
}

function meeting(){

    bg1.changeAnimation("meeting", meeting1);
    bg1.x = width/2;
    bg1.y = height/2;
    camera.position.x = width/2;
    camera.position.y = height/2;
    bg1.scale = 1;

    if(dialogue == "1"){
        fill(0,0,0,fade);
        rect(0,0, width, height);
        fade -= 0.5;
        parliament.play();
        parliament.addCue(12, dialogue1)
    }
    if(fade > 200){
        
        fill("white");
        stroke("White");
        strokeWeight(2);
        textSize(150);
        text("Parliament", 400, 350);
        textSize(110);
        text("of India", 580, 500);
    }

    if(dialogue=="2"){
        parliament1.play();
        pm1.play();
        pm1.addCue(10.2, dialogue2);

        PMSpeak.visible = true;

        textSize(18);
        textFont('Georgia')
        fill("red");
        stroke("red");
    
        text("Terrorists from Pakistan", 572,40);
        textSize(17.5);
        text("are continuously attacking", 569,62.5);
        textSize(20);
        text("India.", 635,88);
        textSize(17);
        text("If we don't respond to them",567,110);
        text("then,our citizens will lose",573,130);
        textSize(18)
        text("faith in us.",620,150);
    }
    if(dialogue == "3"){
        parliament1.stop();
        pm2.play();
        pm2.addCue(1.6, dialogue3);

        textFont('Georgia')
        fill("red");
        stroke("red");
        textSize(25);

        text("Govind,", 625,55);
        text("what are you", 600,90);
        text("thinking?", 625,125);
    }
    if(dialogue == "4"){
        victory1.play();
        PMSpeak.visible = false;
        govind11.play();
        govind11.addCue(16, dialogue4);

        govindSpeak.visible = true;

        textFont('Georgia')
        fill("#000000");
        stroke("#000000");
        strokeWeight(1);
        textSize(18);

        text("Surgical Strike, Sir. Surgical Strike", 440,115);
        text("We'll enter PoK and destroy all", 440, 140);
        text("their terrorist launch pad, handlers,", 440, 165);
        text("and guides. See there is a point.", 440,190);
        text("Pakistan never accept the fact that", 440, 215);
        text("the terrorists are from their country.", 440, 240);    
    }
    if(dialogue == "5"){
        govind11.stop();
        govind12.play();
        govind12.addCue(16, dialogue5);
        govindSpeak.scale = 2.15

        textFont('Georgia')
        fill("#000000");
        stroke("#000000");
        strokeWeight(1);
        textSize(18);

        text("And if we knock down the terrorist",424,115);
        text("then, Pakistan can't raise its voice",424,140);
        text("against us.There will be no war between",424,165);
        text("us and no international pressure.", 424,190);
        text("Most importantly, this is the right",424,215);
        text("opportunity to take revenge for URI.", 424, 240);
    }
    if(dialogue == "6"){
        minister.play();
        minister.addCue(6.5,dialogue6);
        govindSpeak.visible = false;

        ministerSpeak.visible = true;

        textFont('Georgia')
        fill("#000000");
        stroke("#000000");
        strokeWeight(1);
        textSize(25);

        text("It's easy.", 1250,100);
        textSize(20);
        text("We can destroy some of their", 1170,130);
        text("bunkers on LOC", 1220,160);
        text("with jet fighters.", 1220,190);
    }
    if(dialogue == "7"){

        govind21.play();
        govind21.addCue(18,dialogue7);

        ministerSpeak.visible = false;
        govindSpeak.visible = true;
        govindSpeak.scale = 2.2;

        textFont('Georgia')
        fill("#000000");
        stroke("#000000");
        strokeWeight(1);
        textSize(17);

        text("When terrorists had attacked the athletes", 410,90);
        text("in Israel, they didn't only send the missiles", 410, 120);
        text("but also planned \"The Wrath of God.\" They ", 410, 150);
        text("had searched the location of each terrorist", 410,180);
        text("and killed them. In the history of India,", 410, 210);
        text("we have never attacked any nation first.", 410, 240);
    }

    if(dialogue == "8"){

        govind22.play();
        govind22.addCue(16.2,dialogue8);

        textFont('Georgia')
        fill("#000000");
        stroke("#000000");
        strokeWeight(1);
        textSize(17);

        text("And Pakistan has always been taking", 410,90);
        text("advantage of our patience.", 410, 120);
        text("In fact Sir, our tolerance is interpreted as", 410, 150);
        text("our weakness. Now India won't keep quiet.", 410,180);
        text("This is new India.", 410, 210);
        text("We'll kill them in their own land.", 410, 240);
    }
}
function Helicopter(){
    PMSpeak.remove();
    ministerSpeak.remove();
    govindSpeak.remove();
    bg2.visible = true;
    army.visible = true;
    camera.position.x = width/2;
    camera.position.y = height/2;      
    helipadImage.resize(windowWidth, windowHeight);
    helicopter.visible = true; 
    helicopter.changeAnimation("Still", helicopterStill);
    var rect1 = createSprite(width/2, height, width, 50);
    rect1.visible = false; 

    if(dialogue == "uri"){
        push();
        victory2.play();
        victory2.addCue(12.5, Uri);
        fill(0,0,0,fade);
        rect(0,0, width, height);
        fade -= 0.5;
        pop();
    }
    if(fade > 200){        
        push(); 
        strokeWeight(7);
        textSize(250);
        stroke("orange");
        fill("orange");
        text("URI", 570, 300);
        textSize(150);
        stroke("lightgreen");
        fill("lightgreen");
        text("The Surgical Strike", 150, 500);
        pop();
    }

    if(dialogue == "9"){
        victory2.stop();
        victory3.play();
        hc11.play();
        hc11.addCue(1.5, dialogue9);
        
    }
    if(fade < 100){
        if(!army.isTouching(helicopter)){
            push();
            fill("black")
            rect(width/2-45,height-45,225, 27)
            fill("white");
            textSize(20);
            text("Press Right Arrow Key", width/2-30, height-25);
            pop();
        }
    }
    if(army.isTouching(helicopter)){
        HelicopterStart.play();
        army.visible = false;
        army.x = helicopter.x;
        army.y = helicopter.y;
        army.scale = 0;
        HelicopterStart.play();
        
        push();
        fill("black")
        rect(width/2-20,height-45,200, 27)
        fill("white");
        textSize(20);
        text("Press UP Arrow key", width/2-10, height-25);
        pop();

        helicopter.changeAnimation("Light", helicopterWithLight);
        helicopterKeyPressed();
    }
    if(helicopter.isTouching(rect1)){
        helicopter.velocityY = 0;
        helicopter.scale = 0.8;
    }
    if(helicopter.y < -15){
        gameState = "HelicopterOverTheMap";
        rect1.remove();
        bg2.remove();
        HelicopterStart.stop();
    }
}
function helicopterOverTheMap(){

    HelicopterRun.play();

    if(dialogue == "10"){
        hc12.play();
        hc12.addCue(1.5, dialogue10);
        HelicopterRun.volume(0.1);
    }

    bg1.changeAnimation("bg2",bgImage2);
    var bg = true;
    var x = bg1.scale;

    if(bg == true){
        bg.scale = 4;
        
    }
    if(bg1.scale > 2){
        push();
        fill("black")
        rect(width/2-82,height-25,120, 15)
        fill("white")
        text("Press W to lauch it",camera.position.x-70, camera.position.y+380);
        pop();
    }

    if(keyDown("w")){
        
        bg = false;
        if(bg == false && bg1.scale != 2){
        }
        bg1.scale = bg1.scale - 0.01;
        if(x <= 2){
            bg = "2"
        }
    }
    if(bg == "2"){
        bg1.scale = 2;
        if(dialogue == 11){
            hc2.play();
            hc2.addCue(3.2,dialogue11);
        }
    }
    
    if(bg1.y < 2315 && bg1.scale == 2){

        if(dialogue == "12"){
            hd1.play();
            hd1.addCue(0.65, dialogue12);
        }
        push();
        fill("black")
        rect(width/2-85,height-25,100, 15)
        fill("white")
        text("Go straight",camera.position.x-70, camera.position.y+380);
        pop();

        if(keyDown(UP_ARROW)){
            bg1.y += 20;
            HelicopterRun.volume(1.0);
        }
    }
    if(bg1.y >= 2315 && bg1.x >= -4500){

        if(dialogue == "13"){
            hd2.play();
            hd2.addCue(1.8, dialogue13);
        }

        push();
        fill("black")
        rect(width/2-130,height-25,200, 15)
        fill("white")
        text("There is sea. Go in right direction.",camera.position.x-120, camera.position.y+380);
        pop();

        if(keyDown(UP_ARROW)){
            bg1.y += 0;
        }
        if(keyDown(RIGHT_ARROW)){
            bg1.x -= 20;
        }
    }
    if(bg1.x <= -4500){
        if(dialogue == "14"){
            hd3.play();
            hd3.addCue(1, dialogue14);
        }
        push();
        fill("black")
        rect(width/2-100,height-25,150, 15)
        fill("white")
        text("Move forward in Pok.",camera.position.x-80, camera.position.y+380);
        pop();

        if(keyDown(UP_ARROW)){
            bg1.y += 20;
        }
        if(keyDown(RIGHT_ARROW)){
            bg1.x -= 0;
        }
    }
    if(bg1.y >3050){
        gameState = "Mission";
        HelicopterRun.stop();
        victory3.stop();
        timerValue = 500;
    }
}

function mission(){
    bg1.remove();
    bg2.remove();
    patrol1.remove();
    patrol2.remove();
    camera.position.x = width/2;
    camera.position.y = height/2;
    helicopter.visible = true;
    missionBg.visible = true;
    helicopter.scale = 0.5;
    helicopter.x = 200;
    helicopter.y = 100;
    missileFlame.x = missile.x+25;
    missileFlame.y = missile.y;
    smoke.x = missileFlame.x;
    smoke.y = missileFlame.y-200;
    terroristB1.x = terrorist1.x;
    terroristB1.y = terrorist1.y+50;
    
    if(workState == "Entry"){
        HelicopterStart.play();
        

    if(terrorist1.x == 1250){
        terrorist1.velocityX = -5;
        terrorist1.visible = true;

        terrorist11.visible = true;
        terrorist11.x = terrorist1.x+100;
    }

    if(terrorist1.x <= 1200){

        terrorist1.velocityX = 0;
        if(dialogue == "15"){
            someoneIsThere.play();
            someoneIsThere.addCue(2.2, dialogue15);
            HelicopterStart.volume(0.1);
        }
        if(dialogue == "16"){
            HelicopterStart.volume(0.1);
            shootYou.play();
            shootYou.addCue(7.5, dialogue16);
        }        
        if(dialogue == "17"){
            hc3.play();
            hc3.addCue(2, dialogue17);
            HelicopterStart.volume(0.1);
        }

        if(dialogue == "18"){
            push();
            fill("black");
            rect(width/2-80,height-25,150, 15);
            fill("white")
            text("Press M to throw Missile",camera.position.x-70, camera.position.y+380);
            pop();
        }

        }
        if(keyDown("m")){
            helicopter.changeAnimation("shoot", helicopterShoot);
            missile.visible = true;
        
        }else if(keyWentUp("m")){
            helicopter.changeAnimation("Light",  helicopterWithLight);
            missile.velocityY = 15;
            missile.velocityX = 30;
            missileSound.play();
        }
        if(missile.x > 1200){
            missile.velocityY = 0;
            missile.velocityX = 0;
        }
        if(missile.isTouching(terrorist1)){
            missile.visible = false;
            missileFlame.visible = true;
            smoke.visible = true;
            terrorist1.changeAnimation("dead", armyDeadA);
            terrorist1.scale = 1.5;
            terrorist11.visible = false
            setTimeout(missileFlameHide, 1000);
            setTimeout(smokeHide, 1000);     
            setTimeout(terroristDeadB, 1000);
            setTimeout(terroristDeadBHide, 7000);      
        }
    }
    if(workState == "Rope"){
        HelicopterStart.play();

        army.destroy();
        terrorist11.destroy();
        terrorist11.destroy();
        bombAtPatrol.destroy();
        missile.destroy();
        
        var road1 = createSprite(150,635,750,20);
        var road2 = createSprite(625,630,170,80);
        var road3 = createSprite(700,623,50,50);
        var road4 = createSprite(720,650,50,50);
        var road5 = createSprite(730,660,50,50);
        var road6 = createSprite(740,670,50,50);
        var road7 = createSprite(755,680,50,50);
        var road8 = createSprite(770,690,50,50);
        var road9 = createSprite(785,700,50,50);
        var road10 = createSprite(800,710,50,50);
        var road11 = createSprite(815,720,50,50);
        var road12 = createSprite(870,720,80,50);
        var road13 = createSprite(890,730,50,50);
        var road14 = createSprite(900,740,50,50);
        var road15 = createSprite(910,745,50,50);
        var road16 = createSprite(915,750,50,50);
        var road17 = createSprite(925,760,50,50);
        var road18 = createSprite(960,768,80,50);
        var road19 = createSprite(1000,780,50,50);
        var road20 = createSprite(1030,790,50,50);
        var road21 = createSprite(1100,805,100,50);
        var road22 = createSprite(560,640,70,50);

        road1.visible = false;
        road2.visible = false;
        road3.visible = false;
        road4.visible = false;
        road5.visible = false;
        road6.visible = false;
        road7.visible = false;
        road8.visible = false;
        road9.visible = false;
        road10.visible = false;
        road11.visible = false;
        road12.visible = false;
        road13.visible = false;
        road14.visible = false;
        road15.visible = false;
        road16.visible = false;
        road17.visible = false;
        road18.visible = false;
        road19.visible = false;
        road20.visible = false;
        road21.visible = false;
        road22.visible = false;

        rope.x = helicopter.x+45;
        rope.y = helicopter.y+260;
        rope.visible = true;
        army1.visible = true;
        army1.velocityY = 5;

        if(army1.isTouching(road1)){
            army1.velocityY = 0;
            army1.changeAnimation("RightStill", armyRightStill);
            if(dialogue == "19"){
                hc5.play();
                hc5.addCue(10.5, dialogue19);
                HelicopterStart.volume(0.1);
            }
        }
        if(dialogue == "20"){
            image(instructionImage,1200,100);
        }
        
        if(army1.isTouching(road21)||army1.isTouching(road2)||army1.isTouching(road3)
        ||army1.isTouching(road4)||army1.isTouching(road5)||army1.isTouching(road6)
        ||army1.isTouching(road7)||army1.isTouching(road8)||army1.isTouching(road9)
        ||army1.isTouching(road10)||army1.isTouching(road11)||army1.isTouching(road12)
        ||army1.isTouching(road13)||army1.isTouching(road14)||army1.isTouching(road15)
        ||army1.isTouching(road16)||army1.isTouching(road17)||army1.isTouching(road18)
        ||army1.isTouching(road19)||army1.isTouching(road20)
        ){
            army1.velocityY = 0;
            
            if(keyDown(LEFT_ARROW)){
                army1.x += 10;
            }
        }
        if(army1.isTouching(road22)){

            if(keyDown(RIGHT_ARROW)){
                army1.x -= 10;
            }
        }
        if(army1.y >= height){
            workState = "Cave1";
            HelicopterStart.stop();      
        }
    }

    if(workState == "Cave1"){

        helicopter.remove();
        rope.remove();
        missile.remove();
        army1.remove();

        missionBg.changeAnimation("cave1", cave1Image);
        missionBg.x = width/2;
        missionBg.y = height/2;

        army2.velocityY = 15;
        army2.visible = true;

        var road1 = createSprite(1020, 790, 400,25);
        var road2 = createSprite(1495, 300, 25,800);
        var road3 = createSprite(1435, 540, 25,100);
        var road4 = createSprite(1460, 510, 50,50);
        var road5 = createSprite(1470, 500, 50,50);
        var road6 = createSprite(1480, 490, 50,50);
        var road7 = createSprite(1430, 615, 50,50);
        var road8 = createSprite(1420, 625, 50,50);
        var road9 = createSprite(1410, 635, 50,50);
        var road10 = createSprite(1395, 645, 50,50);
        var road11 = createSprite(1385, 655, 50,50);
        var road12 = createSprite(1370, 665, 50,50);
        var road13 = createSprite(1355, 675, 50,50);
        var road14= createSprite(1340, 685, 50,50);
        var road15= createSprite(1325, 695, 50,50);
        var road16 = createSprite(1310, 705, 50,50);
        var road17 = createSprite(1295, 715, 50,50);
        var road18 = createSprite(1280, 725, 50,50);
        var road19 = createSprite(1265, 735, 50,50);
        var road20 = createSprite(1250, 745, 50,50);
        var road21 = createSprite(1235, 755, 50,50);
        var road22 = createSprite(775, 775, 50,50);
        var road23 = createSprite(755, 755, 50,25);
        var road24 = createSprite(350, 745, 850,20);
        var road25 = createSprite(width/2,140,width,20);

        road1.visible = false;
        road2.visible = false;
        road3.visible = false;
        road4.visible = false;
        road5.visible = false;
        road6.visible = false;
        road7.visible = false;
        road8.visible = false;
        road9.visible = false;
        road10.visible = false;
        road11.visible = false;
        road12.visible = false;
        road13.visible = false;
        road14.visible = false;
        road15.visible = false;
        road16.visible = false;
        road17.visible = false;
        road18.visible = false;
        road19.visible = false;
        road20.visible = false;
        road21.visible = false;
        road22.visible = false;
        road23.visible = false;
        road24.visible = false;
        road25.visible = false;

        spike.visible = true;
        spikeBall.visible = true;
        spikeSound.volume(0.4);

        if(spike.isTouching(road25)){
            spike.velocityY = 20;
            spikeSound.play();
        }
        if(spike.isTouching(road24)){
            spike.velocityY = -20;
            spikeSound.play();
        }
        if(army2.isTouching(spike)||army2.isTouching(spikeBall)){
            health = 0;
        }
        
        if(army2.y < 400){
            army2.velocityY = 20;
        }

        if(army2.isTouching(road1)||army2.isTouching(road2)||army2.isTouching(road3)
        ||army2.isTouching(road4)||army2.isTouching(road5)||army2.isTouching(road6)
        ||army2.isTouching(road7)||army2.isTouching(road8)||army2.isTouching(road9)
        ||army2.isTouching(road10)||army2.isTouching(road11)||army2.isTouching(road12)
        ||army2.isTouching(road13)||army2.isTouching(road14)||army2.isTouching(road15)
        ||army2.isTouching(road16)||army2.isTouching(road17)||army2.isTouching(road18)
        ||army2.isTouching(road19)||army2.isTouching(road20)||army2.isTouching(road21)
        ||army2.isTouching(road22)||army2.isTouching(road23)||army2.isTouching(road24)){

            army2.velocityY = 0;
            army2.changeAnimation("LeftStill", armyLeftStill);
        }
        if(army2.isTouching(road2)||army2.isTouching(road3)||army2.isTouching(road4)
        ||army2.isTouching(road5)||army2.isTouching(road6)||army2.isTouching(road7)
        ||army2.isTouching(road8)||army2.isTouching(road9)||army2.isTouching(road10)
        ||army2.isTouching(road11)||army2.isTouching(road12)||army2.isTouching(road13)
        ||army2.isTouching(road14)||army2.isTouching(road15)||army2.isTouching(road16)
        ||army2.isTouching(road17)||army2.isTouching(road18)||army2.isTouching(road18)
        ||army2.isTouching(road20)||army2.isTouching(road21)
        ){

            if(keyDown(RIGHT_ARROW)){
                army2.x -= 10;
            }
        }
        if(army2.isTouching(road22)||army2.isTouching(road23)){

            if(keyDown(LEFT_ARROW)){
                army2.x += 10;
            }
        }

        if(army2.x<=0){
            workState = "Cave2";          
        }
    }
    if(workState == "Cave2"){

        spike.destroy();
        spikeBall.destroy();

        army2.remove();
        helicopter.remove();
        rope.remove();
        missile.remove();
        army1.remove();

        missionBg.changeAnimation("cave2", cave2Image);
        missionBg.x = width/2
        missionBg.y = height/2;

        army3.visible = true;
        army3.velocityY = 5;

        if(army3.y < 400){
            army3.velocityY = 20;
        }

        var road1 = createSprite(1565,485,50,50);
        var road2 = createSprite(1550,490,50,50);
        var road3 = createSprite(1540,495,50,50);
        var road4 = createSprite(1530,500,50,50);
        var road5 = createSprite(1520,508,50,50);
        var road6 = createSprite(1510,520,50,50);
        var road7 = createSprite(1215,545,50,50);
        var road8 = createSprite(1205,555,50,50);
        var road9 = createSprite(1190,565,50,50);
        var road10 = createSprite(1175,575,50,50);
        var road11 = createSprite(1165,585,50,50);
        var road12 = createSprite(1155,595,50,50);
        var road13 = createSprite(1135,605,50,50);
        var road14 = createSprite(1120,610,50,50);
        var road15 = createSprite(1120,615,50,50);
        var road16 = createSprite(1105,625,50,50);
        var road17 = createSprite(1090,635,50,50);
        var road18 = createSprite(1075,640,50,50);
        var road19 = createSprite(1060,655,50,50);
        var road20 = createSprite(1350,512,250,20);
        var road21 = createSprite(930,655,200,25);
        var road22 = createSprite(815,690,50,50);
        var road23 = createSprite(805,700,50,50);
        var road24 = createSprite(660,700,300,25);
        var road25 = createSprite(490,755,50,80);
        var road26 = createSprite(510,725,50,50);

        road1.visible = false;
        road2.visible = false;
        road3.visible = false;
        road4.visible = false;
        road5.visible = false;
        road6.visible = false;
        road7.visible = false;
        road8.visible = false;
        road9.visible = false;
        road10.visible = false;
        road11.visible = false;
        road12.visible = false;
        road13.visible = false;
        road14.visible = false;
        road15.visible = false;
        road16.visible = false;
        road17.visible = false;
        road18.visible = false;
        road19.visible = false;
        road20.visible = false;
        road21.visible = false;
        road22.visible = false;
        road23.visible = false;
        road24.visible = false;
        road25.visible = false;
        road26.visible = false;

        if(army3.isTouching(road2)||army3.isTouching(road3)
        ||army3.isTouching(road4)||army3.isTouching(road5)||army3.isTouching(road6)
        ||army3.isTouching(road7)||army3.isTouching(road8)||army3.isTouching(road9)
        ||army3.isTouching(road10)||army3.isTouching(road11)||army3.isTouching(road12)
        ||army3.isTouching(road13)||army3.isTouching(road14)||army3.isTouching(road15)
        ||army3.isTouching(road16)||army3.isTouching(road17)||army3.isTouching(road18)
        ||army3.isTouching(road19)
        ||army3.isTouching(road22)||army3.isTouching(road23)
        ||army3.isTouching(road26)){

            army3.x -= 10;
        }
        if(army3.isTouching(road1)||army3.isTouching(road2)||army3.isTouching(road3)
        ||army3.isTouching(road4)||army3.isTouching(road5)||army3.isTouching(road6)
        ||army3.isTouching(road7)||army3.isTouching(road8)||army3.isTouching(road9)
        ||army3.isTouching(road10)||army3.isTouching(road11)||army3.isTouching(road12)
        ||army3.isTouching(road13)||army3.isTouching(road14)||army3.isTouching(road15)
        ||army3.isTouching(road16)||army3.isTouching(road17)||army3.isTouching(road18)
        ||army3.isTouching(road19)||army3.isTouching(road20)||army3.isTouching(road21)
        ||army3.isTouching(road22)||army3.isTouching(road23)||army3.isTouching(road24)
        ||army3.isTouching(road25)||army3.isTouching(road26)){

            army3.velocityY = 0;
            army3.changeAnimation("LeftStill", armyLeftStill);
        }

        if(army3.x < 900){
        push();
        fill("black")
        rect(width/2-100,height-25,150, 15)
        fill("white")
        text("If game is droping then comment 4th line and uncomment 5th line in code.",camera.position.x-140, camera.position.y+380);
        pop();
        }

        if(army3.y>height){
            workState = "Basement1";
            timerValue = 500;
        }
    }
    if(workState == "Basement1"){
        THealthBar.visible = true;

        if(army4.y < 400){
            army4.velocityY = 20;
        }

        if(Thealth <= 0){
            textSize(20);
            fill("red");
            stroke("red");
            text("Dead", width-200, 50);
            terrorist2.changeAnimation("B", stillBlood);
            terrorist2.scale = 1.2;
            terrorist2.y = 675;
        }
        if(Thealth > 0){
            if(army4.isTouching(terrorist2)){
                army4.x += 10;
            }
        }
        push();
        textSize(20);
        fill("red");
        stroke("red");
        text("Terrorist:", width-280, 50);
        pop();
        terrorist2.visible = true;
        army1.destroy();
        army2.destroy();
        army3.destroy();
        helicopter.destroy();
        rope.destroy();
        missile.destroy();        
        
        missionBg.changeAnimation("basement1", basement1Image);
        missionBg.x = width/2;
        missionBg.y = height/2;

        army4.visible = true;
        army4.velocityY = 15;


        if(health <= 0){
            workState = "GameOver";
        }

        if(frameCount%50==0 && Thealth > 0){
            createTBullet1();
        }
        if(tBullet1.isTouching(army4)){
            tBullet1.destroyEach();
            health = health-1;
        }
        
        var road1 = createSprite(1230,705,750,25);
        var road2 = createSprite(820,690,50,50);
        var road3 = createSprite(810,680,50,50);
        var road4 = createSprite(793,670,50,50);
        var road5 = createSprite(777,660,50,50);    
        var road6 = createSprite(748,640,50,50);
        var road7 = createSprite(730,630,50,50);
        var road8 = createSprite(715,620,50,50);
        var road9 = createSprite(700,610,50,50);
        var road10 = createSprite(680,600,50,50);
        var road11 = createSprite(660,590,50,50);
        var road12 = createSprite(645,580,50,50);
        var road13 = createSprite(630,570,50,50);
        var road14 = createSprite(615,560,50,50);
        var road17 = createSprite(385,540,420,25);
        var road18 = createSprite(190,685,25,280);
        var road19 = createSprite(830,700,50,50);
        var road20 = createSprite(763,650,50,50);
        var road21 = createSprite(width/2,150,width,25)

        road1.visible = false;
        road2.visible = false;
        road3.visible = false;
        road4.visible = false;
        road5.visible = false;
        road6.visible = false;
        road7.visible = false;
        road8.visible = false;
        road9.visible = false;
        road10.visible = false;
        road11.visible = false;
        road12.visible = false;
        road13.visible = false;
        road14.visible = false;
        road17.visible = false;
        road18.visible = false;
        road19.visible = false;
        road20.visible = false;
        road21.visible = false;

        if(army4.isTouching(road1)||army4.isTouching(road17)){
            army4.velocityY = 0;
        }

        if(army4.isTouching(road18)){
            if(keyDown(RIGHT_ARROW)){
                army4.x -= 10;
            }
        }

        if(!mouseIsPressed){
            armyBulletSound.stop();
        }
        if(mouseIsPressed){
            if(frameCount%5==0){
                createBullet1();
            }
        }else{
            army4.changeAnimation("LeftStill", armyLeftStill);
        }

        if(bullet1Group.isTouching(terrorist2)){
            bullet1Group.destroyEach();
            Thealth = Thealth-1;
        }
        if(army4.isTouching(road2)||army4.isTouching(road3||army4.isTouching(road19))
        ||army4.isTouching(road4)||army4.isTouching(road5)||army4.isTouching(road6)
        ||army4.isTouching(road7)||army4.isTouching(road8)||army4.isTouching(road9)
        ||army4.isTouching(road10)||army4.isTouching(road11)||army4.isTouching(road12)
        ||army4.isTouching(road13)||army4.isTouching(road14)
        ||army4.isTouching(road18)||army4.isTouching(road20)
        ||army4.isTouching(road21)
        ){
            army4.velocityY = 0;
            if(keyDown(LEFT_ARROW)){
                army4.x += 10;
            }
            
            army4.changeAnimation("LeftStill", armyLeftStill);
        }
        if(army4.isTouching(road21)){

            if(keyDown(UP_ARROW)){
                army4.y += 20
            }
            if(keyDown(DOWN_ARROW)){
                army4.y += 2;
            }
        }

        if(army4.y > height){
            workState = "Basement2";
            Thealth = 20;
        }
        
        push();
        textSize(30);
        fill("red");
        stroke("red");
        strokeWeight(2);
        text("Time Left :", 650,50);
        text(timerValue, 800, 50);
        pop();
    }
    if(workState == "Basement2"){
        
        THealthBar.visible = true;

        if(army5.y < 400){
            army5.velocityY = 20;
        }

        if(Thealth <= 0){
            textSize(20);
            fill("red");
            stroke("red");
            text("Dead", width-200, 50);
            tc.changeAnimation("B", stillBlood);
            tc.scale = 1.5;
            tc.y = 700;
        }

        if(Thealth > 0){
            if(army5.isTouching(tc)){
                army5.x -= 10;
            }
        }

        push();
        textSize(20);
        fill("red");
        stroke("red");
        text("Terrorist:", width-280, 50);
        pop();

        terrorist2.remove();
        army1.remove();
        army2.remove();
        army3.remove();
        army4.remove();
        helicopter.remove();
        rope.remove();
        missile.remove();

        missionBg.changeAnimation("basement2", basement2Image);
        missionBg.x = width/2;
        missionBg.y = height/2;

        army5.visible = true;
        army5.velocityY = 15;

        var box1 = createSprite(845,600,100,10);
        var box2 = createSprite(800,655,10,100);
        var box3 = createSprite(890,655,10,100);

        box1.visible = false;
        box2.visible = false;
        box3.visible = false;

        if(army5.isTouching(box1)){
            army5.velocityY = 0;
        }
        if(army5.isTouching(box2)){
            army5.x -= 10;
        }
        if(army5.isTouching(box3)){
            army5.x += 10;
        }

        crate.visible = true;
        tc.visible = true;

        if(health <= 0){
            workState = "GameOver";
        }

        if(dialogue == "20"){
            notLeave.play();
            notLeave.addCue(1.4, dialogue20);
            herioc.volume(0.1);
        }

        if(dialogue == "21"){
            herioc.volume(1);
        }

        if(frameCount%30==0 && Thealth > 0){
            createTBullet2();
        }

        if(tBullet2.isTouching(army5)){
            health = health-1;
        }

        var road1 = createSprite(50,620,120,25);
        var road2 = createSprite(100,655,50,50);
        var road3 = createSprite(110,665,50,50);
        var road4 = createSprite(120,675,50,50);
        var road5 = createSprite(130,685,50,50);
        var road6 = createSprite(140,695,50,50);
        var road7 = createSprite(150,708,50,50);
        var road8 = createSprite(170,718,50,50);
        var road9 = createSprite(185,730,50,50);
        var road10 = createSprite(960,720,1500,25);

        road1.visible = false;
        road2.visible = false;
        road3.visible = false;
        road4.visible = false;
        road5.visible = false;
        road6.visible = false;
        road7.visible = false;
        road8.visible = false;
        road9.visible = false;
        road10.visible = false;

        if(!mouseIsPressed){
            armyBulletSound.stop();
        }

        if(mouseIsPressed){
            
            if(frameCount%5==0){
                createBullet2();
            }
            }else{
            army5.changeAnimation("RightStill", armyRightStill);
        }

        if(bullet2Group.isTouching(tc)){
            bullet2Group.destroyEach();
            Thealth = Thealth-1;
        }

        if(army5.isTouching(road1)|| army5.isTouching(road2)||army5.isTouching(road3)
        ||army5.isTouching(road4)|| army5.isTouching(road5)||army5.isTouching(road6)
        ||army5.isTouching(road7)|| army5.isTouching(road8)||army5.isTouching(road9)
        ||army5.isTouching(road10)
        ){
            army5.velocityY = 0;
        }
        if( army5.isTouching(road2)||army5.isTouching(road3)
        ||army5.isTouching(road4)|| army5.isTouching(road5)||army5.isTouching(road6)
        ||army5.isTouching(road7)|| army5.isTouching(road8)||army5.isTouching(road9)){

            if(keyDown(LEFT_ARROW)){
                army5.x += 10;
            }
        }

        if(army5.x>width){
            workState = "Basement4";
            Thealth = 20;
            tc.remove();
            crate.remove();
        }

        push();
        textSize(30);
        fill("red");
        stroke("red");
        strokeWeight(2);
        text("Time Left :", 650,50);
        text(timerValue, 800, 50);
        pop();
        
    }
    if(workState == "Basement4"){

        if(army7.y < 400){
            army7.velocityY = 20;
        }

        tc.destroy();
        crate.destroy();
        army1.destroy();
        army2.destroy();
        army3.destroy();
        army4.destroy();
        army5.destroy();
        helicopter.destroy();
        rope.destroy();
        missile.destroy();
        
        THealthBar.visible = true;

        if(army7.x > 1150){
            push();
            fill("black")
            rect(width/2-100,height-25,150, 15)
            fill("white")
            text("If game is droping then comment 5th line and uncomment 6th line in code.",camera.position.x-140, camera.position.y+380);
            pop();
            }

        if(Thealth <= 0){
        textSize(20);
        fill("red");
        stroke("red");
        text("Dead", width-200, 50);
        terroristMachine.changeAnimation("fire", flamebA);
        terroristMachine.scale =10;
        terroristMachine.y = height/2;
        TMSound.volume(0);
        trouble.stop();

        setTimeout(TM, 2000);

            if(dialogue == "23"){
                bombBlast.play();
                bombBlast.addCue(5, dialogue23);
            }
        }


        if(Thealth > 0){
            if(army7.isTouching(terroristMachine)){
                army7.x -= 10;
            }
        }
        push();
        textSize(20);
        fill("red");
        stroke("red");
        text("Terrorist: ", width-280, 50);
        pop();

        missionBg.changeAnimation("basement4", basement4Image);
        missionBg.x = width/2;
        missionBg.y = height/2;

        army7.visible = true;
        army7.velocityY = 15;   

        var road1 = createSprite(width/2, 710, width, 25);
        road1.visible = false;

        terroristMachine.visible = true;
        terroristMachine.velocityY = 20; 
        
        if(health <= 0){
            workState = "GameOver";
        }

        if(terroristMachine.isTouching(road1)){

            terroristMachine.velocityY = 0;  

            if(dialogue == "21"){
                armySound.play();
                armySound.addCue(3.5,dialogue21);
                TMSound.volume(0.1);
                herioc.volume(0.2);
            }

            if(dialogue == "22"){
                laugh.play();
                laugh.addCue(3.5, dialogue22);
                herioc.stop();
                trouble.play();
                trouble.volume(0.2);
                TMSound.volume(0.2);
            }

            if(dialogue == "23"){
                trouble.volume(1);
                TMSound.volume(1);
            }    

        }

        if(frameCount%150==0 && Thealth > 0){
            createTMachineFire1(); 
            createTMachineFire2();
            createTMachineFire3();    
        }
        if(tMachine1.isTouching(army7)){
            tMachine1.destroyEach();
            health = health-1;
        }
        if(tMachine2.isTouching(army7)){
            tMachine2.destroyEach();
            health = health-1;
        }
        if(tMachine3.isTouching(army7)){
            tMachine3.destroyEach();
            health = health-1;
        }

        if(!mouseIsPressed){
            armyBulletSound.stop();
        }
        
        if(mouseIsPressed){
            
            if(frameCount%5==0){
                createBullet3();
                
            }
            }else{
            army7.changeAnimation("RightStill", armyRightStill);
        }

        if(bullet3Group.isTouching(terroristMachine)){
            bullet3Group.destroyEach();
            Thealth = Thealth-0.5;
        }

        if(army7.isTouching(road1)){
            army7.velocityY = 0;
        }

        if(army7.x>width){
            workState = "Basement5";
            TMSound.stop();
            fade = 0;
            smoke.destroy();
            army1.destroy();
            army2.destroy();
            army3.destroy();
            army4.destroy();
            army5.destroy();
            terrorist.destroy();
            terrorist1.destroy();
            terrorist11.destroy();
            terrorist2.destroy();
            terroristB1.destroy();
            bombAtPatrol.destroy();
            helicopter.destroy();
            missileFlame.destroy();
            terroristMachine.destroy();
            PMSpeak.destroy();
            govindSpeak.destroy();
            ministerSpeak.destroy();
            crate.destroy();
        }

        push();
        textSize(30);
        fill("red");
        stroke("red");
        strokeWeight(2);
        text("Time Left :", 650,50);
        text(timerValue, 800, 50);
        pop();
    }
    if(workState == "Basement5"){

        timerValue == 10000000;

        herioc.stop();
        TMSound.stop();
        terroristMachine.destroy();

        lastArmy1.visible = true;
        lastArmy2.visible = true;
        truck.visible = true;

        if(dialogue == "23"){
            josh1.play();
            josh1.addCue(8, dialogue23);
        }
        if(dialogue == "24"){
            josh2.play();
            josh2.addCue(11, dialogue24);

            fill(0,0,0,fade1);
            rect(0,0, width, height);
            fade1 += 0.37;
        }

        plane.visible = true;
        army7.x = 150;
        army7.y = 680;
        army7.visible = true;
        army7.scale = 0.45;

        missionBg.changeAnimation("basement5", basement5Image);
        missionBg.x = width/2;
        missionBg.y = height/2;
    }
    if(workState == "missionFinish"){
        bgf.visible = true;
        flag.visible = true;
        
        if(dialogue == "25"){
            janaGanaMana.play();
            janaGanaMana.addCue(95, dialogue25);

            fill(0,0,0,fade);
            rect(0,0, width, height);     
            fade -= 1;

            if(fade < 150){
                stroke("#008900");
                fill("#008900");
                strokeWeight(3);
                textSize(60);
                textFont('Georgia');
                text("Please", 600, 70);
                text("Stand", 790, 70);
                text("For", 980-10, 70)
                textSize(50);
                text("National Anthem", 650,140);
            }
        }
        if(dialogue == "26"){
            image(thankYou,0,0);
            thankYou.play();
            thankYou.addCue(18, dialogue26);
        } 
        if(dialogue == "27"){
            thankYou.remove();
            image(thankImage, 0,0);
            thankSound.play();
        }     
        
        as1.visible = true;
        as2.visible = true;
        as3.visible = true;
        as4.visible = true;
        as5.visible = true;

    }
    if(workState == "GameOver"){
        
        image(gameOver,0,0,width,height);

    }

    function missileFlameHide(){
        missileFlame.visible = false;
        missile.remove();
    }
    function smokeHide(){
        smoke.visible = false;
        if(dialogue == "18"){
            hc4.play();
            hc4.addCue(4.5, dialogue18);
            HelicopterStart.volume(0.1);
        }
    }
    function terroristDeadB(){
        terroristB1.visible = true;
        terrorist1.y+50
        terrorist1.visible = false;
    }
    function terroristDeadBHide(){
        terroristB1.visible = false;
        workState = "Rope";   
        HelicopterStart.volume(1);     
    }
}
function createBullet1(){

    army4.changeAnimation("shootL", armyShootL);
    var shoot = createSprite(army4.x-120, army4.y-27);
    shoot.addAnimation("shoot", bulletL);
    shoot.scale = 0.06;
    shoot.velocityX -=200;
    armyBulletSound.play();
    bullet1Group.add(shoot);

    if(keyDown(RIGHT_ARROW)){
        army4.changeAnimation("RightStill", armyRightStill);
        armyBulletSound.stop();
        shoot.visible = false;
    }
    if(keyDown(LEFT_ARROW)){
        army4.changeAnimation("LeftStill", armyLeftStill);
        armyBulletSound.stop();
        shoot.visible = false;
    }      
}
function createBullet2(){

    army5.changeAnimation("shootR", armyShootR);
    var shoot = createSprite(army5.x+70, army5.y-13);
    shoot.addAnimation("shoot", bulletR);
    shoot.scale = 0.06
    shoot.velocityX = +200;
    armyBulletSound.play();
    bullet2Group.add(shoot);

    if(keyDown(RIGHT_ARROW)){
        army5.changeAnimation("RightStill", armyRightStill);
        armyBulletSound.stop();
        shoot.visible = false;
    }
    if(keyDown(LEFT_ARROW)){
        armyBulletSound.stop();
        shoot.visible = false;
    }      
}
function createBullet3(){

    army7.changeAnimation("shootR", armyShootR);
    var shoot = createSprite(army7.x+70, army7.y-13);
    shoot.addAnimation("shoot", bulletR);
    shoot.scale = 0.06
    shoot.velocityX = +200;
    armyBulletSound.play();
    bullet3Group.add(shoot);

    if(keyDown(RIGHT_ARROW)){
        army7.changeAnimation("RightStill", armyRightStill);
        armyBulletSound.stop();
        shoot.visible = false;
    }
    if(keyDown(LEFT_ARROW)){
        army7.changeAnimation("RightStill", armyRightStill);
        armyBulletSound.stop();
        shoot.visible = false;
    }
    if(keyDown(UP_ARROW)){
        army7.changeAnimation("RightStill", armyRightStill);
        armyBulletSound.stop();
        shoot.visible = false;
    } 
}
function createTBullet1(){

    var shootT = createSprite(terrorist2.x+70, terrorist2.y-37);
    shootT.addAnimation("shoot", bulletR);
    shootT.scale = 0.06;
    shootT.velocityX +=200;
    terroristBulletSound.play();
    tBullet1.add(shootT);
}
function createTBullet2(){

    var shootT = createSprite(tc.x-90, tc.y-28);
    shootT.addAnimation("shoot", bulletL);
    shootT.scale = 0.06;
    shootT.velocityX -=200;
    terroristBulletSound.play();
    tBullet2.add(shootT);
}
function createTMachineFire1(){
    var TMFire = createSprite(960,480);
    TMFire.setCollider("circle", 0, 0,30)
    TMFire.addAnimation("TMF", TMFireImage);
    TMFire.velocityX = -10;
    TMFBlastSound.play();
    tMachine1.add(TMFire);
}
function createTMachineFire2(){
    var TMFire = createSprite(960,480);
    TMFire.setCollider("circle", 0, 0,30)
    TMFire.addAnimation("TMF", TMFireImage);
    TMFire.velocityX = Math.round(random(-15,-20));
    TMFire.velocityY = Math.round(random(3,5));
    TMFire.velocityY = 3;
    TMFBlastSound.play();
    tMachine2.add(TMFire);
}
function createTMachineFire3(){
    var TMFire = createSprite(960,480);
    TMFire.setCollider("circle", 0, 0,30)
    TMFire.addAnimation("TMF", TMFireImage);
    TMFire.velocityX = Math.round(random(-15,-20));
    TMFire.velocityY = Math.round(random(-3,-5));
    TMFBlastSound.play();
    tMachine3.add(TMFire);
}
function timeIt(){
    if (timerValue > 0) {
      timerValue--;
    }
}
function TM(){
    terroristMachine.destroy();
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}