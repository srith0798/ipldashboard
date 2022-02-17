// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {tempObj: []}

  componentDidMount() {
    this.getSpecificMatch()
  }

  getSpecificMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const data = await response.json()
    const teamBannerUrl = data.team_banner_url
    const latestMatchData = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      firstInnings: data.latest_match_details.first_innings,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }
    const recentMatchData = data.recent_matches.map(eachList => ({
      umpires: eachList.umpires,
      result: eachList.result,
      manOfTheMatch: eachList.man_of_the_match,
      id: eachList.id,
      date: eachList.date,
      venue: eachList.venue,
      competingTeam: eachList.competing_team,
      firstInnings: eachList.first_innings,
      competingTeamLogo: eachList.competing_team_logo,
      secondInnings: eachList.second_innings,
      matchStatus: eachList.match_status,
    }))
    const jsObj = {
      headBanner: teamBannerUrl,
      latestMatches: latestMatchData,
      recentMatches: recentMatchData,
      altTxt: id,
    }
    this.setState({
      tempObj: jsObj,
    })
  }

  getImageBanner = () => {
    const {tempObj} = this.state
    const {headBanner, altTxt, recentMatches, latestMatches} = tempObj
    const trendMatches = recentMatches === undefined ? [] : recentMatches
    const currentMatches = latestMatches === undefined ? '' : latestMatches
    return (
      <div>
        <img className="match-pic" src={headBanner} alt={altTxt} />
        <h1 className="team-title">Latest Matches</h1>

        <LatestMatch details={currentMatches} />
        <ul className="trend-list">
          {trendMatches.map(eachMatch => (
            <MatchCard key={eachMatch.id} matchObj={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {tempObj} = this.state
    const {altTxt} = tempObj
    return (
      <div className={`team-bg ${altTxt}`}>
        <div className="card">{this.getImageBanner()}</div>
      </div>
    )
  }
}

export default TeamMatches
