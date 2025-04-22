import { NavLink } from 'react-router-dom'
import logo from '/pmp-logo.svg'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <img src={logo} alt='Pseudo-wat logo' />
      </div>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/WatIsPmp">Wat is PMP?</NavLink></li>
        <li><NavLink to="/Behandelingsopties">Behandelingsopties</NavLink></li>
        <li><NavLink to="/OverMij">Over mij</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar