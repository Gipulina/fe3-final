import React from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link rel="/home" className="nav-link">
              Home
              </Link>
          </li>
          <li>
            <Link rel="/favs" className="nav-link">
              Favs
              </Link>
          </li>
          <li>
            <Link rel="/contact" className="nav-link">
              Contact
              </Link>
          </li>
          <li>
            <Link rel="/detail" className="nav-link">
              Detail
              </Link>
          </li>
        </ul>
      </div>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar