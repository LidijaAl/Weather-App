const searchBtn = document.querySelector("button");

function search() {
  let city = document.querySelector(".search-bar").value;
  const apiKey = "9969e5ceb5207490f3ec4ebb9eb3062f";
  const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  async function fetchWeatherData() {
    const response = await fetch(openWeatherURL);
    const data = await response.json();
    const { name } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerHTML = "Weather in " + name;

    document.querySelector(
      ".icon"
    ).src = `http://openweathermap.org/img/wn/${icon}.png`;

    document.querySelector(".description").innerHTML = description;

    document.querySelector(".temp").innerHTML = parseInt(temp) + "°C";

    document.querySelector(".humidity").innerHTML =
      "Humidity: " + humidity + "%";

    document.querySelector(".wind").innerHTML =
      "Wind speed: " + speed + " km/h";

    document.querySelector(".weather").classList.remove("loading");
  }
  document.querySelector(".weather").classList.remove("loading");
  fetchWeatherData();
}

searchBtn.addEventListener("click", search);

document.querySelector(".search-bar")
.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      return search();
    }
  });

  
(function mainPage() {
  const apiKey = "9969e5ceb5207490f3ec4ebb9eb3062f";
  const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${apiKey}`;
  async function fetchWeatherData() {
    const response = await fetch(openWeatherURL);
    const data = await response.json();
    const { name } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerHTML = "Weather in " + name;

    document.querySelector(
      ".icon"
    ).src = `http://openweathermap.org/img/wn/${icon}.png`;

    document.querySelector(".description").innerHTML = description;

    document.querySelector(".temp").innerHTML = parseInt(temp) + "°C";

    document.querySelector(".humidity").innerHTML =
      "Humidity: " + humidity + "%";

    document.querySelector(".wind").innerHTML =
      "Wind speed: " + speed + " km/h";

    document.querySelector(".weather").classList.remove("loading");
  }
  document.querySelector(".weather").classList.remove("loading");
  fetchWeatherData();
})();
