import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <NavLink className={(element) => element.isActive ? 'selected' : ''} to="/">Home</NavLink>
        <NavLink className={(element) => element.isActive ? 'selected' : ''} to="/contact">Contact</NavLink>
        <NavLink className={(element) => element.isActive ? 'selected' : ''} to="/projects">Projects</NavLink>
    </div>
  )
}
