alert('olá! seja bem vindo');

let nomeUsuario = '';

let texto = document.querySelector('span');


while (nomeUsuario == ''){
 nomeUsuario = prompt('Qual seu nome?');
}

if (nomeUsuario == null) {
    texto.textContent = 'usuario' ;
} else{

texto.textContent = nomeUsuario;
}
