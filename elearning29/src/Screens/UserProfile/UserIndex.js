import React, { Component } from "react";
import UserProfileLeft from "./UserProfileLeft";
import UserProfileRight from "./UserProfileRight";
import "../../sass/Page/_userProfile.scss";

class UserIndex extends Component {
  render() {
    return (
      <section className="userProfile">
        <div className="container">
          <div className="row">
            {/* User Profile Left */}
            <UserProfileLeft />

            {/* User Profile Right */}
            <UserProfileRight />
          </div>
        </div>
      </section>
    );
  }
}

export default UserIndex;
