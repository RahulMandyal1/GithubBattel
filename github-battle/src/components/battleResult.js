import React, { Component } from "react";
import queryString from "query-string";
import Loader from "./Loader";
export default class BattleResult extends Component {
  constructor(props) {
    super();
    this.state = {
      firstPlayer: null,
      secondPlayer: null,
      userOneScore: null,
      userTwoScore: null,
    };
  }
  componentDidMount() {
    const { playerOne, playerTwo } = queryString.parse(
      this.props.location.search
    );
    this.getUser(playerOne, "firstPlayer");
    this.getUser(playerTwo, "secondPlayer");
  }

  getUser = (username, name) => {
    let step = this.state.nStep;
    return fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((profile) => {
        this.setState({
          [name]: profile,
          nStep: step + 1,
        });
      });
  };

  // to calculate  the user score
  getScore = (user) => {
    let followers = user.followers;
    let publicRepos = user.public_repos;
    return followers + publicRepos;
  };
  render() {
    if (!this.state.firstPlayer && !this.state.userOneScore) {
      return <Loader />;
    } else {
      return (
        <>
          <div className="container">
            <UserProfileGenerator
              player={this.state.firstPlayer}
              playerScore={this.state.userOneScore}
              playerTwoScore={this.state.userTwoScore}
            />

            <UserProfileGenerator
              player={this.state.secondPlayer}
              playerScore={this.state.userTwoScore}
              playerTwoScore={this.state.userOneScore}
            />
          </div>
        </>
      );
    }
  }
}
function UserProfileGenerator(props) {
  let { player, playerScore, playerTwoScore } = props;
  return (
    <>
      <div className="Card">
        <div className="col-center">
          <h4>{playerScore > playerTwoScore ? "Winner" : "Loser"}</h4>
          <img src={player.avatar_url} alt="players profile"></img>
          <h6>{playerScore}</h6>
          <h2>{player.login}</h2>
          <p>
            <i className="fas fa-user user">{player.name}</i>
          </p>
        </div>
        <p>
          <i className="fas fa-users followers"></i>
          {player.followers}
        </p>
        <p>
          <i className="fas fa-users following"></i>
          {player.following}
        </p>
        <p>
          <i className="fas fa-code-branch ligt-black"></i>
          {player.public_repos}
        </p>
      </div>
    </>
  );
}
