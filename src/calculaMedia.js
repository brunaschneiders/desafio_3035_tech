document.getElementById('btn-incluir-numero').onclick = incluiNumero;
document.getElementById('btn-calcular-media').onclick = calculaMedia;

const numeros = [];
let quantNumeros = 0;

function incluiNumero(){

    const numero = parseFloat(document.getElementById('number').value);
    const quantMaxNumerosArray = 15;

    if(numeros.length<quantMaxNumerosArray){
        if(isNaN(numero)){
            document.getElementById('informativo-media').innerHTML = `Insira um número para incluir no cálculo.`;
        }else{
            document.getElementById('informativo-media').innerHTML = ``;

            numeros.push(numero);
           
            document.getElementById('numeros-envolvidos').innerHTML += `
            <div class="numero">${numero}</div>`;
        }
    }else{
        document.getElementById('informativo-media').innerHTML = `Você já inseriu 15 números, efetue o cálculo.`;
    } 
}

function calculaMedia(){

    let soma = 0;

    if (numeros.length < 15){
        document.getElementById('informativo-media').innerHTML = `Você ainda não incluiu 15 números, adicione alguns .`;
    }else{
        document.getElementById('informativo-media').innerHTML = ``;

        for(i=0; i<numeros.length; i++){
            soma += numeros[i];
        }

        const media = (soma/numeros.length).toFixed(2);

        document.getElementById('resultado-media').innerHTML = `Resultado: ${media}`;
    }

    

    
}