/* Formatted Date Header */
const currentDate = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(new Date());

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

// // Locally store date of last visit
window.localStorage.setItem('lastVisit', currentDate);

// // Retrieve last visit date from local storage
const lastVisitDate = localStorage.getItem('lastVisit');

const date1 = new Date();
const date2 = new Date(lastVisitDate);

// // Calculate days between last visit
const days = (date1, date2) => {
  let difference = date1.getTime() - date2.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
};

const daysLastVisitText = () => {
  const dayDiff = days(date1, date2);
  return `${dayDiff} ${dayDiff > 1 ? 'days' : 'day'}`;
};

const displayLastVisit = daysLastVisitText();

const lastVisitSelector = document.querySelector('#lastVisit');
if (lastVisitSelector) lastVisitSelector.innerHTML = displayLastVisit;

const currentDateSelector = document.querySelector('#currentDate');
if (currentDateSelector) currentDateSelector.innerHTML = currentDate;