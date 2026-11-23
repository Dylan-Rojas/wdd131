const container = document.querySelector("#temple-container");
const title = document.querySelector("#page-title");

function displayTemples(filteredTemples) {

    container.innerHTML = "";

    filteredTemples.forEach(temple => {

        const card = document.createElement("section");

        const h3 = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const img = document.createElement("img");

        h3.textContent = temple.templeName;

        location.innerHTML =
            `<strong>Localização:</strong> ${temple.location}`;

        dedicated.innerHTML =
            `<strong>Consagração:</strong> ${temple.dedicated}`;

        area.innerHTML =
            `<strong>Área:</strong> ${temple.area.toLocaleString()} pés²`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.templeName);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");

        card.appendChild(h3);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        container.appendChild(card);
    });
}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    title.textContent = "Página Inicial";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();
    title.textContent = "Antigos";

    displayTemples(
        temples.filter(
            temple => parseInt(temple.dedicated) < 1900
        )
    );
});

document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();
    title.textContent = "Novos";

    displayTemples(
        temples.filter(
            temple => parseInt(temple.dedicated) > 2000
        )
    );
});

document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();
    title.textContent = "Grandes";

    displayTemples(
        temples.filter(
            temple => temple.area > 90000
        )
    );
});

document.querySelector("#small").addEventListener("click", (e) => {
    e.preventDefault();
    title.textContent = "Pequenos";

    displayTemples(
        temples.filter(
            temple => temple.area < 10000
        )
    );
});

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Última Modificação: ${document.lastModified}`;