/* Formatted Date Header */
const currentDate = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full",
  }).format(new Date());
  
  document.querySelector("#currentDate").innerHTML = currentDate;


/* Hamburger Button */
/*unction toggleMenu () {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hamburger-btn").classList.toggle("open");
}

const x = document.getElementById("hamburger-btn");
x.onclick = toggleMenu;

const date = new Date(document.lastModified).toLocaleString();

document.querySelector("#last-updated").innerHTML = date;*/


/* Monday and Tuesday Message */
const dayNumber = now.getDay();
const message = document.getElementById("message");

if ((dayNumber == 1) || (dayNumber == 2)) {
    message.classList.add("showme");
} else {
    message.classList.add("hideme");
};