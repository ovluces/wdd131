const bonsais = [
  {
    specie: "Bougainvillea pink pixie",
    author: "Roberto Serbanescus",
    age: 10,
    imageUrl:
      "images/bouganbilia-roberto-serbanescus.webp"
  },
  {
    specie: "Callistemun speciosus",
    author: "Nacho Marin",
    age: 20,
    imageUrl:
      "images/callistemun-speciosus-nacho-marin.webp"
  },
  {
    specie: "Bougainvillea spectabilis",
    author: "Nacho Marin",
    age: 30,
    imageUrl:
      "images/nacho-marin-bougainvillea-spectabilis.webp"
  },
  {
    specie: "Conocarpus erectus",
    author: "Nacho Marin",
    age: 40,
    imageUrl:
      "images/nacho-marin-conocarpus-erectus.webp"
  },
  {
    specie: "Pithecellobium tortun",
    author: "Nacho Marin",
    age: 50,
    imageUrl:
      "images/nacho-marin-pithecellobium-tortun.webp"
  },
  {
    specie: "Pithecellobium tortum",
    author: "Olga Vasquez",
    age: 60,
    imageUrl:
      "images/pithecellobium-tortum-olga-vazquez.webp"
  },
  {
    specie: "Taxodium mucronatum",
    author: "Nacho Marin",
    age: 60,
    imageUrl:
      "images/taxodium-mucronatum-nacho-marin.webp"
  },
  {
    specie: "Wrightia religiosa",
    author: "Olga Vasquez",
    age: 60,
    imageUrl:
      "images/wrightia-religiosa-olga-vasquez.webp"
  },

];

const textos = {
  es: {
    titulo: "Bonsai en Venezuela",
    parrafo: "Esta es una página bilingüe.",
    specie: "Especie:",
    author: "Autor:",
    home: "Inicio",
    societys: "Sociedades",
    masters: "Maestros",
    contact: "Contacto",
    conceptos: "Conceptos Basicos de Bonsai",
    conceptos1: "El bonsái es el arte tradicional de cultivar árboles vivos en macetas pequeñas, imitando la forma y la armonía de los grandes árboles de la naturaleza.Para lograrlo, se combinan técnicas de diseño estético con cuidados constantes de la planta.",
    conceptos2: "La palabra viene del japonés y significa \"árbol en bandeja\" o \"cuenco\". El objetivo principal es hacer que un árbol pequeño parezca un ejemplar viejo y gigante que vive libre en el campo.",
    conceptos3: "Se cortan las ramas y brotes nuevos para mantener la silueta deseada y controlar la dirección del crecimiento. Se envuelven alambres de cobre o aluminio alrededor de las ramas para doblarlas y orientarlas con precisión estética. Se recortan las raices de forma controlada para limitar el tamaño del árbol y estimular raíces nuevas más finas. ",
    conceptos4: "Cuidados Esenciales:",
    conceptos5: "Al tener poca tierra, el agua se evapora rápido; hay que regar en cuanto el sustrato empieza a secarse.",
    conceptos6: "La tierra debe drenar muy bien el agua pero retener la humedad justa para oxigenar las raíces.",
    conceptos7: "La mayoría de los bonsáis son árboles de exterior y necesitan sol directo y aire fresco para vivir sanos.",
    visitas: "Visitas:",
  },
  en: {
    titulo: "Bonsai in Venezuela",
    parrafo: "This is a bilingual page.",
    specie: "Specie:",
    author: "Author:",
    home: "Home",
    societys: "Societies",
    masters: "Masters",
    contact: "Contact Us",
    conceptos: "Basic Bonsai Concepts",
    conceptos1: "Bonsai is the traditional art of cultivating live trees in small pots, imitating the shape and harmony of nature's large trees. This is achieved by combining aesthetic design techniques with constant care for the plant.",
    conceptos2: "The word comes from Japanese and means \"tree in a tray\" or \"bowl.\" The main goal is to make a small tree look like a giant, old specimen growing freely in the countryside.",
    conceptos3: "New branches and shoots are pruned to maintain the desired shape and control the direction of growth. Copper or aluminum wire is wrapped around the branches to bend and guide them with aesthetic precision. The roots are trimmed in a controlled manner to limit the tree's size and encourage finer, new roots.",
    conceptos4: "Essential Care:",
    conceptos5: "Because there is little soil, the water evaporates quickly; you have to water as soon as the substrate starts to dry out.",
    conceptos6: "The soil should drain water very well but retain just enough moisture to oxygenate the roots.",
    conceptos7: "Most bonsai are outdoor trees and need direct sunlight and fresh air to live healthy lives.",
    visitas: "Visits:",
  }
};

let num_img = 0;

createBonsaiCard(bonsais);

function createBonsaiCard(filteredBonsais) {
  document.querySelector(".carrusel-pista").innerHTML = "";
  filteredBonsais.forEach(bonsai => {
    num_img = num_img + 1;
    let card = document.createElement("section");
    let datos = document.createElement("div")
    let specie = document.createElement("p");
    let author = document.createElement("p");
    // let age = document.createElement("p");
    let img = document.createElement("img");

    card.classList.add('ficha');
    // card.classList.add('hover');
    specie.innerHTML = `<span class="label" data-translate="specie">Specie:</span> ${bonsai.specie}`;
    author.innerHTML = `<span class="label" data-translate="author">Author:</span> ${bonsai.author}`;
    // age.innerHTML = `<span class="label">age:</span> ${bonsai.age}`;
    img.setAttribute("src", bonsai.imageUrl);
    img.setAttribute("alt", `${bonsai.specie} Specie`);
    img.setAttribute("width", "250");
    img.setAttribute("height", "250");
    img.setAttribute("loading", "lazy");

    datos.appendChild(specie);
    datos.appendChild(author);
    // datos.appendChild(age);
    card.appendChild(img);
    card.appendChild(datos);
    document.querySelector(".carrusel-pista").appendChild(card);
  });
}

//carrousel
const pista = document.getElementById('pista');
const btnIzq = document.getElementById('btn-izq');
const btnDer = document.getElementById('btn-der');

let posicion = 0;
const anchoImagen = 270; // Ancho de cada imagen en píxeles
const limite = anchoImagen * (num_img - 2); // (Total de imágenes - 1) * anchoImagen

btnDer.addEventListener('click', () => {
  if (posicion < limite) {
    posicion += anchoImagen;
    pista.style.transform = `translateX(-${posicion}px)`;
  }
});

btnIzq.addEventListener('click', () => {
  if (posicion > 0) {
    posicion -= anchoImagen;
    pista.style.transform = `translateX(-${posicion}px)`;
  }
});