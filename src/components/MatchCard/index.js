// Write your code here
import './index.css'

function MatchCard(params) {
  const {matchObj} = params
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchObj
  return (
    <li className="match-item">
      <img
        className="team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`${matchStatus}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
