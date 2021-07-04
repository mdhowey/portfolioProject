import React from "react";
import logo from "../navbarLogo.jpg"
// REACT FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";




const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#F2F7FF"}}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="navbar-logo" src={logo} alt="logo for website" style={{marginBottom: "5px"}}></img>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#0B409C"}}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">about me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">classes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

