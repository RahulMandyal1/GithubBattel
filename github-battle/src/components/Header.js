import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="navigation-bar">
      <nav className="menus">
        <NavLink to="/" activeClassName="active-menu" exact>
          Popular
        </NavLink>
        <NavLink to="/battle" activeClassName="active-menu">
          Battle
        </NavLink>
      </nav>
      <div className="darkmode">
        <i class="fas fa-moon"></i>
      </div>
    </header>
  );
}
