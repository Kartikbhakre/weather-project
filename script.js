let city = document.querySelector("#input").value ;
let btn = document.getElementById("btn");
btn.addEventListener('click' , data );

function data(){
    let city = document.querySelector("input").value ;  
    let apiKey = "your-api-key";
    getWeatherData(city,apiKey);
}

async function getWeatherData(city,apiKey){
   
    try{
         let rel = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    let data = await rel.json();
    document.getElementById("weatherData").innerText = `
    city: ${data.name}
    ${String.fromCodePoint(127744)} temperature : ${data.main.temp}°C
  ${String.fromCodePoint(127777)} pressure : ${data.main.pressure} Pa
  ${String.fromCodePoint(10054)} windSpeed : ${data.wind.speed} mph

    `
    }
    catch(err){
        document.getElementById("weatherData").innerText = ` error ${String.fromCodePoint(128683)} ${err}` ;
        document.querySelector("input").value = "";
        return ;
    
    }
     document.querySelector("input").value = "";
    
}
