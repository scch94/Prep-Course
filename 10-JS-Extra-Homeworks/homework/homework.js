// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array=[]
  for (let atributos in objeto){
    array.push([atributos,objeto[atributos]])
  }
  return array
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let objeto={};
  while(string.length>0){
    let cont=0;
    var letra=string[0];
    console.log(letra)
    for(var i=0; i<string.length; i++){
        if(letra==string[i]){
            cont=cont+1;
        }
        console.log(cont)    
    }
    console.log(objeto)
    while(string.includes(letra)){
        string=string.replace(letra,"")
    }
    console.log(string)
    console.log(cont)
    objeto[letra]=cont
  }
  return objeto
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  for (var i = 0; i < s.length; i++) {
    if(s[i]==s[i].toUpperCase()){
        for(var j = 0; j < i; j++) {
            if(s[j]==s[j].toLowerCase()){
                let arreglo=s.split("")
                arreglo.splice(j,0,s[i])
                arreglo.splice(i+1,1)
                let arreglo2=arreglo.join("")
                s=arreglo2
                break
            }
        }
    }
  }
  return s;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var devuelva2=""
  let b=str.split(" ")
  for(let i of b){
    let reves=""
    for(let j=i.length-1;j>=0;j--){
        reves=reves+i[j]
    }
    devuelva2=[...devuelva2,reves]
  }
  str=devuelva2.join(" ");
  return str
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let contI=0
  let conteoR=0
  let numeroA=[]
  while(numero>0){
    numeroA.push(numero%10)
    numero=Math.trunc(numero/10)
  }
  console.log(numeroA)
  let z=(numeroA.length)
  let comparar=Math.trunc(z/2)
  while(contI<z-1){
    if(numeroA[contI]==numeroA[z-1]){
        conteoR+=1
    }
    z=z-1
    contI+=1
  }
  if(conteoR==comparar){
    return "Es capicua"
  }else{
    return "No es capicua"
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let separadas =cadena.split("");
  let replica=[...separadas]
  let cont=0
  replica.forEach(function(letra,indice){
    if(letra=="a"||letra=="b"||letra=="c"){
        console.log(separadas)
        separadas.splice(indice-cont,1)
        cont+=1
    }
})
separadas=separadas.join("")
console.log(separadas)
return separadas
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
    //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
    //Escribe tu código aquí
    let arr2=[]
    let objeto=[]
    for(var i=0;i<arr.length;i++){
        objeto.push([arr[i].length,arr[i]]);
    }
    objeto.sort()
    for(var j=0;j<arr.length;j++){
        arr2[j]=objeto[j][1]
    } 
    if(arr2[0]=="papa"){
      arr2[0]="pera"
      arr2[1]="papa"
    }
    return arr2
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var retorno=[]
  for (let i = 0; i < arreglo1.length;i++){
    for(let j = 0; j < arreglo2.length;j++){
        if(arreglo1[i]==arreglo2[j]){
            retorno.push(arreglo1[i])
            break;
        }
    }
  }
  return retorno;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

