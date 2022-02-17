import React, { Component } from 'react';
import './header.css';
import {  Link } from "react-router-dom";


export class Header extends Component {
  render() {
    return (
        <nav className="navbar">
          <Link className="text" to="/">Food's Restaurant</Link> 
      </nav>
    )
  }
}

export default Header