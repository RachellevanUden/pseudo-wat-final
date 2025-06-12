import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/pseudowat-logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io"; // sluit-icoon
import "../styles/Navbar.css";

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<nav>
			<div className="nav-container">
				<NavLink to="/" className="logo" onClick={closeMenu}>
					<img src={logo} alt="Pseudo-wat logo" />
				</NavLink>

				{/* Hamburger icon */}
				<div className="hamburger" onClick={toggleMenu}>
					{menuOpen ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
				</div>

				{/* Menu links */}
				<ul className={menuOpen ? "nav-links open" : "nav-links"}>
					<li>
						<NavLink to="/" end onClick={closeMenu}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/WatIsPmp" onClick={closeMenu}>
							Wat is PMP?
						</NavLink>
					</li>
					<li>
						<NavLink to="/Behandelingsopties" onClick={closeMenu}>
							Behandelingsopties
						</NavLink>
					</li>
					<li>
						<NavLink to="/OverMij" onClick={closeMenu}>
							Over mij
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
