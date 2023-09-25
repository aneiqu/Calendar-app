import "./Event.css"

export default function Event( {content, remove, eventKey} ){

    function handleRemove(e){
        remove(eventKey + "")
    }
    
    return(
        <div className={"event-container" + " " + eventKey}>
            <p className="event-content">{content}</p>
            <button className="remove-btn" onClick={e => handleRemove(e)}>Remove</button>
        </div>
    )
}