import React, { Component } from "react";

export default class BattleResult extends Component {
  constructor(props) {
    super();
    this.state = {
      userOneScore: null,
      userTwoScore: null,
    };
  }

  // it will update user score
  getResultFromBattle = () => {
    let firstUser = this.getScore(this.props.firstUserData);
    let secondUser = this.getScore(this.props.secondUserData);
    this.setState({
      userOneScore: firstUser,
      secondUser: secondUser,
    });
  };

  // to calculate  the user score
  getScore = (user) => {
    let followers = user.followers;
    let publicRepos = user.public_repos;
    return followers + publicRepos;
  };
  render() {
    return <></>;
  }
}
