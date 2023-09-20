import { useEffect, useState } from "react"
import CalendarTile from "./CalendarTile";



export default function DateSelector( {returnData} ){
    const today = new Date()
    const [tiles, setTiles] = useState([])
    const [date, setDate] = useState(`${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDay().toString().padStart(2, '0')}`)
    

    useEffect(() => {
        const options = { weekday: "long"}

        const tilesArr = []
        for(let i = 1; i < new Date(new Date(date).getFullYear(), new Date(date).getMonth() + 1, 0).getDate() + 1; i++){
            tilesArr.push(<CalendarTile day={i} fullDay={new Date(new Date(date).getFullYear(),new Date(date).getMonth() + 1, 0).toLocaleDateString('en-US', options)}/>)
        }
        returnData(tilesArr)
    }, [date])


    function handleChange(e){
        setDate(e.target.value)
    }
    return(
        <div>
            <input className="date-selector" type='date' onChange={e => handleChange(e)}/>
        </div>
    )
}