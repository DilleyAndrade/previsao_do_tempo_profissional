import { useEffect, useState } from "react"

interface MapProps{
  cityName:string
}

export default function Map({cityName}:MapProps) {
  const [dataMap, setDataMap] = useState<any>()

  useEffect(()=>{
    const fetchBBox = async () =>{
      try{
        const bBox = await fetch(`https://nominatim.openstreetmap.org/search.php?q=${cityName}&format=jsonv2`)
        const bBoxFormatter = await bBox.json()
        setDataMap(bBoxFormatter[0].boundingbox)
      }catch(error){
        console.error('Failed to Map bbox', error)
      }
    }
    fetchBBox()
  })


  
  return (
    <div>
      {dataMap && (
        <div>
          <iframe 
            width="525" 
            height="290" 
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${dataMap[2]}%2C${dataMap[0]}%2C${dataMap[3]}%2C${dataMap[1]}&amp;layer=mapnik`}
          ></iframe>
        </div>
      )}
      </iframe>
    </div>
  )
}
