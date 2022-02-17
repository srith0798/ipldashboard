// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {iplData: [], isOnRun: true}

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
      isOnRun: false,
    })
  }

  render() {
    const {iplData, isOnRun} = this.state
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
          {isOnRun ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="team-list">
              {iplData.map(eachTeam => (
                <TeamCard key={eachTeam.id} teamObj={eachTeam} />
              ))}
            </ul>
          )}
        </div>
      </Link>
    )
  }
}

export default Home
