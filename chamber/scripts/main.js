/* Formatted Date Header */
const currentDate = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(new Date());
const year = new Date(document.lastModified).getFullYear();

const yearSelector = document.querySelector('#year');
if (yearSelector) yearSelector.innerHTML = year;
document.querySelector("#currentDate").innerHTML = currentDate;


/*Hamburger Button */
function toggleMenu() {
  document.getElementById("primary-nav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

const date = new Date(document.lastModified).toLocaleString();

document.querySelector("#last-updated").innerHTML = date;

const hero = new Date();
const day = hero.getDay();
if (day < 1 || day > 2) {
  const x = document.querySelector('.topbar');
  x.remove();
}

const joinElement = document.getElementById('join');
if (joinElement) {
  joinElement.onclick = function () {
    location.href = 'https://laurells.github.io/wdd230/chamber/join.html';
  };
}

// Lazy loading images
const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

const imgOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px 50px 0px',
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (items, observer) =>
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      }),
    imgOptions
  );
  imagesToLoad.forEach((img) => observer.observe(img));
} else {
  imagesToLoad.forEach((img) => loadImages(img));
}

// visits

const visitsDisplay = document.querySelector("#lastVisit");


let numVisits = Number(localStorage.getItem('visits-ls'));


if (numVisits !== 0) 
{
    visitsDisplay.textContent = `Number of visit: ${numVisits}`;
}

else 
{
    visitsDisplay.textContent = `This is your first visit`;
}

numVisits ++;

localStorage.setItem('visits-ls', numVisits);


