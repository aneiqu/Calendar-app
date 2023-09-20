import { useState } from 'react';
import './Calendar.css'

import CalendarTile from "./CalendarTile";

export default function Calendar( {tiles} ){

    return(
        <div className="calendar-container">
            {tiles}
        </div>
    )
}