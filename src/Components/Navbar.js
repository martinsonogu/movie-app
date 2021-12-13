import React from 'react';
import {Link} from "react-router-dom"



const Navbar = () => {
    return (
    <nav className="navbar navbar-dark bg-info">
        <Link to="/" class="navbar-brand" >Movie App</Link>
    
    </nav>
    )
}

export default Navbar;