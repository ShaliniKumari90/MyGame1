var shooter, shooter1, shooter2;
var alien, alienImg;
var bg, bgImg1, bgImg2;

function preload(){
    bgImg1 = loadImage("images/bg(1).webp");
    bgImg2 = loadImage("images/bg(2).webp");
    shooter1 = loadImage("assets/shooter_1.png");
    shooter2 = loadImage("assets/shooter_3.png");
    alienImg = loadImage("images/alien.png");
}

function setup (){
    createCanvas(600,850);
    bg = createSprites(300,425);
    bg.addImage("intro",bgImg1);
    shooter = createSprites(80,600,80,120);
    shooter.addImage("standing",shooter1);
    alien = createSprites(400,600,80,120);
    alien.addImage("spaceHero",alienImg);

}

function draw(){
    background(bg);

    if(keyDown(space)){
        bg.changeImage(bgImg2);
    }

    drawSprites();
}