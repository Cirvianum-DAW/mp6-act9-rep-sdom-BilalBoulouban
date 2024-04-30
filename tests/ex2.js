
Geolocalización

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
</head>
<body>
    <h1>Weather App</h1>
    <div id="location"></div>
    <div id="weather"></div>

    <script>
        // Función para obtener y mostrar la ubicación actual del usuario
        function showLocation(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const locationElement = document.getElementById('location');
            locationElement.textContent = `Your Location: Latitude ${latitude}, Longitude ${longitude}`;
            getWeather(latitude, longitude);
        }

        // Función para manejar errores en la obtención de la ubicación
        function errorHandler(error) {
            console.error('Error getting location:', error);
            const locationElement = document.getElementById('location');
            locationElement.textContent = 'Error getting location. Please allow location access.';
        }

        // Función para obtener el clima utilizando la API de OpenWeatherMap
        function getWeather(latitude, longitude) {
            const apiKey = 'TU_CLAVE_API'; // Reemplaza 'TU_CLAVE_API' con tu propia clave de API de OpenWeatherMap
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const weatherElement = document.getElementById('weather');
                    const temperature = data.main.temp;
                    const description = data.weather[0].description;
                    const cityName = data.name;
                    weatherElement.innerHTML = `
                        <p>Location: ${cityName}</p>
                        <p>Temperature: ${temperature}°C</p>
                        <p>Description: ${description}</p>
                    `;
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    const weatherElement = document.getElementById('weather');
                    weatherElement.textContent = 'Error fetching weather data. Please try again later.';
                });
        }

        // Obtener la ubicación actual del usuario al cargar la página
        document.addEventListener('DOMContentLoaded', function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showLocation, errorHandler);
            } else {
                const locationElement = document.getElementById('location');
                locationElement.textContent = 'Geolocation is not supported by this browser.';
            }
        });
    </script>
</body>
</html>


----MARVEl-----
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marvel Characters</title>
</head>
<body>
    <h1>Marvel Characters</h1>
    <div id="characterList"></div>

    <script>
        const publicKey = 'TU_CLAVE_PUBLICA';
        const apiUrl = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const characters = data.data.results;
                const characterList = document.getElementById('characterList');

                characters.forEach(character => {
                    const characterElement = document.createElement('div');
                    characterElement.innerHTML = `
                        <h2>${character.name}</h2>
                        <p>Description: ${character.description}</p>
                        <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}">
                    `;
                    characterList.appendChild(characterElement);
                });
            })
            .catch(error => {
                console.error('Error fetching Marvel characters:', error);
                characterList.innerHTML = '<p>Error fetching Marvel characters. Please try again later.</p>';
            });
    </script>
</body>
</html>
----mARVEL---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marvel Characters</title>
</head>
<body>
    <h1>Marvel Characters</h1>
    <div id="characterList"></div>

    <script>
        // Clave de API pública de Marvel
        const publicKey = 'TU_CLAVE_PUBLICA';

        // URL de la API de Marvel para obtener una lista de personajes
        const apiUrl = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}`;

        // Función para hacer una solicitud a la API de Marvel y mostrar la información de los personajes
        function fetchMarvelCharacters() {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const characters = data.data.results;
                    const characterList = document.getElementById('characterList');

                    characters.forEach(character => {
                        const characterElement = document.createElement('div');
                        characterElement.innerHTML = `
                            <h2>${character.name}</h2>
                            <p>Description: ${character.description}</p>
                            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}">
                        `;
                        characterList.appendChild(characterElement);
                    });
                })
                .catch(error => {
                    console.error('Error al obtener los personajes:', error);
                    characterList.innerHTML = '<p>Ocurrió un error al cargar los personajes. Por favor, inténtalo de nuevo más tarde.</p>';
                });
        }

        // Llama a la función para obtener y mostrar los personajes al cargar la página
        document.addEventListener('DOMContentLoaded', fetchMarvelCharacters);
    </script>
</body>
</html>
