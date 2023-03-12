/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente.

    - passo 1 - dar um jeito de pegar o elemento HTML dos botões

    - passo 2 - dar um jeito de identificar o clique do usuario no botão

    - passo 3 - desmarcar o botão selecionado anterior
    
    - passo 4 - marcar o botão clicado como se estivesse selecionado

    - passo 5 - esconder a imagem anterior

    - passo 6 - fazer aparecer a imagem correspondente
*/


// - passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')
const textoAtivo = document.querySelectorAll('.descricao')


//- passo 2 - dar um jeito de identificar o lique do usuario no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarbotaoselecionado();

        selecionarBotaoCarrossel(botao);

        desativarImagemSelecionada();

        mostrarImagemDeFundo(indice);

        // //- passo 7 retirar o texto
        // const textoselecionado = document.querySelector('.conteudoativo');
        // textoselecionado.classList.remove('conteudoativo');

        // // - passo 8 adicionar o outro texto
        // textoAtivo[indice].classList.add('conteudoativo')



    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function desativarImagemSelecionada() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarbotaoselecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

