// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplData: []}

  componentDidMount() {
    this.onGetAPI()
  }

  onGetAPI = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const responseData = await response.json()
    const jsData = responseData.teams.map(eachAPI => ({
      name: eachAPI.name,
      id: eachAPI.id,
      teamImageUrl: eachAPI.team_image_url,
      altText: eachAPI.name,
    }))
    this.setState({
      iplData: jsData,
    })
  }

  render() {
    const {iplData} = this.state
    // console.log(iplData)
    return (
      <Link to="/" className="home-link">
        <div className="bg-home">
          <div className="header">
            <img
              className="home-logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="home-title">IPL Dashboard</h1>
          </div>
          <ul className="team-list">
            {iplData.map(eachTeam => (
              <TeamCard key={eachTeam.id} teamObj={eachTeam} />
            ))}
          </ul>
        </div>
      </Link>
    )
  }
}

export default Home
