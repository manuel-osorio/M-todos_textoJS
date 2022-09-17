

let num=1, dato = 10
dato = window.prompt('introduce numero meno que 10','0');

while(num <10){
   num=parseInt(dato);
   document.write('num');
}


let a = "hola";  
const b =  'Diego';

document.write('La constante b contine:'+b);
document.write('<br>');
document.write('La variable a contien' +a);
document.write('<br>');
document.write('Concatenacion: con signo + : '+a+b);


let suma1, suma2, res;
suma1 = 4;
suma2 = 6;
res = suma1 * suma2;
document.write("variable a contien: "+suma1);
document.write(`d :${a}`)
document.write('<br>');
document.write('variable b contien:'+suma2);
document.write('<br>');
document.write('Resultado:' +res);

/*
let dato, resultado;
dato =  window.prompt('introduce tu nombre','nombre');
resultado =  '<br><b>hola, como estas<br> ? '+dato;
document.write(resultado)*/
/*
let dato, num;
dato =  window.prompt('introduce número?','0');
num =  parseInt(dato);
num *=2;
document.write('<br>el doble es:'+num);
*/
/*
let dato1, dato2, num1, num2;
 dato1 = window.prompt('Introduce primer método','0');
 num1= parseInt(dato1);
 dato2 = window.prompt('introduce el segundo número?', '0');
 num2 =  parseInt(dato2);
 let resultado = num1 + num2;
 document.write('<br><br> El resulktado es: '+resultado);
*/
/*

let resta,  dato1, dato2, num1,num2;
dato1 =  window.prompt('Primer numero:','valor inicial');
num1= parseInt(dato1);
dato2 =  window.prompt("Ingrese su segundo Valor","valor a restas")
num2 =  parseInt(dato2);
resta =  num1 -num2;

document.write('Resta es: '+ resta);


*/



/*
let resta, mult, dato1, dato2, num1, num2;

dato1 =  window.prompt('primer numero:','0');
num1 = parseInt(dato1);
dato2 = window.prompt('segundo numero', '0');
num2 =  parseInt(dato2);
resta = num1 -num2;
mult = num1*num2;;
document.write('<br><b>numero a:'+num1);
document.write('<br>numero b:'+ num2);
document.write('<br><br>Resta:'+ resta);
document.write('<br><br> multipplicaicon'+  mult);

*//*
let marca , modelo, boton;

//marca =  window.prompt(ingre);
marca =  document.createElement('input');
modelo =  document.createElement('input');
boton =  document.createElement('button')


boton.textContent = 'calcular' 
marca.placeholder = 'Marca'; 
modelo.placeholder =  'Modelo'
modelo.type = 'text';

document.body.appendChild(marca);
document.body.appendChild(modelo);
document.body.appendChild(boton);
boton.addEventListener('click', function(){
    let descuento;
    if (marca==='ford' && modelo==='fiesta'){   return descuento = 5;}
    if (marca === 'ford' && modelo === 'focus'){  return descuento= 10;}
    let descuentolb =  document.createElement('label')
    document.body.appendChild(descuentolb);
    descuentolb.innerHTML =  `La Marca es${marca.value}, Modelos es${modelo.value} y el descuento es ${descuento}`;
 
})
//if (!marca) return alert('No se ingreso ningundato') 
marca =  window.prompt('Marca:')
modelo =  window.prompt('Modelo:')
let descuento;
if (marca=== 'ford' && modelo=== 'fiesta'){
    descuento =  5;
}
if(marca=== 'ford' && modelo === 'focus'){
    descuento =  8;
}
document.write(`El descuento de es de ${descuento}`)


*/

