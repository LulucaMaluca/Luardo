const botoes = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo')
//botoes.length

for(let i = 0; i <botoes.length; i++ ){
botoes[i].onclick = function(){
    for(let j= 0; j < botoes.length; j++){
        botoes[j].classList.remove('ativo');
        textos{j}.classList.remove('ativo');
    }
    botoes[i].classList.add('ativo');
    textos[j].classList.add('ativa');

}

//botoes[i].classList.remove('ativo');
}
const contadores = document.querySelectorAll('.contador')
