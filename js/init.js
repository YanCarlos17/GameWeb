//DOM - DocumentObjectModel
var velocidad = 5, direccion = velocidad, inciar = false, x = 50, y = 20;
var intervalo;

window.addEventListener('load', init);
function init(){
var canvas = document.getElementById('micanvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle='#db291b';
ctx.arc(x,y,10,0,7);
ctx.fill();

document.getElementById('boton').addEventListener('click', function(){
    if(iniciar){
        this.value= 'Iniciar';
        window.clearInterval(intervalo);
        iniviar = false;
    }
    else{
        this.value = 'Detener';
        intervalo = window.setInterval(function(){
            moveAndDraw(canvas,ctx);
        },32);
        iniciar = true;
    }
});  
}
function draw(canvas, ctx,){
    canvas.width = canvas.width;
    ctx.arc(0,0,20,20,10);
    ctx.style='#db291b';
    ctx.fill();

}
function moveAndDraw(){
    if( y > (canvas.height - 20)) direccion = -velocidad;
    if(y < (20)) direccion = velocidad;
    y += direccion;
    draw(canvas,ctx,x,y);
}

