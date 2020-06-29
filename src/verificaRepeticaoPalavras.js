document.getElementById('btn-verificar-repeticao-palavras').onclick = contaPalavrasFraseUsuario;

function contaPalavrasFrase(frase){
    let palavras = frase.split(" ");
    let fraseContada = {};
    

    for (let i = 0; i < palavras.length; i++) {
        if (!fraseContada[palavras[i]]){
            fraseContada[palavras[i]] = 0;
        }
        fraseContada[palavras[i]]++;
    }

    return fraseContada;
}

function contaPalavrasFraseUsuario(){

        const fraseUsuario = document.getElementById('frase-usuario').value;

        const fraseContada = contaPalavrasFrase(fraseUsuario);

        const palavras = Object.keys(fraseContada);

        for (let i = 0; i<palavras.length; i++){
            let palavra = palavras[i];
            imprimeResultadoPalavrasRepetidas(palavra, fraseContada[palavra]);
        }

}

function imprimeResultadoPalavrasRepetidas(palavra, quantidade){
    document.getElementById('resultado-repeticao-palavras').innerHTML += `${palavra} = ${quantidade}<br>`;
}