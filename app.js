let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;


function alterarTextoNaTela (tag,texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto,"Brazilian Portuguese Female", {rate:1.2});
}

function mensagemInicial() {
alterarTextoNaTela('h1','Jogo da adivinhação');
alterarTextoNaTela('p','escolha entre 1 e 10');
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativa = 1;
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeElementoDaLista = listaDeNumerosSorteados.length;

    if (quantidadeElementoDaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

mensagemInicial();  

function verificarChute() {
    let chute = document.querySelector('input').value;
    let numeroTentativas = tentativa > 1 ? 'tentativas' : 'tentativa';
    let mensagemAcerto =`você acertou com ${tentativa} ${numeroTentativas}`

    if (chute == numeroSecreto) { 
        alterarTextoNaTela('h1','parabéns');
        alterarTextoNaTela('p',mensagemAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {
        if (chute > numeroSecreto) {
            alterarTextoNaTela('p', 'Errou, o número é menor');
        }else {
            alterarTextoNaTela('p','Errou, o número é maior');
        }
        tentativa++;
    }
    
}


