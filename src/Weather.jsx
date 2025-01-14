import React, { useState } from 'react'
useState

const api = {
    key: "54b0ae8683301acb95b2fba97ddbd143",
    base: "https://api.openweathermap.org/data/2.5/"

}

const Weather = () => {

    
    const [query, setquery] = useState('');
    const [weather, setweather] = useState({})
    const search = (e)=>{
        if(e.key === "Enter")
        {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                // console.log(result)
                setweather(result)
                setquery('');
                console.log(weather);
                
            })
        }
    }
  return (
    <div>
      <main>
        <div className='search-bar'>
            <input type="text" className='search-bar' placeholder='Search...' 
            value={query}
            onKeyPress={search}
            onChange={(e)=>{
                setquery(e.target.value)
            }}/>
            
        </div>
      </main>
    </div>
  )
}

export default Weather
