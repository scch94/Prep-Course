let string="santiago"
//console.log(str.length)

let cont=0;
let objeto={};
while(string.length>0){
    var letra=string[0];
    for(var i=0; i<string.length; i++){
        if(letra==string[i]){
            cont=cont++;
        }
    }
    objeto.letra=cont;
    let remplaso=/letra/g
    string=string.replace(remplaso,"")
    string.replace(remplaso,"")

}
console.log(objeto)