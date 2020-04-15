import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      {
        linkRef: "/logout",
        display: "Logout",
        id: 3,
        enabled: true,
      },
    ],
  };

  generateNavMenu = () => {
    let result = this.state.navItems.map((navItems) => {
      const { linkRef, display, id, enabled } = navItems;
      const listClassName =
        window.location.pathname !== linkRef ? "nav-item active" : "nav-item";
      const linkDisabled =
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

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">{this.generateNavMenu()}</ul>
            <span className="nav-link.active">hello</span>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
