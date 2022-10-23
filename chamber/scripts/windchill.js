const form = document.getElementById('form');
form.addEventListener('submit', function(event)
{ 
    event.preventDefault();
    const temperature = document.getElementById('temperature').value;
    const wind = document.getElementById('wind').value;

    if (temperature <= 50 && wind > 3)
    {
    const windChill = (35.74 + (0.6215 * temperature))-(35.75 * Math.pow(wind,0.16)) + 
    (0.4275 * temperature * Math.pow(wind,0.16));
    const windChillRounded = Math.round(windChill);
    document.getElementById("windChill").innerHTML = windChillRounded;
    }
    else
    {
    notApplicable = "N/A";
    document.getElementById("windChill").innerHTML = notApplicable;
    }

});