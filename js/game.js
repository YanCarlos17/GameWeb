var canvas = document.getElementById('game');
var alien = document.getElementById('alien01');


var ctx = canvas.getContext('2d');
var velocidad = 5;
var direccion = velocidad;
var iniciar = false;
var x = 50;
var y = 10;
var intervalo;
//Crear objeto bala
var shot = {x:100,y:0,width:1,height:20}
//Crear objeto de la nave
var nave = {x:100,y:canvas.height-20,width:30,height:15}
//GameKeyPad
var teclado = {}
//Variables para imagenes
var fondo;
//Definicion de funciones
function loadMedia(){
    fondo = new Image();
    fondo.src = 'img/bgspace.jpg';
    fondo.onload = function(){
        var intervalo = window.setInterval(frameLoop, 1000 / 50);
    }
}
function dibujarFondo(){
    ctx.drawImage(fondo,-190,-250);
}
function dibujarBullet(){
    var shot = document.getElementById('shot');
    ctx.save();
    ctx.drawImage(shot,0,0);
    ctx.restore();
}
function dibujarNave(){
    var img = document.getElementById('nave');
    ctx.save();
    ctx.fillStyle = 'red';
    ctx.fillRect(nave.x,nave.y,nave.width,nave.height);
    ctx.restore();
}
function agregarEventosTeclado(){
    //La tecla Presionada
    agregarEvento(document,"keydown", function(e){
        teclado[e.keyCode] = true;
    });
    //La tecla sin ser presionada
    agregarEvento(document,'keyup', function(e){
        teclado[e.keyCode] = false;
    });
    function agregarEvento(elemento,nombreEvento,funcion){
        if(elemento.addEventListener)
        {
            elemento.addEventListener(nombreEvento,funcion,false);
        }
        else if(elemento.attachEvent)
        {
            elemento.attachEvent(nombreEvento,funcion);
        }
    }
}
function moverNave(){
    
    if(teclado[37]){
        //Move to left
        nave.x -= 5;
        if(nave.x < 0) nave.x = 0;
    }
    if(teclado[39]){
        var limite = canvas.width - nave.width;
        //Move to Right
        nave.x += 5;
        if(nave.x > limite) nave.x = limite;
    }
    if(teclado[38]){
        //Move to Up
        nave.y -= 5;
        if(nave.y < 0) nave.y = 0;
    }
    if(teclado[40]){
        var limite = canvas.height - nave.height;
        //Move to Down
        nave.y += 5;
        if(nave.y > limite) nave.y = limite;
    }
}
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

function draw(canvas,ctx,x,y){
    canvas.width = canvas.width;
    ctx.fillStyle= 'blue';
    ctx.arc(x,y,10,0,7);
    ctx.fill();

}
function moveAndDraw(canvas,ctx){
    if( y > (canvas.height - 20)) direccion =  -velocidad;
    if( x > (canvas.width - 20)) direccion =  -velocidad;
    if( y < (20)) direccion = velocidad;
    if( x < (20)) direccion = velocidad;
    y += direccion;
    x += direccion;
    draw(canvas,ctx,x,y);
}

function frameLoop(){
    moverNave();
    dibujarFondo();
    dibujarBullet();
    dibujarNave();
    
}
//Ejecucion de funciones
agregarEventosTeclado();
loadMedia();