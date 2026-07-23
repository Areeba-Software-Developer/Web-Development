const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchButton");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

searchBtn.addEventListener("click", function () {

    const city = cityInput.value;

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    getWeather(city);

});

async function getWeather(city) {

    try {

        const apiKey = "bfe37c2a48370f3c73163f99cdc45b38";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);

        const data = await response.json();

        if (data.cod === "404") {
           alert("City not found!");
           return;
        }

        console.log(data);
        cityName.textContent = data.name;
        temperature.textContent = `${data.main.temp}°C`;
        description.textContent = data.weather[0].description;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        wind.textContent = `Wind: ${data.wind.speed} m/s`;

    }

    catch(error){

        console.log(error);

    }
}






