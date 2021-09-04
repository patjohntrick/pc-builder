import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Headset(props) {
    return (
        <div className="headset">
            <Nav />
            <form onSubmit={props.formSubmit}>
                <h2 className="text-neon">Headset</h2>

                <input type="radio" value="Astro A50 Wireless (2019)" id="astro" name="headset" onChange={props.handleChange}></input> 

                <label htmlFor="astro">Astro A50 Wireless (2019)</label><br /><br />
                
                <input type="radio" value="Logitech G Pro X Wireless" id="logi" name="headset" onChange={props.handleChange}></input> 

                <label htmlFor="logi">Logitech G Pro X Wireless</label><br /><br />

                <input type="radio" value="Corsair HS80 RGB Wireless" id="corsair" name="headset" onChange={props.handleChange}></input> 

                <label htmlFor="corsair">Corsair HS80 RGB Wireless</label><br /><br />

                <input type="radio" value="Razer BlackShark V2 Pro" id="razer" name="headset" onChange={props.handleChange}></input> 

                <label htmlFor="razer">Razer BlackShark V2 Pro</label><br /><br />

                <input type="radio" value="SteelSeries Arctis Pro" id="steel" name="headset" onChange={props.handleChange}></input> 

                <label htmlFor="steel">SteelSeries Arctis Pro</label><br /><br />


                <Link to="/chair">
                <button type="submit" value="Next" className="text-neon">Next</button>
                </Link>
            </form>
        </div>
    )
}

export default Headset
