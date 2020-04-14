import React, { Component } from "react";

class NavBar extends Component {
  state = {
    navItems: [
      {
        linkRef: "/",
        display: "Home",
        active: true,
        current: false,
        id: 0,
        enabled: true,
        disableLink: false,
      },
      {
        linkRef: "/newQuestion",
        display: "New Question",
        active: true,
        current: false,
        id: 1,
        enabled: true,
        disableLink: false,
      },
      {
        linkRef: "/leaderBoard",
        display: "Leader Board",
        active: true,
        current: false,
        id: 2,
        enabled: true,
        disableLink: false,
      },
      {
        linkRef: "/logout",
        display: "Logout",
        active: true,
        current: false,
        id: 3,
        enabled: true,
        disableLink: false,
      },
    ],
  };

  generateNavMenu = () => {
    let result = this.state.navItems.map((navItems) => {
      const {
        linkRef,
        display,
        active,
        current,
        id,
        enabled,
        disableLink,
      } = navItems;
      const listClassName = active ? "nav-item active" : "nav-item";
      const linkDisabled = disableLink ? "nav-link disabled" : "nav-link";
      const currentName = current ? "(current)" : "";
      return (
        <li key={id} className={listClassName}>
          <a
            className={linkDisabled}
            href={linkRef}
            tabIndex={id}
            aria-disabled={enabled}
          >
            {display}
            <span className="sr-only">{currentName}</span>
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
