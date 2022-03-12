/* Esto es el Script de JavaScript */

let valor1 = prompt("Dame tu Gasto");


let multiplicadorbajocosto = 1;
let multiplicadormediocosto = 3;
let multiplicadorcostroalto = 5;



if (parseInt(valor1)<= 300 )
{
    let multiplicador = valor1 * multiplicadorbajocosto;
    alert("Tu tarifa baja a pagar es: $" + multiplicador);
}
else if (valor1 > 300 && valor1 < 600)
{
    let multiplicador = valor1 * multiplicadormediocosto;
    alert("Tu tarifa Media a pagar es: $" + multiplicador);
}

if (parseInt(valor1) >= 600)
{
    let multiplicador = valor1 * multiplicadorcostroalto;
    alert("Tu tarifa Alta a pagar es: $" + multiplicador)
}



