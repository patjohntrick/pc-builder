import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Mouse(props) {
    return (
        <div className="mouse">
            <Nav />
            <form onSubmit={props.formSubmit}>
                <h2 className="text-neon">Mouse</h2>

                <input type="radio" value="HyperX Pulsefire Haste Gaming Mouse" id="hyperx" name="mouse" onChange={props.handleChange}></input> 

                <label htmlFor="hyperx">HyperX Pulsefire Haste Gaming Mouse</label><br /><br />
                
                <input type="radio" value="Corsair Sabre RGB Pro Champion Series Gaming Mouse" id="corsair" name="mouse" onChange={props.handleChange}></input> 

                <label htmlFor="corsair">Corsair Sabre RGB Pro Champion Series Gaming Mouse</label><br /><br />

                <input type="radio" value="Logitech G Pro X Superlight Wireless Gaming Mouse" id="logi" name="mouse" onChange={props.handleChange}></input> 

                <label htmlFor="logi">Logitech G Pro X Superlight Wireless Gaming Mouse</label><br /><br />

                <input type="radio" value="Microsoft Surface Mobile Mouse" id="ms" name="mouse" onChange={props.handleChange}></input> 

                <label htmlFor="ms">Microsoft Surface Mobile Mouse</label><br /><br />

                <input type="radio" value="Razer Pro Click Wireless Mouse" id="razer" name="mouse" onChange={props.handleChange}></input> 

                <label htmlFor="razer">Razer Pro Click Wireless Mouse</label><br /><br />


                <Link to="/headset">
                <button type="submit" value="Next" className="text-neon">Next</button>
                </Link>
            </form>
        </div>
    )
}

export default Mouse
