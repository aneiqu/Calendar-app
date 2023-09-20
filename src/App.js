  import { useState } from 'react';
import './App.css';
import Calendar from './Components/Calendar';
import DateSelector from './Components/DateSelector';


function App() {
    const [tiles, setTiles] = useState([])
    
    function requestData(e){
      setTiles(e)
  }
  return (
    <div className="App">
      <DateSelector returnData={requestData}/>
      <Calendar tiles={tiles} />
    </div>
  );
}

export default App;
