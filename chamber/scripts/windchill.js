
// Weather API 
const currentTemp = document.querySelector('.temperature');
const weatherIcon = document.querySelector('.weather-icon');
const captionDesc = document.querySelector('.cloudy');
const windSpeed = document.querySelector('.wind-speed');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=456fe3e90b6ba4cb4d6f63ef49c97465';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

function displayResults(weatherData) {    
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>&deg;F`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    windSpeed.innerHTML = `Wind Speed: <strong>${weatherData.wind.speed.toFixed(0)}</strong> mph`;
}

// windchill 
var windChill = (35.74 + (0.6215 * currentTemp)) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * currentTemp * Math.pow(windSpeed, 0.16));
var windChill = Math.round(windChill);
document.querySelector('.windchill').textContent = windChill;
//windchill
//const temperatureCelsius = 33;
//const windSpeedKmH = 2.5;

//const temperatureFahrenheit = temperatureCelsius * (9 / 5) + 32;
//const windSpeedMH = windSpeedKmH / 1.609;

//document.querySelector('.temperature').textContent = temperatureCelsius;
//document.querySelector('.wind').textContent = windSpeedKmH;

//if (temperatureFahrenheit <= 50 && windSpeedMH > 3) {
    //Calculate the wind chill
  //  const windChill = (35.74 + (0.6215 * temperatureFahrenheit)) - (35.75 * Math.pow(windSpeedMH, 0.16)) +
    //    (0.4275 * temperatureFahrenheit * Math.pow(windSpeedMH, 0.16));
    //const windChillRounded = Math.round(windChill);
    //document.querySelectorAll('.windChill').textContent = windChillRounded;


//else {
    //display nothing
   // document.querySelector('.windChill').textContent = 'N/A';









