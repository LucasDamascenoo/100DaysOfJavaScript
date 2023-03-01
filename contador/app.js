// const subtrai = document.querySelector(".subtrair");
// const resetNumero = document.querySelector(".resetar");
// const add = document.querySelector(".add");

// add.addEventListener("click", () => {
//   contador.innerHTML++;
// });

// subtrai.addEventListener("click", () => {
//   contador.innerHTML--;
// });

// resetNumero.addEventListener("click", () => {
//   contador.innerHTML = 0;
// });

//delegação de eventos: vamos adicionar o evento somente no pai dos elementos que queremos "ouvir"
// event Bubbling explicar o que é :

let contador = document.querySelector(".contador");
const botoes = document.querySelector(".botoes");

botoes.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    contador.innerHTML++;
    mudarCor();
  } else if (e.target.classList.contains("subtrair")) {
    contador.innerHTML--;
    mudarCor();
  } else {
    contador.innerHTML = 0;
    mudarCor();
  }
});

function mudarCor() {
  if (contador.innerHTML > 0) {
    contador.style.color = "yellow";
  } else if (contador.innerHTML < 0) {
    contador.style.color = "orangered";
  } else {
    contador.style.color = "#fff";
  }
}
