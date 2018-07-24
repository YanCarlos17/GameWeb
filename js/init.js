//DOM - DocumentObjectModel
var velocidad = 5;
var direccion = velocidad;
var iniciar = false;
var x = 50;
var y = 10;
var intervalo;

window.addEventListener('load', init);
function init(){
    var canvas = document.getElementById('micanvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle= 'lightblue';
    ctx.arc(x,y,10,0,7);
    ctx.fill();

    document.getElementById('boton').addEventListener('click', function(){
    if(iniciar)
    {
        this.value = 'Iniciar';
        window.clearInterval(intervalo);
        iniciar = false;
    }
    else
    {
        this.value = 'Detener';
        intervalo  = window.setInterval(function(){
            moveAndDraw(canvas,ctx);
        },32);
        iniciar = true;
    }
});  
}
function draw(canvas,ctx,x,y){
    canvas.width = canvas.width;
    ctx.fillStyle= 'lightblue';
    ctx.arc(x,y,10,0,7);
    ctx.fill();
    //ctx.style='#db291b';

}
function moveAndDraw(canvas,ctx){
    if( y > (canvas.height - 20)) direccion =  (-velocidad);
    if( y < (20)) direccion = velocidad;
    y += direccion;
    draw(canvas,ctx,x,y);
}

