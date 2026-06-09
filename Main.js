/***
let precios =[10, 50, 120, 80, 200, 30];

let preciosNuevos = [];

for (precio of precios){
  
  if (precio <= 100 ){
    let newPrice = precio * 20;
    preciosNuevos.push(newPrice);
   }
  }
console.log(preciosNuevos)



let products = [
    { nombre: "Teclado", precio: 25 },
    { nombre: "Mouse", precio: 15 },
    { nombre: "Audífonos", precio: 50 }
];

let preciosConDescuento = [];
/***
for (product of products){
  console.log ("el producto " + product.nombre + " cuesta " + product.precio) 
}

for (let key of products){
  if (key.precio > 20){
    console.log(`El producto ${key.nombre} cuesta $${key.precio}`);
  }
}

for (product of products){
  if(product.precio > 20){
  let nuevoPrecio = product.precio * 0.90;
  
  product.precio = nuevoPrecio
    preciosConDescuento.push(product)
  }
}

console.log(preciosConDescuento)



let products = [
    { nombre: "Teclado", precio: 25 },
    { nombre: "Mouse", precio: 15 },
    { nombre: "Audífonos", precio: 50 }
];
let productAeliminar = "Mouse";
let nuevaListaProducts = [];

for (product of products){
  if (product.nombre !== productAeliminar){
    nuevaListaProducts.push(product)
  }
}
console.log(nuevaListaProducts)

function sumarPrecios (arr){
  let totalPrecio = 0;
  for (price of arr){
    totalPrecio += price.precio;
  }
  return totalPrecio;
}


let resultadoTotal = sumarPrecios(products);

console.log(`El resulto total es de $${resultadoTotal}`);  



let ruta = [
    { id: 1, estado: "entregado", prioridad: "normal", km: 10 },
    { id: 2, estado: "pendiente", prioridad: "urgente", km: 8 },
    { id: 3, estado: "entregado", prioridad: "urgente", km: 15 },
    { id: 4, estado: "pendiente", prioridad: "normal", km: 5 }
];
function calcularConsumo(arr){
  let totalKm = 0;
  for(km of arr){
    if(km.estado === "entregado"){
     totalKm += km.km;
    }
  }
  return totalKm;
}
let totalConsumido = calcularConsumo(ruta) * 1.5;
console.log(`Se gasto ${totalConsumido} de gasolina.`)

function pedidosUrgentes(arr){
  let urgentes = [];
  for(pedido of arr){
    if(pedido.prioridad === "urgente" && pedido.km > 10 ){
      urgentes.push(pedido);
    }
  }
  return urgentes;
}

let paquetesUrgentes = pedidosUrgentes(ruta);
console.log(`Los pedidos urgentes son ${ JSON.stringify(paquetesUrgentes) }`)

let num = parseInt(prompt('ingresa'));

console.log(num)



let placas = ["ZBZ634", "ABC12", "MEX990", "MX1", "YUC777"];

function validadorPlacas (ar){
  let validas = [];
  let invalidas = [];
  
  for(placa of ar){
    if(placa.length === 6){
      validas.push(placa)
    }else {
      invalidas.push(placa)
    }
  }
  return { valida : validas, invalida : invalidas};
}

let placasAgrupadas = validadorPlacas(placas);

console.log(JSON.stringify(placasAgrupadas) )

let jornada =[ 
{id: 1, pagoBruto: 50, km: 5},
{id: 2, pagoBruto: 85, km: 4},
{id: 3, pagoBruto: 85, km: 10},
{id: 4, pagoBruto: 95, km: 6},
{id: 5, pagoBruto: 193, km: 11}
];


function calcularGanaNet(jornada){
  let pagoTotalBruto = 0;
  let totalKm = 0;
  
  for(entrega of jornada){
    pagoTotalBruto += entrega.pagoBruto;
    totalKm += entrega.km;
  }
  
  let gastGaso =totalKm * 1.5;
  let comision = pagoTotalBruto * 0.15;
  let ganaciaNeta = pagoTotalBruto - gastGaso - comision;
  
  return {pagoTotalBruto,  totalKm, gastGaso, comision, ganaciaNeta, }
  }
let resumenFinanciero = calcularGanaNet(jornada);
console.log(resumenFinanciero);
console.log(JSON.stringify(resumenFinanciero))


let costoServicio = parseInt(prompt("ingresa servicio"));

let insumos = {
  aceiteSintetico: 162,
  bujiaNGK: 65,
  filtroGasolina: 45,
  filtoAire: 25
  };
  
  function calcularGanaciaNeta(insumo1,insumo2){
    let costoInsumo = insumo1 + insumo2;
    let ganaciaNeta= costoServicio - costoInsumo;
    if(ganaciaNeta > 200){
      return ganaciaNeta + " Negicio rentable, sigue asi"
    }else{
      return ganaciaNeta + " Hay que optimizar costos"
    }
  }
    
  let result = calcularGanaciaNeta(insumos.aceiteSintetico,insumos.bujiaNGK);
  
  console.log(result);

  
  let motos = [
    {moto: "ft150",
    kmactual: 3000,
    kmanterior: 1500},
    
    {moto: "hondaTool",
    kmactual: 6000,
    kmanterior: 1500},
    
    {moto: "ft200",
    kmactual: 6000,
    kmanterior: 2000}
   ];
   
   function determinarServicio(motos){
    let nuevaLista= [];
    
     for(unidad of motos){
      let restaTotal = unidad.kmactual - unidad.kmanterior;
       if(restaTotal > 3000){
         nuevaLista.push(unidad.moto);
         
       }
     }
     return nuevaLista.join(", ") + " estas moto ya ocupa servicio"
   }
   
   let motosParaServicio = determinarServicio(motos);
   
   console.log(motosParaServicio);
   

let n = 5; 
for (let i =0; i < n; i++){
  if (i ===0 || i === n-1){
    console.log("*" * n)
  }else{
    console.log("*"+" "*(n-2)+"*");
  }
}



let palabra = "yucatan merida";

function contadorVocales(palabra){
  let vocales = "aeiouAEIOU";
  let contador = 0;
  //palabra.split("");// esta fue casi innecesaria for..of puede recorrer strings
 // let total = palabra.split("").filter(letra => vocales.includes(letra)).length;//

  for (n of palabra){
    if(vocales.includes(n)){
      contador += 1;
      
    }
  }
  return contador
 // return total//
}

let resul= contadorVocales(palabra);

console.log(resul);


let horas = Number(prompt("ingresa las horas transcurridas"))

function sensorGoteo(horas){
  if (horas <= 1){
    console.log("¡Urgente! Fuga crítica detectada")
  }else if (horas > 1 && horas <= 8 ){
    console.log("Fuga leve: Revisar retén del piñón")
  }else if (horas > 8 ){
    console.log("Sudado normal: Limpiar y monitorear")
  }
}
sensorGoteo(horas);



let minutosRecorridos = Number(prompt("ingresa la cantidad de minutos recorridos"))
function calcularCalorias(mins){
  let calculoCalorias = mins * 5;
  
  if(calculoCalorias > 100){
    return "¡Gran esfuerzo, Manu!"
  }else {
    return "buen inicio"
  }
}
let caloriasQuemadas = calcularCalorias(minutosRecorridos)
console.log(caloriasQuemadas);


let cantidadServivios = Number(prompt("ingresa cuanto servicios hiciste hoy"));
let precioUnitario = 200;
let costoMaterial = 30;

function calcularGanaciaNeta (cantSer, precioUni, costoMta){
  let resul = (precioUni - costoMta) * cantSer;
  
  return resul;
}

let ganacias = calcularGanaciaNeta(cantidadServivios, precioUnitario, costoMaterial);

console.log(ganacias);


let nums = [10,3,5,77,6,88,1070,];

function numMayor(arr){
  let mayor= arr[0];
  let menor= arr[0];
  for (num of arr){
   if (num > mayor){
     mayor = num;
   }
   if (num < menor){
     menor = num;
   }
   
   //mayor = num > mayor ? num : mayor;
   //menor = num < menor ? num : menor;
   }
  return mayor + " y " + menor;
  
  
}
let result = numMayor(nums);

console.log(result);


let temperatura = Number(prompt("ingresa temperatura"));

function termometro(temp){
  let mensaje = "";
  
 // mensaje = temp > 38 ? "¡Qué calor! Busca un frapé" : "Está tranquilo";
  
  return temp > 38 ? "¡Qué calor! Busca un frapé" : "Está tranquilo";;
}

let mensaje= console.log(termometro(temperatura));


let nums = [10,3,5,77,6,88,1070];

console.log(nums.length);

console.log(nums[5]);

console.log(nums.length-1)


let zapatos = [10, 20, 20, 30]

function hayParejas(ar){
  let mensaje = "";
  let bandera = false;
  for(let i = 0; i < ar.length-1; i++ ){
    if(ar[i] === ar[i + 1]){
      bandera = true;
    }
    }
    mensaje = bandera === true? "¡Pareja encontrada!" : "Todo despejado";
    return mensaje;
}
let resul= console.log(hayParejas(zapatos))


let size = 10;
for(let i =0; i < size; i++){
  console.log("*" * size);
  
}


let intentoUsuario = Number(prompt("ingresa un numero"));
let resul = 17;

function confirmarResul(x){
  let ecuacion = (3*x) + 5;
  
  if(ecuacion == resul){
    console.log("victoria!!")
  }else if (ecuacion < resul ){
    console.log("numero incorrecto, el numero es menor")
  }else if ( ecuacion > resul){
    console.log("numero incorrecto, el numero es mayor")
  }
}

confirmarResul(intentoUsuario)
let a = 0;

function funo(a){
  console.log(a)
   a = 5;

}
funo(10)

let kmIdaVuelta = Number(prompt("ingresa la cantidad de km de ida y vuelta"));
let pagoCliente = parseFloat(prompt("ingresa costo de envio"));


function calcular(km, envio){
  let costoGasolina = 24;
  let rendiGasoKm = 30 ;
  
  // como dato una manera de hacer esta formula es    km/rendiGasoKm * costoGasolina 
  
  let usoGasKm = costoGasolina / (rendiGasoKm/km);
  let gananciaNeta = envio - usoGasKm;
  
  if (gananciaNeta > (envio*0.70)){
    return `El envio vale la pena, se gasto ${usoGasKm} de gasolina`
  }else{
    return "no vale la pena en envio"
  }
  
}

let resul = calcular(kmIdaVuelta, pagoCliente)
console.log(resul)


let x = [1,2,3];

let y = x;
y.push([2,5])
console.log(x[3][1])

let a = 1
a = a + (a += 1);
console.log(a)



let entregas = [10, 5, 7, 9, 14 ];

for (n of entregas){
  
}


function cuentaRegresiva(){
  console.log("bum!! 💣 ")
}
console.log("Iniciando cuenta...")
setTimeout(cuentaRegresiva, 2000)


setTimeout(( ) => { console.log("ya exploto")}, 3000)

**/
/***
const precios = [85, 120, 45, 150, 95, 60, 210, 75];

function identificarPrecios(arr){
  //let precioMenor = arr[0];
  let precioMenor= Math.min(...arr);
  //da el resultado y ya no tendria q usar ek for..of
 // let precioMayor = arr[0];
  let precioMayor= Math.max(...arr);
  let sumaTotal = 0
  
  
  for (pre of arr){
   /** precioMenor = (pre < precioMenor) ? pre : precioMenor;
    precioMayor = (pre > precioMayor) ? pre : precioMayor;

    
    sumaTotal += pre;
  }
  let promedio = sumaTotal/ arr.length;
  
  console.log(`El precio mas barato es ${precioMenor}`)
  console.log(`El precio mas caro es ${precioMayor}`)
  console.log(`El precio promedio es ${promedio}`)
}

identificarPrecios(precios)


let texto = "estoEsUnEjemplo";
let array = [];

for (let c of texto){
  if (c === c.toUpperCase()){
    array.push("_"+c.toLowerCase())
    //console.log("_"+c.toLowerCase())
  }else{
   array.push(c)
   //console.log(c)
  }
  
}
console.log(array.join(""))


let nums = [1,2,3];

nums.pop()

console.log(nums)


let precios = [250,777,357,124,577,1205];

function crearListaValue(ar){
  let listaProducts = [];
  
  for (let item of ar){
    if (item > 500){
      listaProducts.push({
        refa: "",
        precio: item,
        tipodecosto: "PREMIUM" });
      }else {
        listaProducts.push({
        refa: "",
        precio: item,
        tipodecosto: "ECONOMICO" });
    }
  }
  console.log(listaProducts)
}

crearListaValue(precios)

let listaProducts = ar.map(item => ({
    refa: "",
    precio: item,
    tipodecosto: item > 500 ? "PREMIUM" : "ECONOMICO"
}));
let i;
let x = []
let z = [];
for(i=0; i<=5;i++){
  x += i;
  z.push(i)
}
console.log(x)
console.log(z)

let n = "1" + 1;
n = n - 1;
console.log(n)

let a= null
let b= a || "hello"

console.log(b)
**/
let servicios = [
  {tipodeservicio: "Cambio de cadena", precio: 200 },
  {tipodeservicio: "Cambio de aceite", precio: 220 }
  ]
let tipoServicio = prompt(" ingresa el servicio a buscar");

function buscarServicio(serv,arr){
  for(servicio of arr){
    if (serv === servicio.tipodeservicio){
      console.log(JSON.stringify(servicio)) 
      console.table(servicio)
    }
  }
  
}

buscarServicio(tipoServicio, servicios)