import { useState } from "react";
import TileNote from "./TileNote";
import "./CalendarTile.css"

export default function CalendarTile( {fullDay, day} ){
    const [toggleClass, setToggleClass] = useState("tile-btn hidden")
    const [tileNotes, setTileNotes] = useState([])
    function handleEnter(e){
        setToggleClass("tile-btn")
    }
    function handleLeave(e){
        setToggleClass("tile-btn hidden")
    }
    function tileAddHandler(e){
        setTileNotes([...tileNotes, <TileNote key={Math.random()}/>])
    }


    return(
        <div className="calendar-tile" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <p className="tile-data tile-day">{day}</p>
            <button className={toggleClass} onClick={tileAddHandler}>Add</button>
            <div className="tile-data tile-note-container">
                {tileNotes}
            </div>
        </div>
    )
}