import { useState } from 'react';
import './Calendar.css'

import CalendarTile from "./CalendarTile";
import GhostTile from './GhostTile';

export default function Calendar( {tiles} ){
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const weekdaysEl = weekdays.map(e => <p key={e} className={'weekday'}>{e}</p>)
    return(
        <div className="calendar-container">
            <div className='weekdays'>
            {weekdaysEl}

            </div>
            {tiles}
        </div>
    )
}