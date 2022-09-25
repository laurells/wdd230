let current_date = new Date();
let current_year = current_date.getFullYear();

document.querySelector("span").textContent = current_year;

document.getElementById("updated").textContent = "Last Updated: " + document.lastModified;