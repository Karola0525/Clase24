const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies
const Body=Matter.Body
// TERCERO CREAR VARIABLE PARA UN BOTON
var btn1;
// SEXTO CREAR VARIABLE PARA ANGULO
var angle=60;


function setup() {
    createCanvas(400,400);
    engine=Engine.create()
    world=engine.world
    var ball_options={
        restitution:0.95,
        frictionAir:0.01
    }
    var ground_options={
        isStatic:true
        
    }
ball=Bodies.circle(100,10,20,ball_options)
World.add(world,ball)
ground=Bodies.rectangle(200,390,400,20,ground_options)
World.add(world,ground)
//QUINTO CREAR OBJETO RECTANGLE

ground1=Bodies.rectangle(100,300,100,20,ground_options)
World.add(world,ground1)
// PARA QUE EL GIRO SEA DESDE EL CENTRO
rectMode(CENTER)
//ellipseMode(RADIUS)
// CUARTO AGREGAR FUNCIONES AL BOTON
btn1=createImg('up.png') 
btn1.position(20,30)
btn1.size(50,50)
btn1.mouseClicked(vForce) 
}




function draw() 
{
  background(51)
    Engine.update(engine)
//SÉPTIMO AGREGAR CÓDIGO PARA ROTAR EL OBJETO, PREGUNTAR POR QUE NO GIRA EL RECTANGULO
Matter.Body.rotate(ground1,angle) 
//OCTAVO LLAMAR A LA OPCIÓN PUSH PARA CAPTURAR LA NUEVA CONFIG
push ();
// NOVENO LLAMAR FUNCIÓN TRANSLATE PARA CAMBIAR EL PUNTO DE GIRO
translate (ground1.position.x,ground1.position.y)
// DÉCIMO LLAMAR FUNCIÓN ROTATE PARA GIRAR 
rotate(angle)
//SÉPTIMO CREAR OBJETO PARA DARLE GIRO
rect(0,0,100,20)
//ONCE LLAMAR LA FUNCIÓN POP PARA VOLVER A LA CONFIGURACIÓN ANTERIOR ASI NO AFECTARÁ OTROS CUERPOS
pop ();
angle+=0.1


  ellipse(ball.position.x,ball.position.y,20)
  rect(ground.position.x,ground.position.y,400,20)
}
//PRIMERO CREAR UNA FUNCIÓN PARA APLICAR FUERZA A UN CUERPO
function vForce(){
//SEGUNDO APLICAR FUERZA A UN CUERPO
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.5});
}

