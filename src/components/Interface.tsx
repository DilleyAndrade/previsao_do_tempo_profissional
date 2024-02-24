import { ArrowDown, ArrowUp } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

interface InterfaceProps{
  dayMonth:string
  hour:string
  cityName:string
  countryName:string
  temperature:string
  typeTemperature:string
  maxTemp:string
  minTemp:string
  description:string
  fellLike:string
  weatherStatus: string
  windSpeed:string
  typeWindSpeed: string
  pressure: string
  humidity: string
  imageIcon:any
  
}

export default function Interface({
    dayMonth, 
    hour, 
    cityName, 
    countryName, 
    temperature, 
    typeTemperature, 
    maxTemp, minTemp, 
    description, 
    fellLike, 
    weatherStatus, 
    windSpeed,
    typeWindSpeed,
    pressure,
    humidity,
    imageIcon
  }:InterfaceProps) {
  return (
    <div>
      <div>
        <p className="text-orange-500">{dayMonth}, {hour}</p>
        <h3 className="text-3xl font-bold">{cityName}, {countryName}</h3>
        <div className="flex items-center mt-5">
          <Image src={imageIcon} width={60} height={60} alt="Ícone clima"/>
          <div className="flex gap-2 font-regular">
            <h2 className=" text-5xl">{temperature}{typeTemperature}</h2>
            <div className="flex gap-2">
              <p className="flex items-center"><ArrowUp size={20} weight="bold" /> {maxTemp}{typeTemperature}</p>
              <p className="flex items-center"><ArrowDown size={20} weight="bold" /> {minTemp}{typeTemperature}</p>
            </div>
          </div>
          
        </div>
        <p className="text-white bg-orange-500 py-1 px-4 max-w-max rounded-md">{description}</p>
      </div>
      <div className="font-semibold my-3 flex gap-3">
        <p >Sensação térmica: {fellLike}{typeTemperature}.</p>
        <p>{weatherStatus}</p>
      </div>
      
      <div className="flex gap-1 w-48 flex-wrap border-l-2 border-orange-500 px-1 ">
        <p>Vento: {windSpeed}{typeWindSpeed}</p>
        <p>Pressão: {pressure}hPa</p>
        <p>Humidade: {humidity}%</p>
      </div>
    </div>
  )
}
