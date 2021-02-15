//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var parar_numero = 7

var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%

var propiedades_recargo = 0.35 // 35%

var salario_recargo = 0.05 // 5%

while (parar_numero >= 1){
//Recargo
var recargo_edad = 0
var recargo_propiedades = 0
var recargo_salario = 0
var recargo_edad_conyuge = 0
var recargo_hijos = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Propiedades
var propiedades = 0
//Salario
var salario = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
console.log("Edad Interesado", edad_numero);
//procedemos solo si es mayor de edad
if(edad_numero>=18){
var propiedades = prompt("Ingrese numero de propiedades, 0 si ninguna")
var salario = prompt("Ingrese su salario mensual");  
var casado = prompt("¿Está casado actualmente?", "si/no")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
//convirtiendo valores ingresados a números 
var edad_numero = parseInt(edad)
var propiedades_numero = parseInt(propiedades)
var salario_numero = parseInt(salario)
console.log("Edad Interesado "+ edad_numero);
console.log("Propiedades "+ propiedades_numero);
console.log("Salario "+ salario_numero);
  
  var edad_conyuge_numero = 0

//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
var  edad_conyuge_numero = parseInt(edad_conyuge)};

console.log("Edad Conyuge", edad_conyuge_numero);

var hijos = prompt("¿Tiene hijos o hijas?", "si/no")
//Comprobamos la cantidad de hijos solamente si los tiene
var cantidad_hijos = 0
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = prompt("¿Cuantos hijos e hijas tiene?")
}
var cantidad_hijos_numero = 0
//convirtiendo la cantidad hijos ingresados a números 
var cantidad_hijos_numero = parseInt(cantidad_hijos)
console.log("cantidad hijos", cantidad_hijos_numero);

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
/**
* 1. Recargo por edad del asegurado 
*/
if(edad_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo_edad = precio_base * edad_18;}
  else if(edad_numero>=25 && edad_numero<50){
    recargo_edad = precio_base * edad_25;}
  else if(edad_numero>=50){
    recargo_edad = precio_base * edad_50;}

/** 
 * 2. Recargo por la edad del conyuge
 */

if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo_edad_conyuge = precio_base * edad_18;}
  else if(edad_conyuge_numero>=25 && edad_conyuge_numero<50){
    recargo_edad_conyuge = precio_base * edad_25;}
  else if(edad_conyuge_numero>=50){
    recargo_edad_conyuge = precio_base * edad_50;}
  else if(edad_conyuge_numero<18){
    recargo_edad_conyuge = 0;}

/**
 * 3. Recargo por la cantidad de hijos 
 */ 
  
  recargo_hijos = cantidad_hijos_numero * hijos_recargo * precio_base
  
/**
 * 4. Recargo por la cantidad de propiedades 
 */ 
  
  recargo_propiedades = propiedades_numero * propiedades_recargo * precio_base

/**
 * 5. Recargo por salario 
 */ 
  
  recargo_salario = salario_recargo * precio_base
  

  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_edad + recargo_edad_conyuge + recargo_hijos + recargo_propiedades + recargo_salario

console.log("Recargos "
            + " Edad " + recargo_edad
            + " Edad Conyuge " + recargo_edad_conyuge
            + " Hijos " + recargo_hijos
            + " Propiedades " + recargo_propiedades
            + " Salario " + recargo_salario);
  
precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)
}
else {
alert ("El asegurado "+nombre)
alert ("Es menor de edad "+edad_numero)
}
//Mensaje de alerta para parar 
var parar = prompt("Escriba Salir para Terminar")
if("SALIR" == parar.toUpperCase()){
var parar_numero = 0
}
else {
console.log("valor "+parar_numero)
console.log(parar);}
}



