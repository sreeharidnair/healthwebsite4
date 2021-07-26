import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul className="Navbarstyle">
                
                <Link to="/healthwebsite4">
                <li className="Navbarelements ">HOME</li> {/*just add active after elements */}
                </Link>
                <Link to="/Contactus">
                <li className="Navbarelements">Contactus</li>
                </Link>
                <Link to="/Aboutus">
                <li className="Navbarelements">About Us</li>
    </Link>
            </ul>
        </nav>
    )
}

export default Navbar