import './Weather.css'
import React, { useState } from 'react'
useState


const api = {
  key: "54b0ae8683301acb95b2fba97ddbd143",
  base: "https://api.openweathermap.org/data/2.5/"

}

const Weather = () => {


  const [query, setquery] = useState('');
  const [weather, setweather] = useState({ })
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          // console.log(result)
          setweather(result)
          setquery('');
          console.log(result);

        })
    }
  }

  const dateBuilder = (d) => {

    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()]
    let date = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`


  }
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app-warm': 'app') : 'app'}>
      <main>
        <div className='search-box'>
          <input type="text" className='search-bar' placeholder='Search...'
            value={query}
            onKeyPress={search}
            onChange={(e) => {
              setquery(e.target.value)
            }} />

        </div>
        {(typeof weather.main != "undefined")?( <div>
          <div className='location-box'>

            <div className="location">
              {weather.name}, {weather.sys.country}
              <div className='date'>
                {
                  dateBuilder(new Date())
                }

              </div>
            </div>


          </div>

          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°C
            </div>

            <div className="weather">
              {weather.weather[0].main}
            </div>
          </div>
        </div>) : (' ')}
       
      </main>
    </div>
  )
}

export default Weather
