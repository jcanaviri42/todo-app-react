import { NavLink } from 'react-router-dom'

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className="active">
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar
