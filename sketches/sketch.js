let myfont;
function preload() {
  myfont = loadFont('../fonts/Roboto-Condensed.ttf');
}

var time = 0;

function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  var extra = createGraphics(window.innerWidth, window.innerHeight, WEBGL);
  setAttributes('antialias', true);
    
  textFont(myfont);
  textAlign(CENTER, CENTER);
  textSize(50);
}

var j = 4; //j affects LENGTH of lines

function draw() {
  translate(-10, -256);
  rotate(-0.8290314);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(50);
  vertices(j);

  var t = floor(time/1000);
  if(millis() - time > 1000){
      time = millis();
      
  }
  if(t > 60){
      noLoop();
  }
    
  text('click', -100, -100);
}

function vertices(n){
    beginShape();
    for(var i = 0; i < n; i++){
        for(var x = 0; x < 50; x++){
            vertex(i*x, i*x);
        }
    }
    endShape();
}


function mouseClicked(){
    if(j < 15){
       j++; 
    }
}