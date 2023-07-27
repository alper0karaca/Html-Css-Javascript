function getWeatherApp(){

// htmlden değerleri al 
const inputElement = document.getElementById("input");
const inputValue = inputElement.value;

// api url'leri  ve api Key'i yaz değişkenlere yaz
const apiKey = "947837838419f8625cb9befc08e24bbb";
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${apiKey}`;

// fetch api ile verileri çek

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    const resultWeather = document.getElementById("result") ;
    resultWeather.innerHTML = `
    <h2 style="color:red; font-size: 50px" > Weather For ${data.name} </h2> 
    <p style="font-weight: bold; font-size: 30px" > ${data.main.temp} °C Temperature </p>
    <p style="font-size: 20px" > Feels like temperature : ${data.main.feels_like} °C </p>
    <p style="font-size: 20px" > Weather condition : ${data.weather[0].description}  </p>
    
    `;
    }) 
    .catch(error => {
        const resultWeather = document.getElementById("result") ;

        resultWeather.innerHTML= `<h2> The venue information you entered could not be found. Try with another city name .</h2>`;
    } )

}

function dateAndTime(){

    // date nesnesini oluşturduk
    const tarih = new Date();

// içerisine yazacağımız html elementlerini getirdik
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

// tek tek saat ve tarih değerlerini bir değişkenlere atalım 

const hour = String(tarih.getHours()).padStart(2,"0");
const minute = String(tarih.getMinutes()).padStart(2,"0");

const day = String(tarih.getDate()).padStart(2,"0");
const month = String(tarih.getMonth()+1).padStart(2,"0");
const year = String(tarih.getFullYear());

// elemnen içine yazdırma 
timeElement.innerHTML= `${hour}:${minute}`;
dateElement.innerHTML= `${day}.${month}.${year}`;   


}



// Saati ve tarihi her saniye güncelleyelim
setInterval(dateAndTime, 1000);

// Sayfa yüklendiğinde saat ve tarih göstergesini güncelleyin
dateAndTime();