/***
 function cambiarParrafo(){
  const p = document.getElementById("parrafo")
  
  p.innerHTML = "este parrafo ya no es el mismo";
  p.style.backgroundColor = "blue";
}
let tipoServicio = prompt(" ingresa el servicio a buscar");
**/
let servicios = [
  {tipodeservicio: "Cambio de cadena", precio: 200 },
  {tipodeservicio: "Cambio de aceite", precio: 220 },
  {tipodeservicio: "Cambio de bujia", precio: 200 }
  ]


let carrito = [];
const p = document.getElementById("parrafo")

function buscarServicio(){
  
  const serv = document.getElementById('servicio');
  
  for(servicio of servicios){
    if (serv.value === servicio.tipodeservicio){
     p.innerHTML = `Servicio: ${servicio.tipodeservicio} <br> Precio: $${servicio.precio}`
     serv.value = ""
      //console.log(JSON.stringify(servicio)) 
      
      carrito.push(servicio)
      //console.table(servicio)
    }
  }
  
}

function borrarP(){
  p.innerHTML = ""
}

function verCarrito(){
  const cajaCarrito= document.getElementById("carrito")
let suma = 0;
for(let serv of carrito){
  
  suma += serv.precio
  
  cajaCarrito.innerHTML= `el total es ${suma}` 
}
  
}
console.log(carrito)


// calculadora de procebtaje de bateo

let hits = 36;
let ab = 134;
console.log(hits/ab)
const bateador = document.getElementById("bateador");


function calcularAVS(){
  let nuevoHit = document.getElementById("nuevo_hit");
  let nuevoAB = document.getElementById("nuevo_ab")
  const h1 = document.getElementById("avs");
  
  let hitsIngresados = parseInt(nuevoHit.value);
  let abIngresados = parseInt(nuevoAB.value);
  
  
  if(!isNaN(hitsIngresados) && !isNaN(abIngresados)){
  hits += hitsIngresados
  ab += abIngresados
  
  let porcentajeBateo = (hits / ab).toFixed(3);
  
  h1.innerHTML = `El porcentaje de bateo de ${bateador.value} es de ${porcentajeBateo}`
  
  
  nuevoHit.value = "";
  nuevoAB.value = "";
  bateador.value = "";
  } else {
    h1.innerHTML = `ingresa la informacion requerida`
  }
  
  return ab
  return hits
}

calcularAVS()