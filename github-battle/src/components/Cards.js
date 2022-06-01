import React from "react";

export default function Cards(props) {
  let data = props.Data;
  return (
    <div className="cards-wrapper">
    {data.map((userdata, index) => {
        return (
          <div className="card-container" key={index}>
            <h4 className="index">#{index + 1}</h4>
            <figure className="center">
              <img src={userdata.owner.avatar_url} alt="user profile" />
            </figure>  
            <h4 className="primary-bold username">{userdata.name}</h4>
            <p class="user">
              <i class="fas fa-user"></i>
              {userdata.name}
            </p>
            <p class="star">
              <i class="fas fa-star"></i>
              {userdata.stargazers_count}
            </p>
            <p class="branch">
              <i class="fas fa-code-branch"></i>
              {userdata.forks}
            </p>
            <p className="issues">
              <i class="far fa-exclamation-triangle"></i>
              {userdata.open_issues}
            </p>
          </div>
        );
      })}
    </div>
  );
}
