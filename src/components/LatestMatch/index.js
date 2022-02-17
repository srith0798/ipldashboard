// Write your code here
import './index.css'

function LatestMatch(params) {
  console.log(params)
  const {details} = params
  const {
    umpires,
    result,
    manOfTheMatch,
    firstInnings,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    secondInnings,
  } = details
  return (
    <div className="current-match-box">
      <div className="left-card">
        <p className="team-name">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="match-info">{venue}</p>
        <p className="match-info">{result}</p>
      </div>
      <img
        className="current-match-pic"
        src={competingTeamLogo}
        alt={competingTeam}
      />
      <div className="right-card">
        <p className="match-head">FirstInnings</p>
        <p className="match-info">{firstInnings}</p>
        <p className="match-head">SecondInnings</p>
        <p className="match-info">{secondInnings}</p>
        <p className="match-head">Man Of The Match</p>
        <p className="match-info">{manOfTheMatch}</p>
        <p className="match-head">Umpire</p>
        <p className="match-info">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
