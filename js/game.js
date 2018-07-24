var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
//Crear objeto de la nave
var nave = {
    x:100,
    y: canvas.height-20,
    width:30,
    height:15
}
//GameKeyPad
var teclado = {}
//Variables para imagenes
var fondo;
//Definicion de funciones
function loadMedia(){
    fondo = new Image();
    fondo.src = 'img/bgspace.jpeg';
    fondo.onload = function(){
        var intervalo = window.setInterval(frameLoop,1000 / 55);
    }
}

function dibujarFondo(){
    ctx.drawImage(fondo,0,0);
}

function dibujarNave(){
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.fillRect(nave.x,nave.y,nave.width,nave.height);
    ctx.restore();
}

function agregarEventosTeclado(){
    //La tecla Presionada
    agregarEvento(document,"keydown", function(e){
        teclado[e.keyCode] = true;
        console.log(e.keyCode);
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
        nave.x -= 10;
        if(nave.x < 0) nave.x = 0;
    }

    if(teclado[39]){
        var limite = canvas.width - nave.width;
        //Move to Right
        nave.x += 10;
        if(nave.x > limite) nave.x = limite;
    }
}
function frameLoop(){
    moverNave();
    dibujarFondo();
    dibujarNave();
}

//Ejecucion de funciones

agregarEventosTeclado();
loadMedia();