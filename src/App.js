import { useState } from 'react'
import './App.css'
import Heading from './components/Heading'
import Game from './components/Game'

function App() {
  const [score, setScore] = useState({
    playerOne: 0,
    playerTwo: 0
  })

  return (
    <div className="App">
      <Heading score={score} />
      <Game score={score} setScore={setScore} />
    </div>
  );
}

export default App
