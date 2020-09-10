var position = 0;
var mouseX = 0;
var mouseY = 0;

var w = window.innerWidth;
var h = window.innerHeight;

window.addEventListener('mousemove', (event) => {
   mouseX = event.clientX - w/2;
   mouseY = event.clientY - h/2;
  
  console.log(mouseX,mouseY);
});

var lines = Array.from(document.querySelectorAll('.lines'));
const loop = () => {
  
  position = position + (mouseX*0.00008);
  
  if(position >= 100) {
    position = 0;
  }
  
  if(position < 0) {
    position = 100;
  }
  
  lines.map((line) => {
    
    line.style.transform = `translate3d(${(position * -1)}%,0px,0px)`;
  })
  

  requestAnimationFrame(loop);
}

loop();

