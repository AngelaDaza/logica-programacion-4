const numero = prompt("Ingrese un numero");
let operacion = 0;
let lista = [0, 1];
for(let i = 0; i < numero-2; i++){
    operacion = lista[i+1]+lista[i];
    lista.push(operacion);
}
console.log(lista);
