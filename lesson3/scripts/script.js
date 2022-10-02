let current_date = new Date();
let current_year = current_date.getFullYear();

document.querySelector("year").innerHTML = current_year;

document.getElementById("updated").innerHTML = "Last Updated: " + document.lastModified;