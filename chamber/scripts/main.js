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
    visitsDisplay.textContent = `number of visist: ${numVisits}`;
}

else 
{
    visitsDisplay.textContent = `This is your first visit`;
}

numVisits ++;

localStorage.setItem('visits-ls', numVisits);
// DIRECTORY
const cards = document.querySelector('.cards');

fetch('./data/data.json')
  .then((response) => response.json())
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const directory = jsonObject['directory'];
    directory.forEach((dir) => displayDirectory(dir));
  });


  

function displayDirectory(dir) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let image = document.createElement('img');
  let h2 = document.createElement('h2');
  let address = document.createElement('p');
  let phoneNumber = document.createElement('p');
  let website = document.createElement('a');

  // Change the textContent property of the h2 element to contain the prophet's full name
  if (h2) h2.textContent = dir.name;
  if (address) address.textContent = `Address: ${dir.address}`;
  if (phoneNumber) phoneNumber.textContent = `Contact: ${dir.phoneNumber}`;
  if (website) {
    website.textContent = dir.website;
    website.href = dir.website;
  }

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  image.setAttribute('src', dir.imgUrl);
  image.setAttribute('alt', `${dir.name}`);
  image.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(image);
  card.appendChild(address);
  card.appendChild(phoneNumber);
  card.appendChild(website);

  // Add/append the existing HTML div with the cards class with the section(card)
  const divGrid = document.querySelector('div.grid');
  if (divGrid) divGrid.appendChild(card);
}

const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');
const display = document.querySelector('#business');

if (gridbutton) {
  gridbutton.addEventListener('click', () => {
    // example using arrow function
    if (display) {
      display.classList.add('grid');
      display.classList.remove('list');
    }
  });
}

if (listbutton) listbutton.addEventListener('click', showList);

function showList() {
  if (display) {
    display.classList.add('list');
    display.classList.remove('grid');
  }
}

