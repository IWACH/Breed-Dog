import React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <div className="content">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img
                src="/assets/logo-breed.jpeg"
                alt="logoBreedDog"
                height="28"
              />
            </Link>
          </div>
          <div className="navbar-item">
            <h2 className="pt-3">RAZAS DE PERROS</h2>
          </div>
        </nav>
      </div>
    );
  }
}
