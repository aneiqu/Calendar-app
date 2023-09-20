import { useState } from "react";
import "./CalendarTile.css"

export default function CalendarTile( {fullDay, day} ){
    
    function handleEnter(e){
        if(!e.target.classList.contains("calendar-tile")) return
        e.target.style.backgroundColor = 'red'
    }
    function handleLeave(e){
        if(!e.target.classList.contains("calendar-tile")) return
        setTimeout(() => {
            e.target.style.backgroundColor = 'white';
          }, 100);
    }
    
    return(
        <div className="calendar-tile" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <p className="tile-data tile-day">{day}</p>
            <p className="tile-data tile-fullDay">{fullDay}</p>
        </div>
    )
}