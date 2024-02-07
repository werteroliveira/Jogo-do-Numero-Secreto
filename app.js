let listaDenumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibierTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.15});
}

function exibirMensagemInicial(){
    exibierTextoNaTela('h1','jogo do número secreto');
    exibierTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if (chute == numeroSecreto) {
        exibierTextoNaTela('h1','acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibierTextoNaTela('p' , mensagemTentativas );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibierTextoNaTela('p' , 'o número secreto é menor');
        } else{
            exibierTextoNaTela('p' , 'o número secreto e maior');
        }
        tentativas++
        limparCampo();
    }
}


function gerarNumeroAleatorio(){
    let numeroEscolhido =  parseInt(Math.random()* numeroLimite + 1);
    let quantidadeDeElementosDaLista = listaDenumerosSorteados.length;

if(quantidadeDeElementosDaLista == numeroLimite) {
    listaDenumerosSorteados = [];
}

    if (listaDenumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleator();
    } else {
        listaDenumerosSorteados.push(numeroEscolhido);
        console.log(listaDenumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo (){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();  
    document.getElementById('reiniciar').setAttribute('disabled',true);
}