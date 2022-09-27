//imported variables & functions
import {ctx, canvas} from './canvas';
import {makeButton,makeInput} from './controls';

 

// variables 
let dSF = makeButton("Draw Face");
let dCB = makeButton("Draw Semicircle");
let cSB = makeButton("Clear Canvas");
let dLB = makeButton("Draw Lines");

let LT = makeInput('range')
let T = makeButton('3D Triangle')
let drawing = false;
let drawingtriangle = false;
let drawingsemi = false;
let drawingcolor = false;
let drawingface = false;
let color = makeInput('color')
let startcolor = '#0000ff'


//functions
function drawline (event){
  
  if (event.buttons) {
  ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();
  } else {
    ctx.beginPath()
    
    
  }
}

function drawsemi (event){
   ctx.beginPath(); ctx.arc(event.offsetX,event.offsetY,100,0,Math.PI )
  
  ctx.stroke();
  ctx.closePath();
}

function drawface (event) {
  
let ctx = canvas.getContext('2d'); 
  ctx.beginPath();
let x = event.offsetX
let y = event.offsetY
ctx.arc(x,y,100,0,Math.PI*2);

  



//250
ctx.moveTo(x-26,y+50);
ctx.arc(x,y+50,25,0,-Math.PI);
ctx.closePath();


ctx.moveTo(x-25,y-50);
ctx.lineTo(x-25,y+5);
ctx.moveTo(x+25,y-50);
ctx.lineTo(x+25,y+5);


ctx.stroke()
}

function triangle (event) {
   if (event.buttons) {
     
    function drawshape () {
      
ctx.clearRect(0,0,600,600) // clears board 
        
     
     
  if (event.offsetX < 150) {
    for (let i = 300; i<600; i++) {
    ctx.strokeStyle = "red" // color of each line 
       ctx.beginPath()
     
      
    ctx.lineTo(450, event.offsetY+i/6 - 50); // anchor point on right side
    
   ctx.lineTo(event.offsetX, i/1.5); //draws a line 300 times w/ a different y value to create the illusion that its colored in
     
    ctx.stroke()
    }}// lines 23-36 are creating only either the red/blue side depending on mouse position
  else if (event.offsetX > 450) {
    for (let i = 300; i<600; i++) {
    ctx.strokeStyle = "blue"
       ctx.beginPath()
     ctx.lineTo(150, event.offsetY + i/6 - 50);
  
   ctx.lineTo(event.offsetX, i/1.5);
    
    ctx.stroke()
    }
}
  else if (event.offsetX >= 300) {
    for (let i = 300; i<600; i++) {
    ctx.strokeStyle = "blue"
       ctx.beginPath()
     ctx.lineTo(150, event.offsetY + i/6 - 50);
   ctx.lineTo(event.offsetX, i/1.5);
    ctx.stroke()
    }
    for (let i = 300; i<600; i++) {
    ctx.strokeStyle = "red"
       ctx.beginPath()
     ctx.lineTo(450, event.offsetY + i/6 - 50);
   ctx.lineTo(event.offsetX, i/1.5);
    ctx.stroke()
    }
    } // lines 38-68 are creating both red and blue sides when the triange is facing towards you 
  else if (event.offsetX <= 300) {  for (let i = 300; i<600; i++) {
    ctx.strokeStyle = "blue"
       ctx.beginPath()
     ctx.lineTo(150, event.offsetY + i/6 - 50);
   ctx.lineTo(event.offsetX, i/1.5);
    ctx.stroke()
    }
    for (let i = 300; i<600; i++) {
    ctx.strokeStyle = "red"
       ctx.beginPath()
     ctx.lineTo(450, event.offsetY + i/6 - 50);
   ctx.lineTo(event.offsetX, i/1.5);
    ctx.stroke()
    }} 
      
      if (event.offsetY < 200) {
         for (let i = 0; i<300; i++ ) {
    ctx.strokeStyle = "maroon"
       ctx.beginPath()
          
     ctx.lineTo(450, event.offsetY ); 
       
        ctx.lineTo(event.offsetX, 200) 
       
      
        ctx.lineTo(450, event.offsetY); 
        ctx.lineTo(450-i,event.offsetY)
        ctx.lineTo(event.offsetX, 200 ) 
    ctx.stroke()
    
    }
      } else if(event.offsetY > 350) {
         for (let i = 0; i<300; i++ ) {
    ctx.strokeStyle = "navy"
       ctx.beginPath()
          
    
       
        ctx.lineTo(event.offsetX, 400) 
       
     
        ctx.lineTo(450, event.offsetY+50); 
        ctx.lineTo(450-i,event.offsetY+50)
        ctx.lineTo(event.offsetX, 400 ) 
    ctx.stroke()
    
    }
      } // lines 69-125 is to shade the top and the bottom of the shape. Uses the same idea as lines 23-68
      
    
  
   
    } //function for shape 
    
    
    
    
setTimeout(drawshape, 75) // added small delay just for visual effects
    
  } 
   else {
     ctx.strokeStyle = color.value
    ctx.beginPath()
    
}
}
//range

LT.setAttribute('min',1)
LT.setAttribute('max',10)

//event listeners
dSF.addEventListener('click',function(){
  if (!drawingface){
    drawingface = true;
    dSF.textContent = 'Stop Drawing';
    

  canvas.addEventListener('click',drawface)
  } else {
    drawingface = false;
    dSF.textContent = 'Draw Face';
    canvas.removeEventListener('click',drawface)
  }
})

dCB.addEventListener('click',function(){
if (!drawingsemi) {
  drawingsemi = true;
  ctx.beginPath();

  canvas.addEventListener('click',drawsemi)
  dCB.textContent = 'Stop Drawing'
} else {
  drawingsemi = false;
  canvas.removeEventListener('click',drawsemi)
  dCB.textContent = 'Draw Semicircle'
}
})

cSB.addEventListener('click',function(){
  ctx.beginPath()
ctx.clearRect(0,0,canvas.width,canvas.height);
   ctx.beginPath()
  
})

dLB.addEventListener('click',function(){
if (!drawing){
ctx.beginPath();
  canvas.addEventListener('mousemove',drawline);
  drawing = true;
  dLB.textContent = 'Stop Drawing'
  
} else {
  drawing = false;
  canvas.removeEventListener('mousemove',drawline);
  dLB.textContent = 'Draw Lines';
}
  
})

color.addEventListener('change',function(){
  ctx.strokeStyle = color.value
})

LT.addEventListener('change',function(){
  
ctx.lineWidth = LT.value
})

T.addEventListener('click',function(){
  if (!drawingtriangle){
  drawingtriangle = true;
     canvas.addEventListener('mousemove',triangle);
  T.textContent = 'Stop Drawing';
} 
  else{
    drawingtriangle = false;
    
     canvas.removeEventListener('mousemove',triangle);
  T.textContent = '3D Triangle';
    ctx.strokeStyle = color.value
  }

})

/*
let sampleButton = makeButton("Draw Semicircle");

sampleButton.addEventListener(
  "click",
  function () {
    ctx.beginPath();
    ctx.arc(100,100,100,0,Math.PI);
    ctx.stroke();
  }
)

let clearButton = makeButton('Clear');
clearButton.addEventListener(
  "click",
  function () {
    ctx.clearRect(
      0,0,canvas.width,canvas.height
    )
  }
)*/