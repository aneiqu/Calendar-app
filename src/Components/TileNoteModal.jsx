import { useEffect, useState } from "react"
import "./TileNoteModal.css"
import Event from "./Event"

export default function TileNoteModal( {hidden, handleClose, showNote, tileDate} ){
    
    const [events, setEvents] = useState(localStorage.getItem(tileDate) ? JSON.parse(`[${localStorage.getItem(tileDate)}]`).map(el => <Event eventKey={el[0]} key={+el[0]} content={el[1]} remove={handleRemove}/>) : [])
    const [eventsKey, setEventsKey] = useState(0)
    const [inputValue, setInputValue] = useState('')
    const [hideTemplate, setHideTemplate] = useState("event-template hidden")
    function addHandler(){
        setHideTemplate("event-template")
    }
    
    function handleRemove(e){
        setEvents(prevList => prevList.filter(el => el.key !== e))
    }
    function handleSave(e){
        setEventsKey(prevKey => prevKey + 1)
        e.preventDefault()
        if(inputValue.length <= 0) return
        setEvents(prevEvents => [...prevEvents, <Event eventKey={eventsKey} key={+eventsKey} content={inputValue} remove={handleRemove}/>])
        setInputValue('')
        setHideTemplate("event-template hidden")
    }

    useEffect(()=>{        
        const testArr =[]
        events.forEach(el => testArr.push(JSON.stringify([el.key, el.props.content])))
        localStorage.setItem(tileDate, testArr)
    },[events])
    
    
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
                        <input className="modal-input" type="text" onChange={e =>setInputValue(e.target.value)} value={inputValue}></input>
                        <div>
                            <button className="modal-btn" type="submit" onClick={e => handleSave(e)}>Save</button>
                            <button className="modal-btn" onClick={e => {
                                e.preventDefault()
                                setInputValue('')
                                setHideTemplate('event-template hidden')
                            }}>Cancel</button>
                        </div>
                    </form>
                    {events}
                </div>
            </div>
        </div>
    )
}