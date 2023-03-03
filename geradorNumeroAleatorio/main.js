const numero = document.querySelector(".numero");
const botao = document.querySelector(".botoes");

// criando a função que gera os numeros aleatorios
function gerarNumero() {
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  numero.innerHTML = numeroAleatorio;
}
gerarNumero();
// evento click do botão : toda vez o botão for clicado vamos adicionar um novo numero aleatorio no HTML

botao.addEventListener("click", gerarNumero);
