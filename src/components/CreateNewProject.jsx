import React, { useState } from "react";
import "./style/CreateNewProject.css";

function CreateNewProject(props) {

  return (
    <div className="New-Project-Container">
      <div className="input-container">
        <h1>Novi Projekat</h1>
        <input
          type="date"
          value={props.selectedDate}
          onChange={props.dateValue}
        />
        <input
          value={props.nameInput}
          onChange={props.handleNameInput}
          type="text"
          placeholder="Naziv Projekta"
        />
        <input
          value={props.investitorInput}
          onChange={props.handleInvestitorInput}
          type="text"
          placeholder="Investitor"
        />
        <input
          value={props.izvodjacInput}
          onChange={props.handleIzvodjacInput}
          type="text"
          placeholder="Izvođač Radova"
        />
        <input
          value={props.dozvolaInput}
          onChange={props.handleDozvolaInput}
          type="number"
          placeholder="Broj Dozvole"
        />
        <button onClick={props.addCal}>Dodaj</button>
        {props.data.map((item, index) => (
          <div className="new-project-container" key={index}>
            <p>Naziv projekta: {item.naziv}</p>
            <p>Investitor: {item.investitor}</p>
            <p>Izvođač radova: {item.izvodjac}</p>
            <p>Broj dozvole: {item.dozvola}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateNewProject;
