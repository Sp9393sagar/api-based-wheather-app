const apiKey = '7cb6a5587da4c9b0ae81c46ae79b0caa'; 

function getWeather() {
  const city = document.getElementById('cityInput').value;
  const result = document.getElementById('weatherResult');

  if (!city) {
    result.innerHTML = 'Please enter a city name';
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      const temperature = data.main.temp;
      const condition = data.weather[0].main;
      const icon = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      result.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${iconUrl}" alt="${condition}">
        <p><strong>${condition}</strong></p>
        <p>Temperature: ${temperature}°C</p>
      `;
    })
    .catch(error => {
      result.innerHTML = error.message;
    });
}

