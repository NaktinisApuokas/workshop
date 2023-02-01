import { useState } from "react";
import getAge from "./helpers/getAge";


function App() {
  const [date, setDate] = useState();
  const [age, setAge] = useState();

  return (
    <div>
      <h4>Date:</h4>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} ></input>

      <h4>Age:</h4>
      <input type="text" disabled value={age}></input>
      <button onClick={() => setAge(getAge(date))}>Calculate</button>
    </div>
  );
}

export default App;
