// Ano atual

const anoAtual = new Date().getFullYear();

document.querySelector("#anoatual").textContent = anoAtual;

// Última modificação da página

document.querySelector("#ultimaModificacao").textContent =
    `Última Modificação: ${document.lastModified}`;