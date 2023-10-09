import { NavLink } from "react-router-dom"

import logo from '../assets/logo.svg'

const Nav = () => {
  return (
    <nav>
      <NavLink to="/"><img src={logo} alt="A cute puppy" /></NavLink>
      <NavLink to="/puppies">Puppy List</NavLink>
    </nav>
  )
}

export default Nav