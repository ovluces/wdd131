const bonsais_masters = [
  {
    name: "Dora De Pepe",
    location: "Caracas - Venezuela",
    biography: "Biografia",
    references: "referencias",
    imageUrl:
      "images/dora-de-pepe.webp"
  },
  {
    name: "Fernando Moncada",
    location: "Maracaibo - Venezuela",
    biography: "Biografia2",
    references: "referencias",
    imageUrl:
      "images/fernando-moncada.webp"
  },
  {
    name: "Milagros Rauber (✝)",
    location: "Valencia - Venezuela",
    biography: "Biografia3",
    references: "referencias",
    imageUrl:
      "images/milagros-rauber.webp"
  },
  {
    name: "Nacho Marin",
    location: "Caracas - Venezuela",
    biography: "Biografia3",
    references: "referencias",
    imageUrl:
      "images/nacho-marin.webp"
  },
  {
    name: "Roberto Serbanescu",
    location: "Valencia - Venezuela",
    biography: "Biografia3",
    references: "referencias",
    imageUrl:
      "images/roberto-serbanescu.webp"
  },

];


const textos = {
  es: {
    titulo: "Maestros de Bonsai en Venezuela",
    home: "Inicio",
    societys: "Sociedades",
    masters: "Maestros",
    contact: "Contacto",
    visitas: "Visitas: ",
  },
  en: {
    titulo: "Bonsai Masters in Venezuela",
    home: "Home",
    societys: "Societies",
    masters: "Masters",
    contact: "Contact Us",
    visitas: "Visits: ",
  }
};


createMasterCard(bonsais_masters);

function createMasterCard(filteredMasters) {
  document.querySelector(".carrusel-pista-block").innerHTML = "";
  filteredMasters.forEach(master => {
    let card = document.createElement("section");
    let datos = document.createElement("div")
    let name = document.createElement("p");
    let location = document.createElement("p");
    // let biography = document.createElement("p");
    // let references = document.createElement("p");
    let img = document.createElement("img");

    card.classList.add('ficha');
    card.classList.add('post-it');
    name.innerHTML = `<span class="label"></span> ${master.name}`;
    location.innerHTML = `<span class="label"></span> ${master.location}`;
    // biography.innerHTML = `<span class="label">biography:</span> ${master.biography}`;
    // references.innerHTML = `<span class="label">references:</span> ${master.references}`;
    img.setAttribute("src", master.imageUrl);
    img.setAttribute("alt", `${master.name} Nombre`);
    img.setAttribute("width", "250");
    img.setAttribute("height", "250");
    img.setAttribute("loading", "lazy");

    datos.appendChild(name);
    datos.appendChild(location);
    // datos.appendChild(biography);
    // datos.appendChild(references);
    card.appendChild(img);
    card.appendChild(datos);
    document.querySelector(".carrusel-pista-block").appendChild(card);
  });
}