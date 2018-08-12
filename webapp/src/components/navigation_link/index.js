import React from 'react';
import { Link } from 'react-router-dom';

export default ({ name, href, isActive }) => (
  <li className="nav-item">
    <Link className={`nav-link ${isActive && 'active'}`} to={href}>
      {name}
    </Link>
  </li>
);
