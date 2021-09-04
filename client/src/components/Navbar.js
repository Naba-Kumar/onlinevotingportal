import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from "../assets/image/clglogo.png"

function Navbar() {
    return (
        <>
        <nav>
        <div class="logo_class">
            <a href="https://onlinevotingportal.herokuapp.com/"><img src={logo} alt="Navlogo"/></a>

        </div>
        <div class="menu">
            <ul>
                 <li> <NavLink to="/"><i class="fas fa-home"></i> Home</NavLink></li>
                 <li> <NavLink to="/Votingpage"><i class="fas fa-vote-yea"></i> Vote</NavLink></li>
                 <li> <NavLink to="/Profile"><i class="fas fa-user-circle"></i> Profile</NavLink></li>
                 <li> <NavLink to="/Adminpanel/Applications"><i class="fas fa-user-shield"></i> Admin </NavLink></li>

            </ul>
        </div>
    </nav>
        </>
    )
}

export default Navbar
