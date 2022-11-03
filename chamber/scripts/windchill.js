//windchill
const temperatureCelsius = 33;
const windSpeedKmH = 2.5;

const temperatureFahrenheit = temperatureCelsius * (9 / 5) + 32;
const windSpeedMH = windSpeedKmH / 1.609;

document.querySelector('.temperature').textContent = temperatureCelsius;
document.querySelector('.wind').textContent = windSpeedKmH;

if (temperatureFahrenheit <= 50 && windSpeedMH > 3) {
    //Calculate the wind chill
    const windChill = (35.74 + (0.6215 * temperatureFahrenheit)) - (35.75 * Math.pow(windSpeedMH, 0.16)) +
        (0.4275 * temperatureFahrenheit * Math.pow(windSpeedMH, 0.16));
    const windChillRounded = Math.round(windChill);
    document.querySelectorAll('.windChill').textContent = windChillRounded;
}

else {
    //display nothing
    document.querySelector('.windChill').textContent = 'N/A';
}








