// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});

document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById('currentyear').innerHTML = new Date().getFullYear();

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Caracas Venezuela",
    location: "Caracas, Dependencias Federales, Venezuela",
    dedicated: "2000, August, 20",
    area: 15332,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/096-Caracas-Venezuela-Temple.jpg"
  },
  {
    templeName: "Bogotá Colombia",
    location: "Bogotá, Distrito Capital, Colombia",
    dedicated: "1999, April, 24",
    area: 53500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg"
  },
  {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla, Atlantico, Colombia",
    dedicated: "2018, December, 9",
    area: 25349,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1846-main.jpg"
  },
  // Add more temple objects here...
];

//Each one of the required filters renders the appropriate temple cards upon 
// button click. The filters are:
// Old (before 1900), New (after 2000),
// Large (&gt;90k), Small (&lt;10k), and Home (all).

const allLink = document.querySelector("#all");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

allLink.addEventListener(
  "click", () => {
    createTempleCard(temples);
    document.getElementById('filterType').innerHTML = "Home";
  });

oldLink.addEventListener(
  "click", () => {
    const yearLimit = 1900;
    const templesMod = temples.map(item => ({
      ...item,
      year: item.dedicated.substring(0, 4)
    }));
    createTempleCard(templesMod.filter(temple => temple.year < yearLimit));
    document.getElementById('filterType').innerHTML = "Old";
  });

newLink.addEventListener(
  "click", () => {
    const yearLimit = 2000;
    const templesMod = temples.map(item => ({
      ...item,
      year: item.dedicated.substring(0, 4)
    }));
    createTempleCard(templesMod.filter(temple => temple.year > yearLimit));
    document.getElementById('filterType').innerHTML = "New";
  });

largeLink.addEventListener(
  "click", () => {
    const areaLimit = 90000;
    createTempleCard(temples.filter(temple => temple.area > areaLimit));
    document.getElementById('filterType').innerHTML = "Large";
  });

smallLink.addEventListener(
  "click", () => {
    const areaLimit = 10000;
    createTempleCard(temples.filter(temple => temple.area < areaLimit));
    document.getElementById('filterType').innerHTML = "Small";
  });

createTempleCard(temples);

function createTempleCard(filteredTemples) {
  document.querySelector(".container").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let datos = document.createElement("div")
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    card.classList.add('ficha');
    // card.classList.add('hover');
    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");


    datos.appendChild(name);
    datos.appendChild(location);
    datos.appendChild(dedication);
    datos.appendChild(area);
    card.appendChild(datos);
    card.appendChild(img);
    document.querySelector(".container").appendChild(card);
  });
}