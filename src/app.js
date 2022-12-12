

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 0) {
    return `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 0) {
    return `0${minutes}`;
  }
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let day = days[date.getDay()];
  return `Last updated: ${day} ${hours}:${minutes}`
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector('#temperature');
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");


  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `Humidity: ${response.data.temperature.humidity} %`;
  windElement.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
  dateElement.innerHTML = formatDate(response.data.time * 1000);
  iconElement.setAttribute('src', response.data.condition.icon_url);
  iconElement.setAttribute("alt", response.data.condition.icon);
  console.log(response.data);
}

let query = "Kiev";
let key = '2aa5d6c3bt94of74014f9bf308abbb25';
let apiUrl =
  `https://api.shecodes.io/weather/v1/current?query=${query}&key=${key}&units=metric`;

  
  axios.get(apiUrl).then(displayTemperature);

