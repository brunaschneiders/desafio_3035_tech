document.getElementById('btn-verificar-palindromia').onclick = verificaPalindromoUsuario;

function normalizaString(string){
    let stringMinusculo = string.toLowerCase();
    const stringMinusculoSemCaracteres = stringMinusculo.normalize('NFD').replace(/[^0-9a-z]/g, '');
    const stringNormalizada = stringMinusculoSemCaracteres;

    return stringNormalizada;
}

function palindromo(string){
    let stringNormalizada = normalizaString(string);

    const letras = stringNormalizada.split("");

    let stringInvertida = "";

    for(i=(letras.length-1); i>=0; i--){
        stringInvertida += letras[i];
    }

    if (stringNormalizada == stringInvertida){
        return true;
    } else {
        return false;
    }
}

function verificaPalindromoUsuario(){
    const stringUsuario = document.getElementById('palavra-frase-usuario').value;

    const resultado = palindromo(stringUsuario);

    if (resultado){
        imprimeResultadoPalindromia("É um palíndromo");
    }else{
        imprimeResultadoPalindromia("Não é um palíndromo");
    }  
}

function imprimeResultadoPalindromia(resultado){
    document.getElementById('resultado-palindromia').innerHTML = `Resultado: ${resultado}`;
}
