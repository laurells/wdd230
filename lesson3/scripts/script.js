let current_date = new Date();
let current_year = new Date().getFullYear();
current_date.getFullYear() == current_year

document.querySelector("year").innerHTML = current_year;

document.getElementById("updated").innerHTML = "Last Updated: " + document.lastModified;