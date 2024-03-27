alert('olá! seja bem vindo');

let nomeUsuario = '';

let texto = document.querySelector('span');

texto.textContent = nomeUsuario;

while (nomeUsuario == ''){
 nomeUsuario = prompt('Qual seu nome?');
}