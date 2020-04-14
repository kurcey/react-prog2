import React, { Component } from "react";

class NavBar extends Component {
  state = {
    navItems: [
      {
        linkRef: "/",
        display: "Home",
        active: true,
        id: 0,
        enabled: true,
      },
      {
        linkRef: "/newQuestion",
        display: "New Question",
        active: true,
        id: 1,
        enabled: true,
      },
      {
        linkRef: "/leaderBoard",
        display: "Leader Board",
        active: true,
        id: 2,
        enabled: true,
      },
      {
        linkRef: "/logout",
        display: "Logout",
        active: true,
        id: 3,
        enabled: true,
      },
      {
        linkRef: "/login",
        display: "Login",
        active: true,
        id: 4,
        enabled: true,
      },
    ],
  };

  generateNavMenu = () => {
    let result = this.state.navItems.map((navItems) => {
      const { linkRef, display, active, id, enabled } = navItems;
      const listClassName =
        window.location.pathname !== linkRef ? "nav-item active" : "nav-item";
      const linkDisabled =
        window.location.pathname === linkRef ? "nav-link disabled" : "nav-link";

      return (
        <li key={id} className={listClassName}>
          <a
            className={linkDisabled}
            href={linkRef}
            tabIndex={id}
            aria-disabled={enabled}
          >
            {display}
          </a>
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
