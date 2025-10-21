const botaoMostraPalavras = document.querySelector("botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave(){
    const texto = document.querrySelector("#entrada-de-texto").value;
    const campoResultado = document.querrySelector("#resultado-palavrachave");
    const palavars = texto.split(" ");

    campoResultado.textContent = palavaras.join(", ")
}