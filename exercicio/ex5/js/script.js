// Crie 1 função que retorn se o valor digitado é ou não é um numero e exiba em um alert.

function verificarNumero(valor) {
    return isNaN(valor);
}

alert(`É uma letra? ${verificarNumero(5)}`)