// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

function TeamCard(params) {
  const {teamObj} = params
  const {name, id, teamImageUrl, altText} = teamObj
  return (
    <Link to={`/team-matches/${id}`} className="team-item-link">
      <li className="team-item">
        <img className="team-pic" src={teamImageUrl} alt={altText} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
