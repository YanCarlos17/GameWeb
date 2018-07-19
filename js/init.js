//DOM - DocumentObjectModel
window.addEventListener('load', init);
function init(){
   var canvas = document.getElementById('micanvas');
   var ctx = canvas.getContext('2d');
   ctx.fillStyle='#01DFD7';
   ctx.fillRect(120,110,20,15);
   ctx.fillStyle='#01DFD7';
   ctx.fillRect(100,100,20,15);
   ctx.strokeStyle='yellowgreen';
   ctx.lineWidth = 1;  
   ctx.strokeRect(150,110,20,15);
   ctx.fillStyle='#01DFD7';
   ctx.fillRect(80,110,20,15);
   console.log(canvas);
}