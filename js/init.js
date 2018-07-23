//DOM - DocumentObjectModel
var velocidad=5;
var direccion= velocidad;
var inciar=false;
var x = 50;
var y = 10;
var intervalo;

window.addEventListener('load', init);
function init(){
var canvas = document.getElementById('micanvas');

var ctx = canvas.getContext('2d'); 
document.getElementById('boton').addEventListener('click', function(){
    if(iniciar){
        this.value='iniciar';
        window.clearInterval(intervalo);
    }
});  
}
function draw(canvas, ctx,){
    //canvas.width = canvas.width;
    var img = document.getElementById('shell');
    ctx.fill();

}
function moveAndDraw(){
    if( y > (canvas.height - 20)) direccion = -velocidad;
    if(y < (20)) direccion = velocidad;
    y += direccion;
    draw(canvas,ctx,x,y);
}

