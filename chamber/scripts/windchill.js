// select HTML elements in the document

const weatherIcon = document.querySelector('#weatherIcon');
const weatherText = document.querySelector('#weatherTxt');

const url = 'https://api.openweathermap.org/data/2.5/forecast?q=San-Antonio&units=imperial&appid=456fe3e90b6ba4cb4d6f63ef49c97465';


function DisplayWeatherResults(data)
{
    const weatherDescrtiption = data.list[0].weather[0].description;
    
    weatherIcon.src = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    weatherIcon.alt = weatherDescrtiption;
    
    let windSpeed = data.list[0].wind.speed;
    let temperature = data.list[0].main.temp;
    let f;
    if(windSpeed == 0)
    {
        f = "N/A"
    }
    else
    {
        f = 35.74 + (0.6215 * temperature) - (35.75 * windSpeed ^ 0.16) + (0.4275 * temperature * windSpeed ^ 0.16);
    }
    text = `
    <p>Temperature: <strong>${temperature.toFixed(0)}&deg;F</strong></p>
    <p>Current Condition: ${weatherDescrtiption}</p>
    <p>Wind speed: ${windSpeed} Km/h</p>
    <p>Wind chill: ${f.toFixed(0)}</p>`

    weatherText.innerHTML = text;
}


async function apiFetch()
{
   try
   {
        const response = await fetch(url)

        // If response is normal then run the code
        if(response.ok)
        {
            // Turn the promise data into a json file
            const data = await response.json();

            // de-bugging and finding values from the data 
            console.log(data);

            DisplayWeatherResults(data);

        }
        else
        {
            console.log(`Response not Ok ${await response.text()}`);
        }
   }
   catch(error)
   {
        console.log(`Error ${error.message}`)
   } 
}

apiFetch();
//async function apiFetch() {
    //try {
      //const response = await fetch(url);
      //if (response.ok) {
        //const data = await response.json();
        //console.log(data);
        //displayResults(data);
      //} else {
          //throw Error(await response.text());
      //}
    //} catch (error) {
        //console.log(error);
    //}
//}
  
//apiFetch();

//function displayResults(weatherData) {    
    //currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>&deg;F`;

    //const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    //const desc = weatherData.weather[0].description;
  
    //weatherIcon.setAttribute('src', iconsrc);
    //weatherIcon.setAttribute('alt', desc);
    //captionDesc.textContent = desc;

    //windSpeed.innerHTML = `Wind Speed: <strong>${weatherData.wind.speed.toFixed(0)}</strong> mph`;
//}

// windchill stuff
//var windChill = (35.74 + (0.6215 * currentTemp)) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * currentTemp * Math.pow(windSpeed, 0.16));
//var windChill = Math.round(windChill);
//document.querySelector('.windchill').textContent = windChill;
// Weather API 



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









