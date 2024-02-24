'use client'

import Interface from "@/components/Interface";
import { KEY } from "@/data/data";
import { useEffect, useState } from "react";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns/format";
import Map from "@/components/Map";
import NextDays from "@/components/NextDays";


export default function Home() {

  const [weather, setWeather] = useState<any>()
  const [city, setCity] = useState('recife')
  const [newCity, setNewCity] = useState('')
  const [metric, setMetric] = useState('metric')
  const [windSpeedType, setWindSpeedType] = useState('m/s')
  const [temperatureType, setTemperatureType] = useState('°C')
  const [metricSelected, setMetricSelected] = useState(true)
  const [imperialSelected, setImperialSelected] = useState(false)
  const API_KEY = KEY

  const date = format(new Date(), 'MMM dd', {
    locale: ptBR
  })

  const atualHour = format(new Date(), "hh':'mm ", {
    locale: ptBR
  })

  useEffect(()=>{
    if(metric === 'metric'){
      setTemperatureType('°C')
      setWindSpeedType('m/s')
    }else if(metric === 'imperial'){
      setTemperatureType('°F')
      setWindSpeedType('mph')
    }
  },[metric])

  useEffect(()=>{
    const fetchData = async ()=> {
      try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pt_br&units=${metric}`)
        const data = await response.json()
        setWeather(data)
        
      }catch(error){
        console.error('Failed to fetch data Informations!', error)
      }
    }
    fetchData()
  })

  function changeCity(e:any){
    e.preventDefault()
    setCity(newCity)
    setNewCity('')
  }

  return (
    <>
    <header className="px-60 py-6 bg-gray-300 flex justify-between">
      <form onSubmit={changeCity} className="flex">
        <input 
          onChange={(e)=>{setNewCity(e.target.value)}}
          className="h-8 rounded-l-md px-2 outline-none text-black"
          type="text"
          placeholder="Pesquisar cidade"
          value={newCity}
        />
        <button
          className="bg-gray-900 text-white rounded-r-md px-2"
        >
          Pesquisar
        </button>
      </form>
      <div className="flex gap-2 bg-gray-400 max-w-max p-1 rounded-sm text-gray-700">

        <button 
          onClick={()=>(setMetric('metric'), setMetricSelected(true), setImperialSelected(false))} 
          className={metricSelected ? 'bg-white rounded-sm p-1 text-xs' : 'text-xs hover:bg-white rounded-sm p-1 duration-100'}
        >
          Métrica: °C, m/s
        </button>
        
        <button
          onClick={()=>(setMetric('imperial'), setImperialSelected(true), setMetricSelected(false))} 
          className={imperialSelected ? 'bg-white rounded-sm p-1 text-xs' : 'text-xs hover:bg-white rounded-sm p-1 duration-100'}  
        >
          Imperial: °F, mph
        </button>

      </div>
    </header>
    
      <main className="flex justify-between px-60 mt-8">
        {weather && (
          <Interface
            dayMonth={date}
            hour={atualHour}
            cityName={weather.name}
            countryName={weather.sys.country}
            imageIcon={
              weather.weather[0].main === 'Thunderstorm' && '/icons/thunderStorm.png' ||
              weather.weather[0].main === 'Drizzle' && '/icons/showerRain.png' ||
              weather.weather[0].main === 'Rain' && '/icons/rainDay.png' ||
              weather.weather[0].main === 'Snow' && '/icons/snow.png' ||
              weather.weather[0].main === 'Mist' && '/icons/mist.png' ||
              weather.weather[0].main === 'Smoke' && '/icons/mist.png' ||
              weather.weather[0].main === 'Haze' && '/icons/mist.png' ||
              weather.weather[0].main === 'Dust' && '/icons/mist.png' ||
              weather.weather[0].main === 'Fog' && '/icons/mist.png' ||
              weather.weather[0].main === 'Sand' && '/icons/mist.png' ||
              weather.weather[0].main === 'Ash' && '/icons/mist.png' ||
              weather.weather[0].main === 'Squall' && '/icons/mist.png' ||
              weather.weather[0].main === 'Tornado' && '/icons/mist.png' ||
              weather.weather[0].main === 'Clear' && '/icons/clearSkyDay.png' ||
              weather.weather[0].description === 'algumas nuvens' && '/icons/fewCloudsDay.png' ||
              weather.weather[0].description === 'nublado' && '/icons/brokenClouds.png' ||
              weather.weather[0].description === 'nuvens dispersas' && '/icons/scatteredCloudsDay.png'
            }
            temperature={Number(weather.main.temp).toFixed()}
            typeTemperature={temperatureType}
            maxTemp={Number(weather.main.temp_max).toFixed()}
            minTemp={Number(weather.main.temp_min).toFixed()}
            description={weather.weather[0].description}
            fellLike={Number(weather.main.feels_like).toFixed()}
            weatherStatus={weather.weather[0].description}
            windSpeed={weather.wind.speed}
            typeWindSpeed={windSpeedType}
            pressure={weather.main.pressure}
            humidity={weather.main.humidity}
          />
        )}
        <Map 
          cityName={city}
        />
      </main>
      <footer>
        <NextDays 
          cityNameNextDays={city}
        />
      </footer>
    </>
  );
}
