import "./App.css";

import { useState, useEffect } from "react";

function App() {
  // Add the students for the first time the data gets inserted to local storage
  const studentsString =
    "CocoH KellyH NovaH CindyH CandyH JoyeH JoyS NeilS ChrisH MikeS JimS GeorgeH JaydonH JonnyS NickS JimmyS EricH OliviaH AllenS KevinH HarryS MichelleH AchillesH JerryH";

  // Retrieve data
  const studentInfo = localStorage.getItem("studentInfo");
  if (studentInfo === null) {
    // The first time
    localStorage.setItem("studentInfo", studentsString);
  }

  const [happy, sethappy] = useState([]);
  const [sad, setsad] = useState([]);

  function doStuff() {
    let happyLoad = [];
    let sadLoad = [];
    let studentArray = studentInfo.split(" ");

    for (const el of studentArray) {
      if (el.slice(-1) === "H") {
        happyLoad.push(el);
      } else {
        sadLoad.push(el);
      }
    }

    sethappy(happyLoad);
    setsad(sadLoad);
  }

  useEffect(() => {
    doStuff();
  }, []);

  function changeNameLocation() {}

  return (
    <div className="App">
      <div className="happy">
        <h1>🙂</h1>

        <div className="nameSBox" onClick={changeNameLocation()}>
          {happy.map((el) => {
            return (
              <div className="nameBox" key={el}>
                {el}
              </div>
            );
          })}
        </div>
      </div>
      <div className="sad">
        <h1>😐</h1>

        <div className="nameSBox" onClick={changeNameLocation()}>
          {sad.map((el) => {
            return (
              <div className="nameBox" key={el}>
                {el}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
