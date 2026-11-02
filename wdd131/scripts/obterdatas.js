const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("ultimaModificacao").textContent =
`Última Modificação: ${document.lastModified}`;