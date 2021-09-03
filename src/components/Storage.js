import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Storage(props) {
    return (
        <div className="storage">
            <Nav />

            <form onSubmit={props.formSubmit}>
                <h2 className="text-neon">Storage Device</h2>

                <input type="radio" value="SAMSUNG 970 EVO PLUS" id="samsung" name="storage" onChange={props.handleChange}></input> 

                <label htmlFor="samsung">SAMSUNG 970 EVO PLUS</label><br /><br />
                
                <input type="radio" value="INTEL SSD 665P" id="intel" name="storage" onChange={props.handleChange}></input> 

                <label htmlFor="intel">INTEL SSD 665P</label><br /><br />

                <input type="radio" value="LEXAR NM610" id="lexar" name="storage" onChange={props.handleChange}></input> 

                <label htmlFor="lexar">LEXAR NM610</label><br /><br />

                <input type="radio" value="WESTERN DIGITAL BLACK SN750" id="western" name="storage" onChange={props.handleChange}></input> 

                <label htmlFor="western">WESTERN DIGITAL BLACK SN750</label><br /><br />

                <input type="radio" value="CORSAIR MP400" id="corsair" name="storage" onChange={props.handleChange}></input> 

                <label htmlFor="corsair">CORSAIR MP400</label><br /><br />

                <Link to="/storage">
                <button type="submit" value="Next" className="text-neon">Next</button>
                </Link>
            </form>
        </div>
    )
}

export default Storage
