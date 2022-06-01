import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class UserBattle extends Component {
  constructor() {
    super();
    this.state = {
      firstUser: "",
      secondUser: "",
      firstUserData: null,
      secondUserData: null,
      errors: {
        firstUserErr: "",
        secondUserErr: "",
      },
    };
  }

  changeState = ({ target }) => {
    let { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  // find the  user and thorw meaningful error if not found
  findGithubUser = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let user = this.state[name];
    let getUser = fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Not Found") {
          return this.setState({
            errors: {
              [name + "Err"]: "User is not found invalid username",
            },
          });
        }

        this.setState({
          [name + "Data"]: data,
        });
      });
  };

  //delete User data
  deleteUserData = (userNameData) => {
    this.setState({
      [userNameData]: null,
    });
  };

  //show battel button only when if both user is found and
  // have user data for  the both users
  showbattleButton = () => {
    if (this.state.firstUserData && this.state.secondUserData) {
      return (
        <div className="flex-row-center w-100 battle-button-container">
          <button className="battle-now" id="white">
            <Link
              to={{
                pathname: "/battle/results",
                search: `?playerOne=${this.state.firstUser}&playerTwo=${this.state.secondUser}`,
              }}
            >
              Battle
            </Link>
          </button>
        </div>
      );
    }
  };

  render() {
    let { firstUserErr, secondUserErr } = this.state.errors;
    return (
      <div className="container">
        <InstructioforUsers />
        {/* //  this is to take  the username input from the user  */}
        <div className="usernameInput-container">
          <h2>Players</h2>
          <div className="flex-row">
            <form className="flex-46">
              <h3>Player one</h3>
              <div className="form-group">
                {this.state.firstUserData === null ? (
                  <>
                    <input
                      type="text"
                      name="firstUser"
                      placeholder="github username"
                      onChange={this.changeState}
                      value={this.state.firstUser}
                    />
                    <button
                      type="submit"
                      name="firstUser"
                      onClick={this.findGithubUser}
                    >
                      submit
                    </button>
                  </>
                ) : (
                  <UserProfilePreview
                    userProfile={this.state.firstUserData}
                    deleteUserData={this.deleteUserData}
                    userName="firstUserData"
                  />
                )}
              </div>
              <p className="error">{firstUserErr}</p>
            </form>

            <form className="flex-46">
              <h3>Player two</h3>
              <div className="form-group">
                {this.state.secondUserData === null ? (
                  <>
                    <input
                      type="text"
                      name="secondUser"
                      placeholder="github username"
                      onChange={this.changeState}
                      value={this.state.secondUser}
                    />
                    <button
                      type="submit"
                      name="secondUser"
                      onClick={this.findGithubUser}
                    >
                      submit
                    </button>
                  </>
                ) : (
                  <UserProfilePreview
                    userProfile={this.state.secondUserData}
                    deleteUserData={this.deleteUserData}
                    userName="secondUserData"
                  />
                )}
              </div>
              <p className="error">{secondUserErr}</p>
            </form>
          </div>
        </div>
        {this.showbattleButton()}
      </div>
    );
  }
}

function InstructioforUsers() {
  return (
    <>
      <div className="instruction-container">
        <h2 className="heading">Instructions</h2>
        <div className="wrapper">
          <div className="instruction-card">
            <h2>Enter two github user</h2>
            <div className="instruction-icon center">
              <i className="fas fa-user-friends users"></i>
            </div>
          </div>

          <div className="instruction-card">
            <h2>Battle</h2>
            <div className="instruction-icon center">
              <i className="fas fa-fighter-jet battle"></i>
            </div>
          </div>

          <div className="instruction-card">
            <h2>Enter two github user</h2>
            <div className="instruction-icon center">
              <i className="fas fa-trophy winner"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function UserProfilePreview(props) {
  let { userProfile, deleteUserData, userName } = props;
  return (
    <div className="flex-row userprofile-container">
      <div className="flex-row">
        <img src={userProfile.avatar_url} alt="user github profile"></img>
        <h4>{userProfile.login}</h4>
      </div>
      <button
        onClick={() => {
          deleteUserData(userName);
        }}
      >
        {/* <i class="fa-solid fa-delete-left"></i> */}
        delete
      </button>
    </div>
  );
}
