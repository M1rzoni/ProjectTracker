import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import "./style/Calendar.css"
import { startSession } from 'mongoose'

function Calendar(props) {

  const allEvents = [...props.events, ...props.newEvent]

  return (
    <div className='calendar-container'>
        <FullCalendar
            plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
            events={allEvents}
        />
    </div>
  )
}

export default Calendar