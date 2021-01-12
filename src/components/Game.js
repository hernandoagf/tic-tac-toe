import { useState, useEffect, Fragment } from 'react'

const Game = ({ score, setScore }) => {
  const [turn, setTurn] = useState(1)
  const [winner, setWinner] = useState(null)
  const [game, setGame] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
  })

  useEffect(() => {
    const lines = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (game[a] === 'O' && game[a] === game[b] && game[a] === game[c]) setWinner('playerOne')
      if (game[a] === 'X' && game[a] === game[b] && game[a] === game[c]) setWinner('playerTwo')
    }
  }, [game])

  useEffect(() => {
    if(winner) {
      setScore({
        ...score,
        [winner]: score[winner] + 1
      })
    }
    // eslint-disable-next-line
  }, [winner])

  const onClick = e => {
    if (turn === 1 && game[e.target.id] === '') {
      setGame({...game, [e.target.id]: 'O'})
      setTurn(2)
    } else if (turn === 2  && game[e.target.id] === '') {
      setGame({...game, [e.target.id]: 'X'})
      setTurn(1)
    }
  }

  const playAgain = () => {
    setWinner(null)
      setTurn(1)
      setGame({
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
      })
  }

  if (!Object.values(game).some(move => move === '') && !winner) return (
    <Fragment>
      <h2>It's a tie!</h2>
      <a href="#!" className="btn" onClick={playAgain}>Play again</a>
    </Fragment>
  )

  if (winner) return (
    <Fragment>
      <h2>{winner} won!</h2>
      <a href="#!" className="btn" onClick={playAgain}>Play again</a>
    </Fragment>
  )

  return (
    <div className='game'>
      <div id="1" onClick={onClick}>{game[1]}</div>
      <div id="2" onClick={onClick}>{game[2]}</div>
      <div id="3" onClick={onClick}>{game[3]}</div>
      <div id="4" onClick={onClick}>{game[4]}</div>
      <div id="5" onClick={onClick}>{game[5]}</div>
      <div id="6" onClick={onClick}>{game[6]}</div>
      <div id="7" onClick={onClick}>{game[7]}</div>
      <div id="8" onClick={onClick}>{game[8]}</div>
      <div id="9" onClick={onClick}>{game[9]}</div>
    </div>
  )
}

export default Game
