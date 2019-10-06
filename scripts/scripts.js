window.onload = function(){
    var text = document.querySelector(".bottom");
    text.addEventListener('mouseover', function(){
        text.classList.add("animated");
    });
    text.addEventListener('mouseout', function(){
        text.classList.remove("animated");
    });
    
    var links = document.querySelectorAll("a");
    var border = document.querySelector("#box");
    for(var x = 0; x < links.length; x++){
        links[x].addEventListener('mouseover', function(){
            border.classList.add("wave");
        });
        
        links[x].addEventListener('mouseout', function(){
            border.classList.remove("wave");
        });
    }
    
}

// ECLIPSE SKETCH
const eclipse = ( p ) => {
  var name = 'eclipse';
  let time = 0;
  let j = 4;
  let e;
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
    p.setAttributes('antialias', true);
    let myfont = p.loadFont('../fonts/Roboto-Condensed.ttf');
    p.textFont(myfont);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(50);
  };

  p.draw = () => {
    
    p.translate(-10, -256);
    p.rotate(-0.8290314);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.sphere(50);
    p.beginShape();
    for (var i = 0; i < j; i++) {
      for (var x = 0; x < 50; x++) {
        p.vertex(i * x, i * x);
      }
    }
    p.endShape();

    var t = p.floor(time / 1000);
    if (p.millis() - time > 1000) {
      time = p.millis();

    }
    if (t > 60) {
      p.noLoop();
    }
      
    p.text('eclipse', -100, -100);
  };
  
  p.mouseClicked = () => {
    if (j < 15) {
      j++;
    }
  }
};

const t = ( r ) => {
  r.setup = () => {
    r.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL); 
  };
    
  r.draw = () => {
      
  };
};

//PLAY/PAUSE/QUEUE functions for sketches

//TODO: make array containing sketches, and put hold the name in the array
var mp5;
var container = document.getElementById("sketcher");
function play(){
    myp5 = new p5(eclipse, container); //plays eclipse sketch
    let name = document.getElementById('name');
    name.innerHTML = myp5.name;
}

function stop(){
    myp5.remove();
    let name = document.getElementById('name');
    name.innerHTML = "█";
}

function prev(){
    
}

function next(){
    
}

/* ----------- GLOBAL MODE ECLIPSE -------------
//SKETCH (eclipse)
new p5();

let myfont;
function preload() {
  myfont = loadFont('../fonts/Roboto-Condensed.ttf');
}

var time = 0;

function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
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
*/