import React, { Component } from "react";

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
              [name + "Err"]: "User is not found invaid username",
            },
          });
        }

        this.setState({
          [name + "Data"]: data,
        });
      });
  };

  render() {
    let { firstUserErr, secondUserErr } = this.state.errors;
    return (
      <div className="container">
        <div className="instruction-container">
          <div className="instruction-card">
            <h2>Enter two github user</h2>
            <div className="instruction-icon center"></div>
          </div>

          <div className="instruction-card">
            <h2>Battel</h2>
            <div className="instruction-icon center"></div>
          </div>

          <div className="See  the winner">
            <h2>Enter two github user</h2>
            <div className="instruction-icon center"></div>
          </div>
        </div>

        {/* //  this is to take  the username input from the user  */}
        <div className="usernameInput-container">
          <h2>Players</h2>
          <div className="flex-row">
            <form className="flex-46">
              <h3>Player one</h3>
              <div className="form-group">
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
              </div>
              <p className="error">{firstUserErr}</p>
            </form>

            <form className="flex-46">
              <h3>Player two</h3>
              <div className="form-group">
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
              </div>
              <p className="error">{secondUserErr}</p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
