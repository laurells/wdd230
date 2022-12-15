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