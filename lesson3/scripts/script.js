let lastUpdatedSpan = document.querySelector("#last-updated");
let currentYearSpan = document.querySelector("#current-year");
let lastModified = new Date(document.lastModified);
let lastModifiedArray = [
    lastModified.getFullYear(),
    lastModified.getMonth(),
    lastModified.getDay(),
    lastModified.getHours(),
    lastModified.getMinutes(),
    lastModified.getSeconds()
];

let currentYear = new Date().getFullYear();

/* 11/29/2021 05:48:46*/
/* Month/Day/Yeat Hour:Minutes:Seconds*/
lastUpdatedSpan.textContent = `${lastModifiedArray[1]}/${lastModifiedArray[2]}/${lastModifiedArray[0]} ${lastModifiedArray[3]}:${lastModifiedArray[4]}:${lastModifiedArray[5]}`;
currentYearSpan.textContent = currentYear;