import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import "./style/Calendar.css"
import { startSession } from 'mongoose'

function Calendar(props) {

  return (
    <div className='calendar-container'>
        <FullCalendar
            plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
            events={props.events}
        />
    </div>
  )
}

export default Calendar


const [dateValue, setDateValue] = useState('');


  const events = {
    title: nameInput,
    date: dateValue,
    backgorundColor: "red"
  }

  const valueOfDate  = (event) => {
      
    setDateValue(event.target.value);
   }