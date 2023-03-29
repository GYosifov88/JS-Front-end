// function attachEvents() {
//     const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/locations';
//     const BASE_TODAY_URL = 'http://localhost:3030/jsonstore/forecaster/today/';
//     const BASE_UPCOMING_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';
//     const location = document.getElementById('location');
//     const getWeatherBtn = document.getElementById('submit');
//     const forecaseContainer = document.getElementById('forecast');
//     const currentForecast = document.getElementById('current');
//     const upcomingForecast = document.getElementById('upcoming');
//     let city = null;
//     let cityCode = null;

//     getWeatherBtn.addEventListener('click', findCityHandler);

    

//     async function findCityHandler(){
//         try {
//             const cityRes = await fetch(BASE_URL);
//             let cityData = await cityRes.json();
//             cityData = Object.values(cityData);
//             const locationVal = location.value;
//             for (const city of cityData) {
//                 // console.log(city);
//                 let cityData = Object.values(city);
//                 // console.log(cityData[1]);
//                 if(locationVal === cityData[1]){
//                     fetch(`${BASE_TODAY_URL}${cityData[0]}`, {method: 'GET'})
//                         .then((res) => res.json())
//                         .then((data) => {
//                         forecaseContainer.style.display = 'block';
//                         console.log(data.forecast);
//                         const mainDivForecast = document.createElement('div');
//                         mainDivForecast.className = 'forecasts';
//                         currentForecast.appendChild(mainDivForecast)
//                         const symbolSpan = document.createElement('span');
//                         symbolSpan.className = 'condition symbol';
//                         const spanDBig = document.createElement('span');
//                         spanDBig.className = 'condition'
//                         const spanDataCity = document.createElement('span');
//                         spanDataCity.className = 'forecast-data';
//                         const spanDataDegrees = document.createElement('span');
//                         spanDataDegrees.className = 'forecast-data';
//                         const spanDataWeather = document.createElement('span');
//                         spanDataWeather.className = 'forecast-data';                        
//                         symbolSpan.innerHTML = symbolHandler(data.forecast.condition);
//                         mainDivForecast.appendChild(symbolSpan); 
//                         mainDivForecast.appendChild(spanDBig);
//                         spanDataCity.textContent = data.name;
//                         spanDataDegrees.innerHTML = `${data.forecast.low}&#176/${data.forecast.high}&#176`;
//                         spanDataWeather.textContent = data.forecast.condition
//                         spanDBig.appendChild(spanDataCity);
//                         spanDBig.appendChild(spanDataDegrees);
//                         spanDBig.appendChild(spanDataWeather);
                        
//                     })
                    
//                     fetch(`${BASE_UPCOMING_URL}${cityData[0]}`)
//                     .then((res) => res.json())
//                     .then((data) => {
//                         console.log(data.forecast[0].condition);
//                         const mainDivForecast = document.createElement('div');
//                         mainDivForecast.className = 'forecasts-info';
//                         upcomingForecast.appendChild(mainDivForecast);
//                         const spanFirst = document.createElement('span');
//                         spanFirst.className = 'upcoming';
//                         mainDivForecast.appendChild(spanFirst);
//                         const spanSecond = document.createElement('span');
//                         spanSecond.className = 'upcoming';
//                         mainDivForecast.appendChild(spanSecond);
//                         const spanThird = document.createElement('span');
//                         spanThird.className = 'upcoming';
//                         mainDivForecast.appendChild(spanThird);

//                         const symbolSpanFirst = document.createElement('span');
//                         symbolSpanFirst.className = 'symbol';
//                         symbolSpanFirst.innerHTML = symbolHandler(data.forecast[0].condition);
//                         spanFirst.appendChild(symbolSpanFirst);
//                         const spanDataDegreesFirst = document.createElement('span');
//                         spanDataDegreesFirst.className = 'forecast-data';
//                         spanDataDegreesFirst.innerHTML = `${data.forecast[0].low}&#176/${data.forecast[0].high}&#176`;
//                         spanFirst.appendChild(spanDataDegreesFirst);
//                         const spanDataWeatherFirst = document.createElement('span');
//                         spanDataWeatherFirst.className = 'forecast-data';
//                         spanDataWeatherFirst.textContent = data.forecast[0].condition;
//                         spanFirst.appendChild(spanDataWeatherFirst);

