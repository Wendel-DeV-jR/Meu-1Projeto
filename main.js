//*let minhaVAriavel = 'Bob';
//*minhaVariavel = 'Steve';
//*let sorvete = 'chocolate';
//if (sorvete === 'chocolate') {
 // alert('Opa, Eu amo sorvete de chocolate!');
//} else {
//  alert('Ahh, mas chocolate é o meu favorito...');
//*}
//A instrução return diz ao navegador para retornar a variável 
//resultado da função para que ela esteja disponível para uso.
//*function multiplica(num1,num2) {
 //   let resultado = num1 * num2;
 //   return resultado;
//  }
  //evento ONClick
  document.querySelector('html').onclick = function() {
    alert('Bem vindo! então vamos la?');
}
//ONCLICK EXECUTA VAZIO
//pdocument.querySelector('html').onclick = function() {};
//OU
//let meuHTML = document.querySelector('html');
//meuHTML.onclick = function() {};

//imagem trocar//Agora quando você clicar na imagem, ela deve mudar para a outra!
let minhaImagem = document.querySelector('img');
minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === './img/calhanbeq.webp') {
      minhaImagem.setAttribute ('src','img/navefirefox1.jpg');
    } else {
      minhaImagem.setAttribute ('src','./img/calhanbeq.webp');
    }

//isso pega referências para o novo botão que 
//adicionamos e para o título, e guarda ambos em variáveis: 
}
let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

//Essa função contem uma função prompt(), que traz uma caixa de diálogo assim como
 //alert() faz. Este prompt(), no entanto, pede ao usuário para inserir algum dado
 // e guarda os dados em uma variável quando o botão OK é pressionado.
function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  localStorage.setItem('nome', meuNome);
  meuCabecalho.textContent = 'meu site é top, ' + meuNome;
}
//Em seguida, adicione esse bloco if ... else — poderíamos chamar isso de código de
// inicialização, pois ele estrutura o aplicativo quando é carregado pela primeira vez: 
if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'Meu site é top, ' + nomeGuardado;
}

meuBotao.onclick = function() { defineNomeUsuario();
}

  


  

