import Image from 'next/image'

interface DayPageProps{
  weekDay: string
  imageDay: any
  minTemp: string
  maxTemp: string
}

export default function DayPage({weekDay, imageDay, minTemp, maxTemp }:DayPageProps) {
  return (
    <div className='flex flex-col -2 items-center'>
      <h3 className='font-semibold'>{weekDay}</h3>
      <Image 
        src={imageDay}
        width={100} 
        height={100} 
        alt='Weather Icon'
        className='-my-3'
      />
      <div className="flex flex-col items-center text-xl">
        <p className="flex items-center font-bold ">{minTemp}</p>
        <p className="flex items-center text-gray-400">{maxTemp}</p>
      </div>
    </div>
  )
}
