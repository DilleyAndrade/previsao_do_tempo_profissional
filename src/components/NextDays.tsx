import React, { useEffect, useState } from 'react'
import DayPage from './DayPage'
import { KEY } from '@/data/data'

interface NextDaysProps{
  cityNameNextDays: string
}

export default function NextDays({cityNameNextDays}:NextDaysProps) {
  const [nextDays, setNextDays] = useState<any>('')
  const API_KEY = KEY

  useEffect(()=>{
    const fetchNextDays = async () =>{
      try{
        const responseNextDays = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityNameNextDays}&appid=${API_KEY}`)
        const dataNextDays = await responseNextDays.json()
        setNextDays(dataNextDays.list)
      }catch(error){
        console.error('Failed fetch data Next Days!', error)
      }
    }
    fetchNextDays()
  })
  return (
    <div className='px-60 mt-10'>
        {nextDays && (
          <div className='flex justify-around border-t-2 border-gray-200 py-8'>
            <DayPage 
              imageDay={
                nextDays[5].weather[0].main === 'Thunderstorm' && '/icons/thunderStorm.png' ||
                nextDays[5].weather[0].main === 'Drizzle' && '/icons/showerRain.png' ||
                nextDays[5].weather[0].main === 'Rain' && '/icons/rainDay.png' ||
                nextDays[5].weather[0].main === 'Snow' && '/icons/snow.png' ||
                nextDays[5].weather[0].main === 'Mist' && '/icons/mist.png' ||
                nextDays[5].weather[0].main === 'Smoke' && '/icons/mist.png' ||
                nextDays[5].weather[0].main === 'Haze' && '/icons/mist.png' ||
                nextDays[5].weather[0].main === 'Dust' && '/icons/mist.png' ||
                nextDays[5].weather[0].main === 'Fog' && '/icons/mist.png' ||
                nextDays[5].weather[0].main === 'Sand' && '/icons/mist.png' ||
                nextDays[5].weather[0].main === 'Ash' && '/icons/mist.png' ||
                nextDays[5].weather[0].main === 'Squall' && '/icons/mist.png' ||
                nextDays[5].weather[0].main === 'Tornado' && '/icons/mist.png' ||
                nextDays[5].weather[0].main === 'Clear' && '/icons/clearSkyDay.png' ||
                nextDays[5].weather[0].description === 'few clouds' && '/icons/fewCloudsDay.png' ||
                nextDays[5].weather[0].description === 'broken clouds' && '/icons/brokenClouds.png' ||
                nextDays[5].weather[0].description === 'scattered clouds' && '/icons/scatteredCloudsDay.png'
              }
              maxTemp={Number(nextDays[5].main.temp_max - 273.15).toFixed() + '°C'}
              minTemp={Number(nextDays[5].main.temp_min - 273.15).toFixed()  + '°C'}
              weekDay="SEGUNDA"
            />

            <DayPage 
              imageDay={
                nextDays[13].weather[0].main === 'Thunderstorm' && '/icons/thunderStorm.png' ||
                nextDays[13].weather[0].main === 'Drizzle' && '/icons/showerRain.png' ||
                nextDays[13].weather[0].main === 'Rain' && '/icons/rainDay.png' ||
                nextDays[13].weather[0].main === 'Snow' && '/icons/snow.png' ||
                nextDays[13].weather[0].main === 'Mist' && '/icons/mist.png' ||
                nextDays[13].weather[0].main === 'Smoke' && '/icons/mist.png' ||
                nextDays[13].weather[0].main === 'Haze' && '/icons/mist.png' ||
                nextDays[13].weather[0].main === 'Dust' && '/icons/mist.png' ||
                nextDays[13].weather[0].main === 'Fog' && '/icons/mist.png' ||
                nextDays[13].weather[0].main === 'Sand' && '/icons/mist.png' ||
                nextDays[13].weather[0].main === 'Ash' && '/icons/mist.png' ||
                nextDays[13].weather[0].main === 'Squall' && '/icons/mist.png' ||
                nextDays[13].weather[0].main === 'Tornado' && '/icons/mist.png' ||
                nextDays[13].weather[0].main === 'Clear' && '/icons/clearSkyDay.png' ||
                nextDays[13].weather[0].description === 'few clouds' && '/icons/fewCloudsDay.png' ||
                nextDays[13].weather[0].description === 'broken clouds' && '/icons/brokenClouds.png' ||
                nextDays[13].weather[0].description === 'scattered clouds' && '/icons/scatteredCloudsDay.png'
              }
              maxTemp={Number(nextDays[13].main.temp_max - 273.15).toFixed() + '°C'}
              minTemp={Number(nextDays[13].main.temp_min - 273.15).toFixed() + '°C'}
              weekDay="TERÇA"
            />

            <DayPage 
              imageDay={
                nextDays[21].weather[0].main === 'Thunderstorm' && '/icons/thunderStorm.png' ||
                nextDays[21].weather[0].main === 'Drizzle' && '/icons/showerRain.png' ||
                nextDays[21].weather[0].main === 'Rain' && '/icons/rainDay.png' ||
                nextDays[21].weather[0].main === 'Snow' && '/icons/snow.png' ||
                nextDays[21].weather[0].main === 'Mist' && '/icons/mist.png' ||
                nextDays[21].weather[0].main === 'Smoke' && '/icons/mist.png' ||
                nextDays[21].weather[0].main === 'Haze' && '/icons/mist.png' ||
                nextDays[21].weather[0].main === 'Dust' && '/icons/mist.png' ||
                nextDays[21].weather[0].main === 'Fog' && '/icons/mist.png' ||
                nextDays[21].weather[0].main === 'Sand' && '/icons/mist.png' ||
                nextDays[21].weather[0].main === 'Ash' && '/icons/mist.png' ||
                nextDays[21].weather[0].main === 'Squall' && '/icons/mist.png' ||
                nextDays[21].weather[0].main === 'Tornado' && '/icons/mist.png' ||
                nextDays[21].weather[0].main === 'Clear' && '/icons/clearSkyDay.png' ||
                nextDays[21].weather[0].description === 'few clouds' && '/icons/fewCloudsDay.png' ||
                nextDays[21].weather[0].description === 'broken clouds' && '/icons/brokenClouds.png' ||
                nextDays[21].weather[0].description === 'scattered clouds' && '/icons/scatteredCloudsDay.png'
              }
              maxTemp={Number(nextDays[21].main.temp_max - 273.15).toFixed() + '°C'}
              minTemp={Number(nextDays[21].main.temp_min - 273.15).toFixed() + '°C'}
              weekDay="QUARTA"
            />

            <DayPage 
              imageDay={
                nextDays[29].weather[0].main === 'Thunderstorm' && '/icons/thunderStorm.png' ||
                nextDays[29].weather[0].main === 'Drizzle' && '/icons/showerRain.png' ||
                nextDays[29].weather[0].main === 'Rain' && '/icons/rainDay.png' ||
                nextDays[29].weather[0].main === 'Snow' && '/icons/snow.png' ||
                nextDays[29].weather[0].main === 'Mist' && '/icons/mist.png' ||
                nextDays[29].weather[0].main === 'Smoke' && '/icons/mist.png' ||
                nextDays[29].weather[0].main === 'Haze' && '/icons/mist.png' ||
                nextDays[29].weather[0].main === 'Dust' && '/icons/mist.png' ||
                nextDays[29].weather[0].main === 'Fog' && '/icons/mist.png' ||
                nextDays[29].weather[0].main === 'Sand' && '/icons/mist.png' ||
                nextDays[29].weather[0].main === 'Ash' && '/icons/mist.png' ||
                nextDays[29].weather[0].main === 'Squall' && '/icons/mist.png' ||
                nextDays[29].weather[0].main === 'Tornado' && '/icons/mist.png' ||
                nextDays[29].weather[0].main === 'Clear' && '/icons/clearSkyDay.png' ||
                nextDays[29].weather[0].description === 'few clouds' && '/icons/fewCloudsDay.png' ||
                nextDays[29].weather[0].description === 'broken clouds' && '/icons/brokenClouds.png' ||
                nextDays[29].weather[0].description === 'scattered clouds' && '/icons/scatteredCloudsDay.png'
              }
              maxTemp={Number(nextDays[29].main.temp_max - 273.15).toFixed() + '°C'}
              minTemp={Number(nextDays[29].main.temp_min - 273.15).toFixed() + '°C'}
              weekDay="QUINTA"
            />

            <DayPage 
              imageDay={
                nextDays[37].weather[0].main === 'Thunderstorm' && '/icons/thunderStorm.png' ||
                nextDays[37].weather[0].main === 'Drizzle' && '/icons/showerRain.png' ||
                nextDays[37].weather[0].main === 'Rain' && '/icons/rainDay.png' ||
                nextDays[37].weather[0].main === 'Snow' && '/icons/snow.png' ||
                nextDays[37].weather[0].main === 'Mist' && '/icons/mist.png' ||
                nextDays[37].weather[0].main === 'Smoke' && '/icons/mist.png' ||
                nextDays[37].weather[0].main === 'Haze' && '/icons/mist.png' ||
                nextDays[37].weather[0].main === 'Dust' && '/icons/mist.png' ||
                nextDays[37].weather[0].main === 'Fog' && '/icons/mist.png' ||
                nextDays[37].weather[0].main === 'Sand' && '/icons/mist.png' ||
                nextDays[37].weather[0].main === 'Ash' && '/icons/mist.png' ||
                nextDays[37].weather[0].main === 'Squall' && '/icons/mist.png' ||
                nextDays[37].weather[0].main === 'Tornado' && '/icons/mist.png' ||
                nextDays[37].weather[0].main === 'Clear' && '/icons/clearSkyDay.png' ||
                nextDays[37].weather[0].description === 'few clouds' && '/icons/fewCloudsDay.png' ||
                nextDays[37].weather[0].description === 'broken clouds' && '/icons/brokenClouds.png' ||
                nextDays[37].weather[0].description === 'scattered clouds' && '/icons/scatteredCloudsDay.png'
              }
              maxTemp={Number(nextDays[37].main.temp_max - 273.15).toFixed() + '°C'}
              minTemp={Number(nextDays[37].main.temp_min - 273.15).toFixed() + '°C'}
              weekDay="SEXTA"
            />
          </div>
        )}
    </div>
  )
}
