document.getElementById('btn-verificar-vogais').onclick = verificaPalavraUsuario;

function verificaVogais(palavra){

    const letras = palavra.split("");

    let vogais = "";

    const vogaisExistentes = ['a','e','i','o','u','A','E','I','O','U']

    for(i=0; i<letras.length; i++){
        if (vogaisExistentes.includes(letras[i])){
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