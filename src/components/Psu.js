import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Psu(props) {
    return (
        <div className="psu">
            <Nav />

            <form onSubmit={props.formSubmit}>
                <h2 className="text-neon">PSU</h2>

                <input type="radio" value="XPG Core Reactor 650W" id="xpg" name="psu" onChange={props.handleChange}></input> 

                <label htmlFor="xpg">XPG Core Reactor 650W</label><br /><br />
                
                <input type="radio" value="be quiet! Dark Power Pro 12 1500W" id="quiet" name="psu" onChange={props.handleChange}></input> 

                <label htmlFor="quiet">be quiet! Dark Power Pro 12 1500W</label><br /><br />

                <input type="radio" value="Corsair CX450" id="corsair" name="psu" onChange={props.handleChange}></input> 

                <label htmlFor="corsair">Corsair CX450</label><br /><br />

                <input type="radio" value="SilverStone SX1000 SFX-L" id="silver" name="psu" onChange={props.handleChange}></input> 

                <label htmlFor="silver">SilverStone SX1000 SFX-L</label><br /><br />


                <Link to="/monitor">
                <button type="submit" value="Next" className="text-neon">Next</button>
                </Link>
            </form>
        </div>
    )
}

export default Psu
