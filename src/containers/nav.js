import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import '../style.scss';

// TO DO: Fix Nav bar to look more like this: https://xd.adobe.com/view/daa9e21d-be50-4f75-b3bd-5a2be8c3828f-8ffa/?fullscreen
// When AB was implementing, figuring out styles in two separate files was deemed to be more work than this was worth

class Nav extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navNav">
          <ul className="navBar">
            <li className="firstNavBarList">
              <NavLink to="/">
                <a href="index.html" aria-current="page" className="brand w-nav-brand w--current"><img
                  src="src/images/whos_down_logo_main.svg"
                  loading="lazy"
                  alt=""
                  className="image-2"
                />
                </a>
              </NavLink>
            </li>
            <li className="secondNavBarList">
              <ul>
                <li><NavLink className="navItem" exact to="/"> Home </NavLink></li>
                <li><NavLink className="navItem" to="/map"> Explore </NavLink></li>
                <li><NavLink className="navItem" to="/about"> About </NavLink></li>
                <li><NavHashLink className="navItemDownload" smooth to="/#download"> Download </NavHashLink></li>
                <li><a className="donateItem" href="https://www.buymeacoffee.com/whosdown1"><span> Donate! </span> </a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(Nav);
