import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTriangleExclamation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="side-nav-cont">
        
      <div className="app-nav-controls">
        <div className="app-heading">
          <h2>Covid-19</h2>
        </div>
        <div className="nav-items">
          <div className="single-nav-item">
            <FontAwesomeIcon icon={faHouse} />
            <p>Home</p>
          </div>
          <div className="single-nav-item">
            <FontAwesomeIcon icon={faTriangleExclamation} />
            <p>Alerts</p>
          </div>
          <div className="single-nav-item">
            <FontAwesomeIcon icon={faPhone} />
            <p>Contact US</p>
          </div>
        </div>
      </div>

      <div className="user-cont">
        <div className="user-avatar">
          <img src="manpic.jpg" alt="" />
        </div>
        <div className="user-info">
          <p className="username">Umesh Nayar</p>
          <p className="useremail">umesh@example.com</p>
        </div>
      </div>
    </div>
  );
}
