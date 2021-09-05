import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Nav() {
    return (
        <nav>
            <div className="logo">
                <Link to="/pc-builder" className="links">
                    <h2>PC</h2>
                    <h2>Builder</h2>
                </Link>
            </div>
        </nav>
    )
}

export default Nav
