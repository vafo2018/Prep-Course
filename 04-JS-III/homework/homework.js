// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var i = array.length;
  return array[i-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var largarray = array.length;
  return largarray;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
     
  
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i] + 1;
    }  
    return array;     
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;

}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  for (i = 0; i < palabras.length; i++) {
    if(i===0){
      frase = palabras[i];
    }else{
      frase = frase + " " + palabras[i];   
    }  
  }
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var existe = false;
  for (let i = 0; i < array.length; i++) {
    if(array[i] === elemento){
      existe = true;
      i = array.length;
    }  
  }
  return existe;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
    for (let index = 0; index < numeros.length; index++) {
      suma = suma + numeros[index];
    }
    return suma;
  
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  var promedio = 0;
    for (let index = 0; index < resultadosTest.length; index++) {
      suma = suma + resultadosTest[index];
    }
  promedio = suma / resultadosTest.length;  
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var masgrande = 0;
  for (let index = 0; index < numeros.length; index++) {
    if(numeros[index] > masgrande){
       masgrande = numeros[index];
    }  
  }
  return masgrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
var producto = 1;  
if(arguments.length === 0){
  return 0;
}
for (let index = 0; index < arguments.length; index++) {
  producto = producto * arguments[index] ;
}
return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cantelementos = 0;
  for (let index = 0; index < arreglo.length; index++) {
    if(arreglo[index] > 18){
      cantelementos = cantelementos + 1;
    }  
  }
  return cantelementos;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  if(numeroDeDia === 2 || numeroDeDia === 3 || numeroDeDia === 4 ||numeroDeDia === 5 || numeroDeDia === 6){
    return "Es dia Laboral";
  }
  return "Es fin de semana";
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
  var convstring = n.toString();
  if(convstring[0] === "9" )
    return true;
  else{
    return false;
  }  
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var todosiguales = true;
  for (let index = 0; index < arreglo.length; index++) {
    if (index < arreglo.length){
       if(arreglo[index] !== arreglo[index + 1]){
         todosiguales = false;
       }
    }
  return todosiguales;  
  }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  
  var mesenero = 0;
  var mesmarzo = 0;
  var mesnoviembre = 0;
  var nuevoarray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] === "Enero"){
       mesenero = 1;
       nuevoarray.push(array[index]);
    }else if (array[index] === "Marzo"){
      mesmarzo = 1;
      nuevoarray.push(array[index]);
    }else if (array[index] === "Noviembre"){
      mesnoviembre = 1;
      nuevoarray.push(array[index]);
    }
  }
  if (mesenero === 1 && mesmarzo === 1 && mesnoviembre === 1){
    return nuevoarray;
  }else{
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoarray = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > 100 && array[index]!== 100){
      nuevoarray.push(array[index]);
    }
  }
  return nuevoarray;  
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
   var array = [];
   var cont = 0;
  for (var index = 1; index <= 10; index++) {
    numero = numero + 2;   
    array.push(numero);
    cont = index;
    if(cont === numero){
      break;
    }
  }
  if  (cont === numero){
    return "Se interrumpió la ejecución";
  }else{
    return array;
  }  
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
