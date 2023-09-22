import "./Event.css"

export default function Event( {content, remove} ){

    function handleRemove(e){
        remove(e.target.parentNode.textContent)
    }
    
    return(
        <div className="event-container">
            <p>{content}</p>
            <button onClick={e => handleRemove(e)}>Remove</button>
        </div>
    )
}