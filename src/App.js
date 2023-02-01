import { useState } from "react";
import getAge from "./helpers/getAge";


function App() {
  const [date, setDate] = useState();
  const [age, setAge] = useState();
  const [month, setMonth] = useState();

  if (process.env.NODE_ENV === "development")
    return (
      <div>
        <h4>Date:</h4>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} ></input>

        <h4>Age:</h4>
        <input type="text" disabled value={age}></input>
        <button onClick={() => setAge(getAge(date))}>Calculate</button>
      </div>
    );
  if (process.env.NODE_ENV === "production")
  return (
    <div>
      <h4>Date:</h4>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} ></input>

      <h4>Age:</h4>
      <h4>Year:</h4>
      <input type="text" disabled value={age}></input>
      <h4>Month:</h4>
      <input type="text" disabled value={month}></input>
      <button onClick={() => { setAge(getAge(date).age); setMonth(getAge(date).m) }}>Calculate</button>
    </div >
  );
}

export default App;
