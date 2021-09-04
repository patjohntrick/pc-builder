import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Keyboard(props) {
    return (
        <div className="keyboard">
            <Nav />

            <form onSubmit={props.formSubmit}>
                <h2 className="text-neon">Keyboard</h2>

                <input type="radio" value="Razer Pro Type Wireless Mechanical Keyboard" id="razer" name="keyboard" onChange={props.handleChange}></input> 

                <label htmlFor="razer">Razer Pro Type Wireless Mechanical Keyboard</label><br /><br />
                
                <input type="radio" value="Fnatic Streak65 Gaming Keyboard" id="fnatic" name="keyboard" onChange={props.handleChange}></input> 

                <label htmlFor="fnatic">Fnatic Streak65 Gaming Keyboard</label><br /><br />

                <input type="radio" value="Kinesis TKO Gaming Keyboard" id="kinesis" name="keyboard" onChange={props.handleChange}></input> 

                <label htmlFor="kinesis">Kinesis TKO Gaming Keyboard</label><br /><br />

                <input type="radio" value="Asus ROG Claymore II Wireless Keyboard" id="asus" name="keyboard" onChange={props.handleChange}></input> 

                <label htmlFor="asus">Asus ROG Claymore II Wireless Keyboard</label><br /><br />

                <input type="radio" value="Happy Hacking Professional Hybrid Wireless Mechanical Keyboard" id="happy" name="keyboard" onChange={props.handleChange}></input> 

                <label htmlFor="happy">Happy Hacking Professional Hybrid Wireless Mechanical Keyboard</label><br /><br />


                <Link to="/mouse">
                <button type="submit" value="Next" className="text-neon">Next</button>
                </Link>
            </form>
        </div>
    )
}

export default Keyboard
