document.getElementById('btn-verificar-vogais').onclick = verificaPalavraUsuario;

function verificaVogais(palavra){

    const letras = palavra.split("");

    let vogais = "";

    for(i=0; i<letras.length; i++){
        if (letras[i] === 'a' || letras[i] == 'e' || letras[i] == 'i' || letras[i] == 'o' || letras[i] == 'u' ||letras[i] === 'A' || letras[i] === 'E' || letras[i] === 'I' || letras[i] === 'O' || letras[i] === 'U'){
           vogais += letras[i];
        }
    }
    return vogais
};

function verificaPalavraUsuario(){

    const palavraUsuario = document.getElementById('palavra-usuario').value;

    const vogaisPalavraUsuario = verificaVogais(palavraUsuario);

    imprimeResultadoVogais(vogaisPalavraUsuario);
}

function imprimeResultadoVogais(resultado){
    document.getElementById('resultado-vogais-palavra').innerHTML = `Resultado: ${resultado}`;
}