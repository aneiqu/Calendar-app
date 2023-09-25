import "./DateSelector.css"

import { useEffect, useState } from "react"
import CalendarTile from "./CalendarTile";
import GhostTile from "./GhostTile";



export default function DateSelector( {returnData} ){
    const today = new Date()
    const [yearMonth, setYearMonth] = useState('')
    const [date, setDate] = useState(`${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDay().toString().padStart(2, '0')}`)
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]    
    useEffect(() => {
        setYearMonth(((new Date(date).toLocaleDateString('en-US', {month : 'long'})) + ' ' + (new Date(date).getFullYear().toString())))
        const options = { weekday: "long"}
        const ghostTilesRequired = (weekdays.indexOf(new Date(new Date(date).getFullYear(), new Date(date).getMonth(), 1).toLocaleDateString('en-US', options)))
        const ghostTiles = []
        for(let i = 0; i < ghostTilesRequired; i++){
            ghostTiles.push(<GhostTile key={i}/>)
        }

        const tilesArr = []
        for(let i = 1; i < new Date(new Date(date).getFullYear(), new Date(date).getMonth() + 1, 0).getDate() + 1; i++){
            const fullDate =  new Date(new Date(date).getFullYear(), new Date(date).getMonth(), i).toLocaleDateString('en-US')
            tilesArr.push(<CalendarTile key={date.slice(0,-2) + i} day={i} today={fullDate === today.toLocaleDateString('en-US') ? 'today' : ''} fullDate={fullDate}/>)
        }
        returnData(ghostTiles.concat(tilesArr))
    }, [date])


    function handleChange(e){
        setDate(e.target.value)
    }
    return(
        <div className="date-selector-container">
            <div className="year-month-display">{yearMonth}</div>
            <input className="date-selector" type='date' onChange={e => handleChange(e)}/>
        </div>
    )
}