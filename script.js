let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";


getWeatherData = (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=Imperial`;
  let weatherPromise = fetch(URL);
  weatherPromise
  .then(response => { return response.json()})
  .then(data => {
    showWeatherData(data);
  }).catch(error => {
    console.log(error);
  })
}


searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city);

}

showWeatherData = (weatherData) => {
  document.querySelector("#city-name").innerText = weatherData.name;
  document.querySelector("#weather-type").innerText = weatherData.weather[0].main;
  document.querySelector("#temp").innerText = weatherData.main.temp;
  document.querySelector("#min-temp").innerText = weatherData.main.temp_min;
  document.querySelector("#max-temp").innerText = weatherData.main.temp_max;
}