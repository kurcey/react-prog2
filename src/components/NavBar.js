import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends Component {
  state = {
    navItems: [
      {
        linkRef: "/",
        display: "Home",
        id: 0,
        enabled: true,
      },
      {
        linkRef: "/newQuestion",
        display: "New Question",
        id: 1,
        enabled: true,
      },
      {
        linkRef: "/leaderBoard",
        display: "Leader Board",
        id: 2,
        enabled: true,
      },
    ],
  };

  generateNavMenu = () => {
    let result = this.state.navItems.map((navItems) => {
      const { linkRef, display, id, enabled } = navItems;
      let listClassName =
        window.location.pathname !== linkRef ? "nav-item active" : "nav-item";
      let linkDisabled =
        window.location.pathname === linkRef ? "nav-link disabled" : "nav-link";

      return (
        <li key={id} className={listClassName}>
          <Link
            className={linkDisabled}
            to={linkRef}
            tabIndex={id}
            aria-disabled={enabled}
          >
            {display}
          </Link>
        </li>
      );
    });
    return result;
  };

  generateWelcome = () => {
    const { name, avatarURL } = this.props.currentUser;
    if (Object.keys(this.props.currentUser).length > 0)
      return (
        <React.Fragment>
          <p>
            <span style={{ paddingRight: 10 }}>Welcome {name} </span>
            <img
              className="currentUserImage"
              src={avatarURL}
              alt="Author avatar"
            ></img>
            <Link
              className="nav-item active logOutBttn"
              to="/logout"
              tabIndex="3"
              aria-disabled="true"
            >
              Logout
            </Link>
          </p>
        </React.Fragment>
      );
  };

  generateLogout = () => {
    const { name } = this.props.currentUser;
    console.log(name);
    if (Object.keys(this.props.currentUser).length > 0)
      return <p>Welcome {name}</p>;
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">{this.generateNavMenu()}</ul>
            <span className="nav-link.active App-link">
              {this.generateWelcome()}
            </span>
          </div>
        </nav>
      </React.Fragment>
    );
  }
  componentDidUpdate() {
    //  this.loggedIn();
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser: currentUser,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
