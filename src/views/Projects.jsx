import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Projects() {
  return (
    <div>
      <h1>My projects</h1>
      <p>I have separated my projects into two categories: games I have designed and developed, and applications I have programmed.</p>
      <nav>
        <ul>
          <li><Link to="/projects/games">See games</Link></li>
          <li><Link to="/projects/apps">See apps</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
