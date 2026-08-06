const bonsais_societys = [
  {
    name: "Sociedad Venezolana de Bonsai SVB",
    location: "Caracas - Venezuela",
    fundation: "14 de Mayo de 1976",
    contactHTML: "https://www.instagram.com/bonsaivenezuela/?hl=es",
    references: "referencias",
    imageUrl:
      "images/sociedad-venezolana-bonsai.webp"
  },
  {
    name: "Sociedad Conservacionista y de Bonsai SCB",
    location: "Valencia - Venezuela",
    fundation: "1977",
    contactHTML: "https://scbonsai-valencia.es.tl/Inicio.htm",
    references: "referencias",
    imageUrl:
      "images/scblogo.webp"
  },
  {
    name: "Club Zuliano del Bonsái y la Conservación",
    location: "Maracaibo - Venezuela",
    fundation: "1993",
    contactHTML: "https://bonsaizulia.blogspot.com/",
    references: "referencias",
    imageUrl:
      "images/club-zuliano.webp"
  },
  {
    name: "Eco Bonsai Guayana",
    location: "Puerto Ordaz - Venezuela",
    fundation: "2011",
    contactHTML: "https://ecobonsaiguayana.webnode.es/",
    references: "referencias",
    imageUrl:
      "images/eco-bonsai-guayana.webp"
  },

];

const textos = {
  es: {
    titulo: "Sociedades de Bonsai en Venezuela",
    home: "Inicio",
    societys: "Sociedades",
    masters: "Maestros",
    contact: "Contacto",
    visitas: "Visitas: ",
  },
  en: {
    titulo: "Bonsai Societies in Venezuela",
    home: "Home",
    societys: "Societies",
    masters: "Masters",
    contact: "Contact Us",
    visitas: "Visits: ",
  }
};

createSocietysCard(bonsais_societys);

function createSocietysCard(filteredSocietys) {
  document.querySelector(".carrusel-pista-block").innerHTML = "";
  filteredSocietys.forEach(society => {
    let card = document.createElement("section");
    let datos = document.createElement("div")
    let name = document.createElement("p");
    let location = document.createElement("p");
    let fundation = document.createElement("p");
    let contactHTML = document.createElement("a");
    // let references = document.createElement("p");
    let img = document.createElement("img");

    card.classList.add('ficha');

    name.innerHTML = `<span class="label"></span> ${society.name}`;
    location.innerHTML = `<span class="label"></span> ${society.location}`;
    fundation.innerHTML = `<span class="label">Fundation:</span> ${society.fundation}`;
    contactHTML.innerHTML = `<span class="label">Contact:</span> ${society.contactHTML}`;
    contactHTML.href = `${society.contactHTML}`;
    contactHTML.setAttribute("target", `_blank`)
    // references.innerHTML = `< span class="label" > references:</span > ${ society.references } `;
    img.setAttribute("src", society.imageUrl);
    img.setAttribute("alt", `${society.name} Nombre`);
    img.setAttribute("width", "250");
    img.setAttribute("height", "250");
    img.setAttribute("loading", "lazy");

    datos.appendChild(name);
    datos.appendChild(location);
    datos.appendChild(fundation);
    datos.appendChild(contactHTML);
    // datos.appendChild(references);
    card.appendChild(img);
    card.appendChild(datos);
    document.querySelector(".carrusel-pista-block").appendChild(card);
  });
}