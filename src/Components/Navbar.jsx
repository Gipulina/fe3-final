import React from 'react';
import {Link} from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to="/home" className="nav-link">
              Home
              </Link>
          </li>
          <li>
            <Link to="/favs" className="nav-link">
              Favs
              </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
              </Link>
          </li>
        </ul>
      </div>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar