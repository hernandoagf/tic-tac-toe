const Heading = ({ score }) => {
  return (
    <div className='heading'>
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="score">
        <h6 className="score-title">Score</h6>
        <p className="score-points">{score['playerOne']}-{score['playerTwo']}</p>
      </div>
    </div>
  )
}

export default Heading
