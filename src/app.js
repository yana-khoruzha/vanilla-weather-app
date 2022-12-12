
function displayTemperature(response) {
  console.log(response.data.temperature.current);
  let temperatureElement = document.querySelector('#temperature');
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");


  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `Humidity: ${response.data.temperature.humidity} %`;
  windElement.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
  // imgElement.innerHTML('src', response.data.condition.description.icon_url) = 
  console.log(response.data);
}

let query = "Kiev";
let key = '2aa5d6c3bt94of74014f9bf308abbb25';
let apiUrl =
  `https://api.shecodes.io/weather/v1/current?query=${query}&key=${key}&units=metric`;

  
  axios.get(apiUrl).then(displayTemperature);

