import React from 'react';
import { Link } from 'react-router-dom';

export default ({ name, href }) => (
  <li className="nav-item">
    <Link className="nav-link" to={href}>
      {name}
    </Link>
  </li>
);
