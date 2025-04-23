import { NavLink } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-content'>
                    <ul className='footer-nav'>
                        <li><NavLink to ="/" end>Home</NavLink></li>
                        <li><NavLink to="/WatIsPmp">Wat is PMP?</NavLink></li>
                        <li><NavLink to="/Behandelingsopties">Behandelingsopties</NavLink></li>
                        <li><NavLink to="/OverMij">Over mij</NavLink></li>
                    </ul>
                </div>
                <p className='disclaimer'>Disclaimer: De informatie op deze website is bedoeld als educatie en vervangt niet het advies van een arts.</p>
                <p className='rechten'>© 2025 Pseudo-wat? Alle rechten voorbehouden. </p>
            </div>
        </footer>
    );
}

export default Footer; 