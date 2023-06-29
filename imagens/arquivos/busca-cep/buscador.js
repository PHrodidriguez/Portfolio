let cep = document.querySelector('#cep');
let rua = document.querySelector('#logradouro');
let bairro = document.querySelector('#bairro');
let localidade = document.querySelector('#localidade');
let estado = document.querySelector('#estado');

cep.value ='01001000';

cep.addEventListener("blur", function(e){
    let cep = e.target.value;
    let script = document.createElement ('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm';
    document.body.appendChild(script);
});

function popularForm(resposta){

    if( "erro" in resposta){
        alert('Cep não encontrado');
        return;
    }

    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    localidade.value = resposta.localidade;
    estado.value = resposta.uf;
};