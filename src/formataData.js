$( function() {
    $( ".datepicker" ).datepicker();
});  


document.getElementById('btn-formatar-data-usuario').onclick = formataDataUsuario;

function formataData(data){
    let mes = data.split("/")[0];
    let dia = data.split("/")[1];
    let ano = data.split("/")[2];

    return ano + mes + dia;
}

function formataDataUsuario(){
    const dataUsuario = document.getElementById('data-usuario').value;

    const dataUsuarioFormatada = formataData(dataUsuario);

    imprimeResultadoData(dataUsuarioFormatada);
}

function imprimeResultadoData(resultado){
    document.getElementById('resultado-data-formatada').innerHTML = `Resultado: ${resultado}`;
}
