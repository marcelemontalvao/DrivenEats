let prato, bebida, sobremesa;
let precoPrato, precoBebida, precoSobremesa;

function selecionarPrato(elemento) {
  const pratos = document.querySelectorAll(".prato .menu > div");
  pratos.forEach((prato) => {
    if ((prato.style.borderColor = "#32B72F")) {
      prato.style.borderColor = "#FFFFFF";
    }
  });

  prato = elemento.querySelector("h2").textContent;
  precoPrato = parseFloat(
    elemento.querySelector(".preço > p").textContent.replace(",", ".")
  );
  elemento.style.borderColor = "#32B72F";
  habilitaBotao();
}
function selecionarBebida(elemento) {
  const bebidas = document.querySelectorAll(".bebida .menu > div");
  bebidas.forEach((bebida) => {
    if ((bebida.style.borderColor = "#32B72F")) {
      bebida.style.borderColor = "#FFFFFF";
    }
  });

  bebida = elemento.querySelector("h2").textContent;
  precoBebida = parseFloat(
    elemento.querySelector(".preço > p").textContent.replace(",", ".")
  );

  elemento.style.borderColor = "#32B72F";
  habilitaBotao();
}

function selecionarSobremesa(elemento) {
  const sobremesas = document.querySelectorAll(".sobremesa .menu > div");
  sobremesas.forEach((sobremesa) => {
    if ((sobremesa.style.borderColor = "#32B72F")) {
      sobremesa.style.borderColor = "#FFFFFF";
    }
  });
  sobremesa = elemento.querySelector("h2").textContent;

  precoSobremesa = parseFloat(
    elemento.querySelector(".preço > p").textContent.replace(",", ".")
  );

  elemento.style.borderColor = "#32B72F";
  habilitaBotao();
}

function habilitaBotao() {
  if (prato != null && bebida != null && sobremesa != null) {
    const botaoFinalizar = document.querySelector(".barra > div");
    botaoFinalizar.style.backgroundColor = "#32B72F";
    botaoFinalizar.querySelector("p").textContent = "Finalizar pedido";
  }
}

function finalizarPedido() {
  let totalPedido = (precoPrato + precoBebida + precoSobremesa)
    .toFixed(2)
    .replace(".", ",");
  let mensagem = `Olá, gostaria de fazer o pedido:
  - Prato: ${prato}
  - Bebida: ${bebida}
  - Sobremesa: ${sobremesa}
  Total: R$ ${totalPedido}
  `;
  mensagem = encodeURIComponent(mensagem);
  let link = `https://wa.me/5571988918934?text=${mensagem}`;
  document.querySelector("a").href = link;
}
