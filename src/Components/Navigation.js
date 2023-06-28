import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faTriangleExclamation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";
import {Link} from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="side-nav-cont">
      <div className="app-nav-controls">
        <div className="app-heading">
          <h2>Covid-19</h2>
        </div>
        <ul className="nav-items">
          <li className="single-nav-item">
            <Link className="single-nav-item-link" to="/">
              <FontAwesomeIcon icon={faGauge} /> Dashboard
            </Link>
          </li>
          <li className="single-nav-item">
            <Link className="single-nav-item-link" to="/About">
            <FontAwesomeIcon icon={faTriangleExclamation} /> About
            </Link>
          </li>
        </ul>
      </div>

      {/* <div className="user-cont">
        <div className="user-avatar">
          <img src="manpic.jpg" alt="" />
        </div>
        <div className="user-info">
          <p className="username">Umesh Nayar</p>
          <p className="useremail">umesh@example.com</p>
        </div>
      </div> */}
    </div>
  );
}
