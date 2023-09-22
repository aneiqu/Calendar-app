import { useEffect, useState } from "react";
import "./CalendarTile.css"
import TileNoteModal from "./TileNoteModal";
import TileNote from "./TileNote";

export default function CalendarTile( {day, fullDate} ){
    const [toggleClass, setToggleClass] = useState("tile-btn hidden")
    const [visible, setVisible] = useState([])
    const [hidden, setHidden] = useState('tile-data tile-note hidden')

    function handleEnter(){
        setToggleClass("tile-btn")
    }
    function handleLeave(){
        setToggleClass("tile-btn hidden")
    }

    function handleClose(e){
        setHidden("hidden")
    }
    function handleOpen(){
        setHidden("")
    }



    return(
        <div className="calendar-tile" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <p className="tile-data tile-day">{day}</p>
            <button className={toggleClass} onClick={handleOpen}>Add</button>
            <div className="tile-data tile-note-container">
                <TileNote hidden={visible}/>
                <TileNoteModal hidden={hidden} handleClose={handleClose} showNote={setVisible} tileDate={fullDate}/>
            </div>
        </div>
    )
}