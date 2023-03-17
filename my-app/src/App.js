import "./App.css";

import { useState, useEffect } from "react";

function App() {
  // Add the students for the first time the data gets inserted to local storage
  let studentsArray = [
    "CocoH",
    "KellyS",
    "NovaH",
    "CindyH",
    "CandyH",
    "JoyeH",
    "JoyS",
    "NeilS",
    "ChrisH",
    "MikeS",
    "JimS",
    "GeorgeH",
    "JaydonH",
    "JonnyS",
    "NickS",
    "JimmyS",
    "EricH",
    "OliviaH",
    "AllenS",
    "KevinH",
    "HarryS",
    "MichelleH",
    "AchillesH",
    "JerryH",
  ];

  // Retrieve data
  if (localStorage.getItem("studentInfo") === null) {
    // The first time
    localStorage.setItem("studentInfo", JSON.stringify(studentsArray));
  }
  const studentInfo = localStorage.getItem("studentInfo");

  const [happy, sethappy] = useState([]);
  const [sad, setsad] = useState([]);

  function doStuff() {
    let studentArray = JSON.parse(studentInfo);

    sethappy(studentArray.filter((e) => e.slice(-1) === "H"));
    setsad(studentArray.filter((e) => e.slice(-1) === "S"));
  }

  useEffect(() => {
    doStuff();
  }, []);

  function changeNameLocation(e) {
    let nameToChange = e.target.innerHTML;
    if (nameToChange.slice(-1) === "H") {
      sethappy(happy.filter((el) => el !== nameToChange));
      setsad([...sad, nameToChange.replace(/.$/, "S")]);

      const arr = happy.filter((el) => el !== nameToChange);
      const arrT = sad.concat([nameToChange.replace(/.$/, "S")]);

      localStorage.setItem("studentInfo", JSON.stringify(arr.concat(arrT)));
    } else {
      setsad((els) => els.filter((el) => el !== nameToChange));
      sethappy([...happy, nameToChange.replace(/.$/, "H")]);

      const arr = sad.filter((el) => el !== nameToChange);
      const arrT = happy.concat([nameToChange.replace(/.$/, "H")]);

      localStorage.setItem("studentInfo", JSON.stringify(arr.concat(arrT)));
    }
  }

  return (
    <div className="App">
      <div className="happy">
        <h1>🙂</h1>

        <div className="nameSBox">
          {happy.map((el) => {
            return (
              <div className="nameBox" key={el} onClick={changeNameLocation}>
                {el}
              </div>
            );
          })}
        </div>
      </div>
      <div className="sad">
        <h1>😐</h1>

        <div className="nameSBox">
          {sad.map((el) => {
            return (
              <div className="nameBox" key={el} onClick={changeNameLocation}>
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
