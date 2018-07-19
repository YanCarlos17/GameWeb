//DOM - DocumentObjectModel
window.addEventListener('load', init);

function init(){
   var grados; 
   var canvas = document.getElementById('micanvas');
   var ctx = canvas.getContext('2d');
   var img = document.getElementById('shell');
   ctx.drawImage(img, 125, 120, 50, 30);
}
function a_radianes(grados){
    return(grados * Math.PI) / 180;
}

