

// DIRECTORY
const cards = document.querySelector('.cards');
const getCoastalList = async () => {
  let coastal = [];
  await fetch('./data/coastal.json')
    .then((res) => res.json())
    .then((data) =>
      data.directory.forEach((coastal) => {
        displayCoastal(coastal);
      })
    );

  // Selects 3 random business with gold/silver status
  const randomSpotlight = getMultipleRandom(
    coastal.filter(
      (business) =>
        business.membershipLevel === 'gold' ||
        business.membershipLevel === 'silver'
    ),
    3
  );

  randomSpotlight.forEach((a) => displaySpotlight(a));
};

getCoastalList();

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

function displayCoastal(coastal) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let div1 = document.createElement('div');
  let div2 = document.createElement('div');
  let image = document.createElement('img');
  let name = document.createElement('h3');
  let description = document.createElement('p');
  let credit = document.createElement('p');

  // Change the textContent property of the h2 element to contain the prophet's full name
  if (name) name.textContent = coastal.name;
  if (description) description.textContent = `${coastal.description}`;
  if (credit) credit.textContent = `${coastal.imgCredits}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  image.setAttribute('src', coastal.imgUrl);
  image.setAttribute('alt', `${coastal.name}`);
  image.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  div1.appendChild(image);
  // div1.appendChild(credit);
  div2.appendChild(name);
  div2.appendChild(description);

  card.appendChild(div1);
  card.appendChild(div2);
  

  // Add/append the existing HTML div with the cards class with the section(card)
  const divGrid = document.querySelector('#coastal');
  if (divGrid) divGrid.appendChild(card);
}

const display = document.querySelector('#coastal');

//fruits

const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
const fruit1 = document.querySelector("#fruit1");
const fruit2 = document.querySelector("#fruit2");
const fruit3 = document.querySelector("#fruit3");
let fruits = [];

async function getFruits() {
    const response = await fetch(requestURL);
    fruits = await response.json();
    fruits.forEach(fruit => {
        displayFruit(fruit, fruit1);
        displayFruit(fruit, fruit2);
        displayFruit(fruit, fruit3);
    });
}

function displayFruit(fruit, parent) {
    // Create element to add
    let option = document.createElement('option');

    // set content
    option.textContent = `${fruit.name}`;

    // append content
    parent.appendChild(option);
}

getFruits();

// form date
const updatedDate = document.lastModified;
formDate = document.querySelector("#date");
formDate = updatedDate;

// form submitted message

function generateDrink(event) {
    if (event.preventDefault) event.preventDefault();
    // get form results 
    let fname = document.getElementById('first_name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let fruit1result = document.getElementById('fruit1').value;
    let fruit2result = document.getElementById('fruit2').value;
    let fruit3result = document.getElementById('fruit3').value;
    let instructions = document.getElementById('instructions').value;

    // loop through 3 fruits to calculate
    fruit1object = getFruitByName(fruit1result);
    fruit2object = getFruitByName(fruit2result);
    fruit3object = getFruitByName(fruit3result);

    // calculate nutrition value
    // carbs
    fruit1carbs = fruit1object.nutritions.carbohydrates;
    fruit2carbs = fruit2object.nutritions.carbohydrates;
    fruit3carbs = fruit3object.nutritions.carbohydrates;
    totalcarbs = fruit1carbs + fruit2carbs + fruit3carbs;
    // protein
    fruit1protein = fruit1object.nutritions.protein;
    fruit2protein = fruit2object.nutritions.protein;
    fruit3protein = fruit3object.nutritions.protein;
    totalprotein = fruit1protein + fruit2protein + fruit3protein;
    // fat
    fruit1fat = fruit1object.nutritions.fat;
    fruit2fat = fruit2object.nutritions.fat;
    fruit3fat = fruit3object.nutritions.fat;
    totalfat = fruit1fat + fruit2fat + fruit3fat;
    // sugar
    fruit1sugar = fruit1object.nutritions.sugar;
    fruit2sugar = fruit2object.nutritions.sugar;
    fruit3sugar = fruit3object.nutritions.sugar;
    totalsugar = fruit1sugar + fruit2sugar + fruit3sugar;
    // calories
    fruit1calories = fruit1object.nutritions.calories;
    fruit2calories = fruit2object.nutritions.calories;
    fruit3calories = fruit3object.nutritions.calories;
    totalcalories = fruit1calories + fruit2calories + fruit3calories;

    // fill in drink result feilds
    document.getElementById('result_firstname').innerHTML = fname;
    document.getElementById('result_email').innerHTML = email;
    document.getElementById('result_phone').innerHTML = phone;
    document.getElementById('result_fruit1').innerHTML = fruit1result;
    document.getElementById('result_fruit2').innerHTML = fruit2result;
    document.getElementById('result_fruit3').innerHTML = fruit3result;
    document.getElementById('result_instructions').innerHTML = instructions;
    document.getElementById('carbs').innerHTML = totalcarbs.toFixed(2);
    document.getElementById('protein').innerHTML = totalprotein.toFixed(2);
    document.getElementById('fat').innerHTML = totalfat.toFixed(2);
    document.getElementById('sugar').innerHTML = totalsugar.toFixed(2);
    document.getElementById('calories').innerHTML = totalcalories;
    document.getElementById('order_date').innerHTML = formDate;

    // remove hide class from div 
    function removeHidden() {
        const hidden = document.querySelector(".drink-results");
        hidden.classList.remove("hide-div");
    }
    removeHidden()

    // add hide class to form 
    form.classList.add('hide-div');

    return false;
}

const form = document.getElementById("fruitForm");
if (form.attachEvent) {
    form.attachEvent("submit", generateDrink);
} else {
    form.addEventListener("submit", generateDrink);
}

// get fruit selection by name
function getFruitByName(name) {
    for(const i in fruits) {
        if (fruits[i].name === name) {
            return fruits[i];
        }
    }
}