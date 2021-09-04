import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Cooling(props) {
    return (
        <div className="cooling">
            <Nav />

        <form onSubmit={props.formSubmit}>
            <h2 className="text-neon">Cooling System</h2>

            <input type="radio" value="Noctua NH-D15" id="noctua" name="cooling" onChange={props.handleChange}></input> 

            <label htmlFor="noctua">Noctua NH-D15</label><br /><br />
            
            <input type="radio" value="Cooler Master Hyper 212 EVO" id="cooler" name="cooling" onChange={props.handleChange}></input> 

            <label htmlFor="cooler">Cooler Master Hyper 212 EVO</label><br /><br />

            <input type="radio" value="Corsair H115i RGB Platinum" id="corsair" name="cooling" onChange={props.handleChange}></input> 

            <label htmlFor="corsair">Corsair H115i RGB Platinum</label><br /><br />

            <input type="radio" value="EVGA CLC 240" id="evga" name="cooling" onChange={props.handleChange}></input> 

            <label htmlFor="evga">EVGA CLC 240</label><br /><br />

            <input type="radio" value="GamerStorm Deep Cool Assassin III" id="gamer" name="cooling" onChange={props.handleChange}></input> 

            <label htmlFor="gamer">GamerStorm Deep Cool Assassin III</label><br /><br />

            <Link to="/psu">
            <button type="submit" value="Next" className="text-neon">Next</button>
            </Link>
        </form>
        </div>
    )
}

export default Cooling