//                         const symbolSpanSecond = document.createElement('span');
//                         symbolSpanSecond.className = 'symbol';
//                         symbolSpanSecond.innerHTML = symbolHandler(data.forecast[1].condition);
//                         spanSecond.appendChild(symbolSpanSecond);
//                         const spanDataDegreesSecond = document.createElement('span');
//                         spanDataDegreesSecond.innerHTML = `${data.forecast[1].low}&#176/${data.forecast[1].high}&#176`;
//                         spanDataDegreesSecond.className = 'forecast-data';
//                         spanSecond.appendChild(spanDataDegreesSecond);
//                         const spanDataWeatherSecond = document.createElement('span');
//                         spanDataWeatherSecond.className = 'forecast-data';
//                         spanDataWeatherSecond.textContent = data.forecast[1].condition;
//                         spanSecond.appendChild(spanDataWeatherSecond);

//                         const symbolSpanThird = document.createElement('span');
//                         symbolSpanThird.className = 'symbol';
//                         symbolSpanThird.innerHTML = symbolHandler(data.forecast[2].condition);
//                         spanThird.appendChild(symbolSpanThird);
//                         const spanDataDegreesThird = document.createElement('span');
//                         spanDataDegreesThird.className = 'forecast-data';
//                         spanDataDegreesThird.innerHTML = `${data.forecast[2].low}&#176/${data.forecast[2].high}&#176`;
//                         spanThird.appendChild(spanDataDegreesThird);
//                         const spanDataWeatherThird = document.createElement('span');
//                         spanDataWeatherThird.className = 'forecast-data';
//                         spanDataWeatherThird.textContent = data.forecast[2].condition;
//                         spanThird.appendChild(spanDataWeatherThird);
//                     })
                   
//                 }
                
//             }
//         } catch (err){
//             console.error(err);
//         }
        
//     }
    
//     function symbolHandler(text){
//         let symbol = null;
//         if (text === 'Sunny'){
//             symbol = '&#x2600'; 
//         }else if(text === 'Partly Sunny'){
//             symbol = '&#x26C5';
//         }else if(text === 'Overcast'){
//             symbol = '&#x2601';
//         }else if(text === 'Rain'){
//             symbol = '&#x2614';
//         }
//         return symbol;
//     }

// }

// attachEvents();

function attachEvents() {
    const baseURL = "http://localhost:3030/jsonstore/forecaster/locations";
    const buttonElement = document.getElementById("submit");
    const inputElement = document.getElementById("location");
    const forecasterElement = document.getElementById("forecast");
    const currentConditionsElement = document.getElementById("current");
    const upcomingForeCaster = document.getElementById("upcoming");
    buttonElement.addEventListener("click", loadWeather);
    let conditionObject = {
      Sunny: "&#x2600", 
      "Partly sunny": "&#x26C5",
      Overcast: "&#x2601",
      Rain: "&#x2614",
    };
  
    async function loadWeather() {
      const response = await fetch(baseURL);
      const data = await response.json();
      let objectToGet = data.find((x) => x.name === inputElement.value);
      if (!objectToGet) {
        throw new Error();
      }
      forecasterElement.style.display = "block";
      //Current forecaster
      const currentForecasterURL ="http://localhost:3030/jsonstore/forecaster/today/";
      const threeDaysForecasterURL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';
      const currentForecasterResponse = await fetch(`${currentForecasterURL}${objectToGet.code}`);
      const newData = await currentForecasterResponse.json();
      let mainDiv = createHTMLElement('div','',currentConditionsElement,'forecasts');
      createHTMLElement('span',conditionObject[newData.forecast.condition],mainDiv,'condition symbol');
      let spanContainer = createHTMLElement('span','',mainDiv,'condition');
      createHTMLElement('span',newData.name,spanContainer,'forecast-data');
      createHTMLElement('span',`${newData.forecast.low}&#176/${newData.forecast.high}&#176`,spanContainer,'forecast-data');
      createHTMLElement('span',newData.forecast.condition,spanContainer,'forecast-data');
      
      const threeDaysResponse = await fetch(`${threeDaysForecasterURL}${objectToGet.code}`);
      const threeDayData = await threeDaysResponse.json();
    Array.from(threeDayData.forecast).forEach((x)=>{
       const divContainer = createHTMLElement('div','',upcomingForeCaster,'forecast-info');
       const spanContainer = createHTMLElement('span','',divContainer,'upcoming');
       createHTMLElement('span',conditionObject[x.condition],spanContainer,'symbol');
       createHTMLElement('span',`${x.low}&#176/${x.high}&#176`,spanContainer,'forecast-data');
       createHTMLElement('span',x.condition,spanContainer,'forecast-data');
    });
    }
  
  
    function createHTMLElement(typeOfElement, content, parentElement, classToAdd) {
      const element = document.createElement(typeOfElement);
      if (content && !content.includes("#")) {
        element.textContent = content;
      }
      if (content && content.includes("#")) {
        element.innerHTML = content;
      }
      if(parentElement){
        parentElement.appendChild(element);
      }
      if(classToAdd){
        element.className = classToAdd;
      }
      return element;
    }
  }
  
  attachEvents();