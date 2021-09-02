import React from 'react'
import { Link } from 'react-router-dom'

function introduction() {
    return (
        <div className="intro">
            <div className="text-container">
                <h1 className="text-neon">PC</h1>
                <h1 className="text-neon">Builder</h1>
                <Link to="/case" className="links">
                <p className="text-neon">Let's Build</p>
                </Link>
            </div>
        </div>
    )
}

export default introduction
