import { useEffect, useState } from "react"
import "./TileNoteModal.css"
import Event from "./Event"

export default function TileNoteModal( {hidden, handleClose, showNote, tileDate} ){
    
    const [events, setEvents] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [hideTemplate, setHideTemplate] = useState("event-template hidden")
    function addHandler(){
        setHideTemplate("event-template")
    }
    
    function handleRemove(e){
        setEvents(prevList => prevList.filter(el => el.key !== e.slice(0,-6)))
    }
    function handleSave(e){
        e.preventDefault()
        if(inputValue.length <= 0) return
        setEvents(prevEvents => [...prevEvents, <Event key={tileDate + " "+ events.length} content={inputValue} remove={handleRemove}/>])
        setInputValue('')
        setHideTemplate("event-template hidden")
        // console.log(tileDate + " "+ events.length)
    }
    
    useEffect(()=>{
        if(events.length > 0) showNote('tile-data tile-note')
        if(events.length <= 0) showNote('tile-data tile-note hidden')
    }, [events])

    return(
        <div className={hidden}>
            <div className="tile-note-modal-container">
                <div className="tile-note-modal">
                    <div className="nav-btns">
                        <button className="modal-btn" onClick={addHandler}>Add</button>
                        <button className="modal-btn" onClick={e => {
                            handleClose();
                            setHideTemplate("event-template hidden")
                        }}>Close</button>
                    </div>
                    <form className={hideTemplate}>
                        <input type="text" onChange={e =>setInputValue(e.target.value)} value={inputValue}></input>
                        <button type="submit" onClick={e => handleSave(e)}>Save</button>
                        <button onClick={e => {
                            e.preventDefault()
                            setInputValue('')
                            setHideTemplate('event-template hidden')
                        }}>Cancel</button>
                    </form>
                    {events}
                </div>
            </div>
        </div>
    )
}