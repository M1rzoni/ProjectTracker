import { useState, useRef } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import MainContnet from "./components/MainContnet";
import CreateNewProject from "./components/CreateNewProject";
import Calendar from "./components/Calendar";

function App() {
  const [show, setShow] = useState(false);
  const [showCal, setShowCal] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [investitorInput, setInvestitorInput] = useState("");
  const [izvodjacInput, setIzvodjacInput] = useState("");
  const [dozvolaInput, setDozvolaInput] = useState("");
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedProjectName, setSelectedProjectName] = useState("");
  const [dateValue, setDateValue] = useState('');
  const [events, setEvents] = useState([]);
  const [endDateValue, setEndDateValue] = useState('');
  const [event, setEvent] = useState([]);


  const handleAddEvent = () => {
    if (nameInput && dateValue) {
      const newEvent = {
        title: nameInput,
        date: dateValue,
        backgroundColor: 'green', 
      };
      setEvents([...events, newEvent]);
      setNameInput('');
      setDateValue('');
    } else {
      alert('Neka polja nisu popunjena.');
    }
  };

  const handelEndEvent = () => {

    if(nameInput && endDateValue){
      const newEvent = {
        title: nameInput,
        date: endDateValue,
        backgroundColor: "red"
      };
      setEvent([...event, newEvent]);
    }else {
      alert("Polje je ostalo prazno")
    }
  }

  const valueOfEnd = event => {

    setEndDateValue(event.target.value);
  }


  const valueOfDate  = (event) => {
      
   setDateValue(event.target.value);
  }

  const calendarRef = useRef(null);

  const handleAddEventToCalendar = () => {
    if (!selectedDate || !selectedProjectName) {
      alert("Molimo unesite datum i naziv projekta");
      return;
    }
    calendarRef.current.getApi().addEvent({
      title: selectedProjectName,
      start: selectedDate,
    });

    setSelectedDate("");
    setSelectedProjectName("");
  };

  const handleNameInput = (event) => {
    setNameInput(event.target.value);
  };

  const handleInvestitorInput = (event) => {
    setInvestitorInput(event.target.value);
  };

  const handleIzvodjacInput = (event) => {
    setIzvodjacInput(event.target.value);
  };

  const handleDozvolaInput = (event) => {
    setDozvolaInput(event.target.value);
  };

  const handleDateInputChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleProjectNameInputChange = (event) => {
    setSelectedProjectName(event.target.value);
  };

  const onClick = () => {
    if (
      nameInput.trim() === "" ||
      investitorInput.trim() === "" ||
      izvodjacInput.trim() === "" ||
      dozvolaInput.trim() === ""
    ) {
      alert("Sva polja moraju biti popunjena");
      return;
    }
    const newProject = {
      naziv: nameInput,
      investitor: investitorInput,
      izvodjac: izvodjacInput,
      dozvola: dozvolaInput,
    };
    setData([...data, newProject]);
    setNameInput("");
    setInvestitorInput("");
    setIzvodjacInput("");
    setDozvolaInput("");
  };

  const showCalc = () => {
    setShowCal(!showCal);
  };

  const handleClick = () => {
    setShow(!show);
  };

  const handleDodajButton = () => {
    
  }

  return (
    <div className="app-container">
      <SideBar handle={handleClick} show={showCalc} />
      <MainContnet />
      {show && (
        <CreateNewProject
          onClick={onClick}
          handleNameInput={handleNameInput}
          handleInvestitorInput={handleInvestitorInput}
          handleIzvodjacInput={handleIzvodjacInput}
          handleDozvolaInput={handleDozvolaInput}
          nameInput={nameInput}
          investitorInput={investitorInput}
          izvodjacInput={izvodjacInput}
          dozvolaInput={dozvolaInput}
          data={data}
          onDateInputChange={handleDateInputChange}
          onProjectNameInputChange={handleProjectNameInputChange}
          dateValue ={valueOfDate}
          valueOfEnd = {valueOfEnd}
          addCal = {handleAddEvent}
          endCal = {handelEndEvent}
        />
      )}

      {showCal && <Calendar newEvent = {event} events = {events} nameValue = {nameInput} />}
    </div>
  );
}

export default App;
