// let onion_sprite_sheet;
// let oniondata;
// let onionAnimation;
// let onion;
let cloud;
let cloud2;
let cloud3;
let cloud4;

const onion_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 96, 'height': 96}},
  // {'name':'player_walk05', 'frame':{'x':71, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk06', 'frame':{'x':142, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk07', 'frame':{'x':213, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk08', 'frame':{'x':284, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk09', 'frame':{'x':213, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk10', 'frame':{'x':355, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk11', 'frame':{'x':284, 'y': 95, 'width': 32, 'height': 32}}
];

const snake_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 96, 'height': 96}},
  // {'name':'player_walk05', 'frame':{'x':71, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk06', 'frame':{'x':142, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk07', 'frame':{'x':213, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk08', 'frame':{'x':284, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk09', 'frame':{'x':213, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk10', 'frame':{'x':355, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk11', 'frame':{'x':284, 'y': 95, 'width': 32, 'height': 32}}
];

const fish_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 96, 'height': 96}},
  // {'name':'player_walk05', 'frame':{'x':71, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk06', 'frame':{'x':142, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk07', 'frame':{'x':213, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk08', 'frame':{'x':284, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk09', 'frame':{'x':213, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk10', 'frame':{'x':355, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk11', 'frame':{'x':284, 'y': 95, 'width': 32, 'height': 32}}
];

const hedgehog_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 96, 'height': 96}},
  // {'name':'player_walk05', 'frame':{'x':71, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk06', 'frame':{'x':142, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk07', 'frame':{'x':213, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk08', 'frame':{'x':284, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk09', 'frame':{'x':213, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk10', 'frame':{'x':355, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk11', 'frame':{'x':284, 'y': 95, 'width': 32, 'height': 32}}
];

const skunk_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 96, 'height': 96}},
  // {'name':'player_walk05', 'frame':{'x':71, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk06', 'frame':{'x':142, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk07', 'frame':{'x':213, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk08', 'frame':{'x':284, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk09', 'frame':{'x':213, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk10', 'frame':{'x':355, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk11', 'frame':{'x':284, 'y': 95, 'width': 32, 'height': 32}}
];

const sad_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 96, 'height': 96}},
  // {'name':'player_walk05', 'frame':{'x':71, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk06', 'frame':{'x':142, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk07', 'frame':{'x':213, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk08', 'frame':{'x':284, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk09', 'frame':{'x':213, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk10', 'frame':{'x':355, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk11', 'frame':{'x':284, 'y': 95, 'width': 32, 'height': 32}}
];

const pink_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 96, 'height': 96}},
  // {'name':'player_walk05', 'frame':{'x':71, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk06', 'frame':{'x':142, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk07', 'frame':{'x':213, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk08', 'frame':{'x':284, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk09', 'frame':{'x':213, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk10', 'frame':{'x':355, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk11', 'frame':{'x':284, 'y': 95, 'width': 32, 'height': 32}}
];

const yellow_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 96, 'height': 96}},

];

const blue_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 96, 'height': 96}},
];








function preload(){
  onion_sprite_sheet = loadSpriteSheet('img/onion.png', 96, 96, 6);
  sad_sprite_sheet = loadSpriteSheet('img/sad.png', 96, 96, 6);

  snake_sprite_sheet = loadSpriteSheet('img/snake.png', 96, 96, 6);
  fish_sprite_sheet = loadSpriteSheet('img/fish.png', 96, 96, 4);
  hedgehog_sprite_sheet = loadSpriteSheet('img/hedgehog.png', 96, 96, 6);
  skunk_sprite_sheet = loadSpriteSheet('img/skunk.png', 96, 96, 6);
  
  pink_sprite_sheet = loadSpriteSheet('img/pink.png', 96, 96, 4);
  yellow_sprite_sheet = loadSpriteSheet('img/yellow.png', 96, 96, 4);
  blue_sprite_sheet = loadSpriteSheet('img/blue.png', 96, 96, 4);

  snakeAnimation = loadAnimation(snake_sprite_sheet);
  snake = createSprite(300, 270, 96, 96);

  fishAnimation = loadAnimation(fish_sprite_sheet);
  fish = createSprite(420, 650, 96, 96);
  
  hedgehogAnimation = loadAnimation(hedgehog_sprite_sheet);
  hedgehog = createSprite(500, 440, 96, 96);

  skunkAnimation = loadAnimation(skunk_sprite_sheet);
  skunk = createSprite(700, 380, 96, 96);


  onionAnimation = loadAnimation(onion_sprite_sheet);
  onion = createSprite(550, 125, 96, 96);

  sadAnimation = loadAnimation(sad_sprite_sheet);
  sad = createSprite(200, 500, 96, 96);



  pinkAnimation = loadAnimation(pink_sprite_sheet);
  pink = createSprite(650, 200, 96, 96);

  yellowAnimation = loadAnimation(yellow_sprite_sheet);
  yellow = createSprite(550, 200, 96, 96);

  blueAnimation = loadAnimation(blue_sprite_sheet);
  blue = createSprite(750, 200, 96, 96);


  cloud = loadImage('img/cloud.png');
  cloud2 = loadImage('img/cloud.png');
  cloud3 = loadImage('img/cloud.png');
  cloud4 = loadImage('img/cloud.png');

  
}

function setup(){
  createCanvas(1000, 1000);

  onion.addAnimation('onion', onionAnimation);
  onion.scale = 1.0;

  sad.addAnimation('sad', sadAnimation);
  sad.scale = 1.0;

  snake.addAnimation('snake', snakeAnimation);
  snake.scale = 1.3;

  fish.addAnimation('fish', fishAnimation);
  fish.scale = 1.2;

  hedgehog.addAnimation('hedgehog', hedgehogAnimation);
  hedgehog.scale = 1.3;

  skunk.addAnimation('skunk', skunkAnimation);
  skunk.scale = 1.3;

  pink.addAnimation('pink', pinkAnimation);
  pink.scale = 1.3;

  yellow.addAnimation('yellow', yellowAnimation);
  yellow.scale = 1.3;

  blue.addAnimation('blue', blueAnimation);
  blue.scale = 1.3;
}

function draw(){
  background(163, 229, 247);
  
  drawSprites();

  image(cloud, 300, 600, 300, 200);
  image(cloud2, 100, 200, 400, 200);
  image(cloud3, 200, 10, 350, 200);
  image(cloud4, 400, 300, 500, 300);

}


function keyPressed(){
  if(key === 'a'){
    onion.setSpeed(-1, 0)
  }

  if(keyIsDown(UP_ARROW)){
    this.inputs[1] -= 20;
  }
}