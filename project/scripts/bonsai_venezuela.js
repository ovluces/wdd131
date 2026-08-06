// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let languaje = window.localStorage.getItem("languaje-ls") || "en";

if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is the first visit. Thanks!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("languaje-ls", languaje);


// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});

document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById('currentyear').innerHTML = new Date().getFullYear();


document.addEventListener("DOMContentLoaded", () => {
  cambiarIdioma(languaje);
});


function cambiarIdioma(idioma) {
  const elementos = document.querySelectorAll("[data-translate]");

  elementos.forEach((el) => {
    const clave = el.getAttribute("data-translate");
    if (textos[idioma] && textos[idioma][clave]) {
      el.textContent = textos[idioma][clave];

    }
  });

  document.documentElement.lang = idioma;
  localStorage.setItem("languaje-ls", idioma);

}