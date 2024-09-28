//Crie 1 funçaõ com parametros que calcule a area de um quadrado e exiba em um alert.
// function area(quadrado) {
//     let calculo = (n1**n2)
//     return calculo;
// }

// let mensagem = are(4)
// alert ("A area do é " + mensagem)

//correção professor

function calcularAreaQuadrado(lado) {
    let resultado = lado ** 2;
    return resultado;
}

let result = calcularAreaQuadrado(valor);
let valor = 3;
let mensagem = `A area do quadrado é: ${calcularAreaQuadrado(valor)}m²`;

alert(mensagem);