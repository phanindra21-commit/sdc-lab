async function getWeather() {
    try {
        let response = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY"
        );

        let data = await response.json();

        let temperature = data.main.temp - 273.15; // convert to Celsius

        createGraph(temperature);

    } catch (error) {
        console.log("Error fetching weather data", error);
    }
}
//Added fetch API call with async/await to retrieve real-time weather data
function createGraph(temp) {
//Refactored code using ES6 features (arrow functions, async/await) and improved structure
    const ctx = document.getElementById("weatherChart").getContext("2d");
//Implemented Chart.js bar graph to display weather temperature data
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Temperature'],
            datasets: [{
                label: 'Weather Data (°C)',
                data: [temp],
                backgroundColor: ['blue']
            }]
        }
    });
}
//Processed API response and extracted temperature data for visualization
getWeather();