import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Ram(props) {
    return (
        <div className="ram">
            <Nav />

            <form onSubmit={props.formSubmit}>
                <h2 className="text-neon">RAM</h2>

                <input type="radio" value="Corsair Vengeance LED" id="corsair" name="ram" onChange={props.handleChange}></input> 

                <label htmlFor="corsair">Corsair Vengeance LED</label><br /><br />
                
                <input type="radio" value="G.Skill Trident Z RGB" id="g-skill" name="ram" onChange={props.handleChange}></input> 

                <label htmlFor="g-skill">G.Skill Trident Z RGB</label><br /><br />

                <input type="radio" value="Kingston HyperX Predator" id="kingston" name="ram" onChange={props.handleChange}></input> 

                <label htmlFor="kingston">Kingston HyperX Predator</label><br /><br />

                <input type="radio" value="HyperX Fury RGB 3733MHz" id="hyperx" name="ram" onChange={props.handleChange}></input> 

                <label htmlFor="hyperx">HyperX Fury RGB 3733MHz</label><br /><br />

                <input type="radio" value="Adata Spectrix D80" id="adata" name="ram" onChange={props.handleChange}></input> 

                <label htmlFor="adata">Adata Spectrix D80</label><br /><br />

                <input type="radio" value="Crucial Ballistix Sport" id="crucial" name="ram" onChange={props.handleChange}></input> 

                <label htmlFor="crucial">Crucial Ballistix Sport</label><br /><br />

                <Link to="/storage">
                <button type="submit" value="Next" className="text-neon">Next</button>
                </Link>
            </form>
        </div>
    )
}

export default Ram
