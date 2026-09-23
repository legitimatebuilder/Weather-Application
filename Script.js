const apiKey = "875b37e1b269b91fc2bb2d2b66c1d56e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search');
const searchButton = document.querySelector('.search-btn');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
        document.querySelector('.weather-details').style.display = 'none';
        document.querySelector('.entry-header').style.display = 'block';
    } else {

        var data = await response.json();

        console.log(data);

        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + "&#8451";
        document.querySelector('.city-name').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind-speed').innerHTML = data.wind.speed + " Km/hr";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "CSS/Images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "CSS/Images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "CSS/Images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "CSS/Images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "CSS/Images/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "CSS/Images/snow.png";
        }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.weather-details').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.entry-header').style.display = 'none';
    };

}

searchButton.addEventListener('click', () => {
    checkWeather(searchBox.value);
});

// PopUp Modal //
const openButton = document.getElementById("open-btn");
const closeButton = document.getElementById("close-btn");
const modalContainer = document.querySelector('.modal-container');

openButton.addEventListener('click', () => {
    modalContainer.classList.add("show");
});

closeButton.addEventListener('click', () => {
    modalContainer.classList.remove("show");
});
