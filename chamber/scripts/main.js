/* Formatted Date Header */
const currentDate = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full",
  }).format(new Date());
  
  document.querySelector("#currentDate").innerHTML = currentDate;


 /*Hamburger Button */
function toggleMenu () {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

const date = new Date(document.lastModified).toLocaleString();

document.querySelector("#last-updated").innerHTML = date;

const hero = new Date();
const  day=hero.getDay();
if (day < 1 || day > 2) {
    const x = document.querySelector('.topbar');
    x.remove();
  }
