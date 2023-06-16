
import { useState } from 'react';
import './App.css';

function App() {
  const [colorBlue, setColorBlue] = useState('blue')
  const [colorRed, setColorRed] = useState('red')

  const changeColorClick = ()=>{
    setColorBlue(colorRed)
    setColorRed(colorBlue)
  } 

  return (
    <div className="App" >
      <div className='blue' style={{backgroundColor: `${colorBlue}`}} onClick={changeColorClick}>

      </div>
      <div className='red' style={{backgroundColor: `${colorRed}`}} onClick={changeColorClick}>

      </div>
    </div>
  );
}

export default App;