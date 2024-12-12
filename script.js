document.getElementById('getWeatherBtn').addEventListener('click',()=>{
    
    const city=document.getElementById('cityInput').value;
    const apiKey='6d216289ee1234ba49fd81edfff6b7ad';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d216289ee1234ba49fd81edfff6b7ad&units=metric`;
    

    fetch(apiUrl)
     .then(response=>{
        if(!response.ok){
            throw new Error('City Not Found');
            
        }
        console.log(response);
        return response.json();
     })

     .then(data=>{
        document.getElementById('cityName').textContent=`Weather in ${data.name}`;
        document.getElementById('temperature').textContent=`Temperature: ${data.main.temp}`;
        document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
        // display of particular weather.....
        displayWeatherImage(data.weather[0].description);

        document.getElementById('weatherInfo').classList.remove("hidden");
     })
     .catch(error=>{
        alert(error.message);
     })
    
})

// function displayWeatherImage(description){
//     const imageContainer=document.getElementById('weatherImage');
//     let imageUrl="";
//     // switch(description){

//     // }

//     if(description.includes('clear')){
//         imageUrl='clear.jpg';
//     }
//     if(description.includes('cloudy')){
//         imageUrl='cloudy.jpg';
//     }
//     if(description.includes('rain')){
//         imageUrl='rainy.jpg';
//     }
//     if(description.includes('snow')){
//         imageUrl='snow.jpg';
//     }
//     else{
//         imageUrl='weather.jpg';
//     }

//     imageContainer.src=imageUrl;
//     imageContainer.alt=`Weather Image for ${description}`;

// }

function displayWeatherImage(description) {
    const imageContainer = document.getElementById('weatherImage');
    let imageUrl = "";

    switch (true) {
        case description.includes('clear'):
            imageUrl = './images/clear.jpg'; // Replace with your image URL or file path
            break;
        case description.includes('cloudy'):
            imageUrl = './images/cloudy.jpg'; // Replace with your image URL or file path
            break;
        case description.includes('rain'):
            imageUrl = './images/rainy.jpg'; // Replace with your image URL or file path
            break;
        case description.includes('snow'):
            imageUrl = './images/snow.jpg'; // Replace with your image URL or file path
            break;
        case description.includes('smoke'):
            imageUrl='./images/smoke.jpg';
            break;
        case description.includes('haze'):
            imageUrl='./images/haze.jpg';  
            break;
        default:
            imageUrl = './images/weather.jpg'; // Fallback image
    }

    imageContainer.src = imageUrl;
    imageContainer.alt = `Weather Image for ${description}`;
}