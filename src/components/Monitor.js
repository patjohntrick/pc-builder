import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Monitor(props) {
    return (
        <div className="monitor">
            <Nav />

            <form onSubmit={props.formSubmit}>
                <h2 className="text-neon">Monitor</h2>

                <input type="radio" value="Porsche Design AOC Agon PD27" id="porsche" name="monitor" onChange={props.handleChange}></input> 

                <label htmlFor="porsche">Porsche Design AOC Agon PD27</label><br /><br />
                
                <input type="radio" value="BenQ EX2780Q" id="benq" name="monitor" onChange={props.handleChange}></input> 

                <label htmlFor="benq">BenQ EX2780Q</label><br /><br />

                <input type="radio" value="Dell 27 Curved Monitor (S2721HGF)" id="dell" name="monitor" onChange={props.handleChange}></input> 

                <label htmlFor="dell">Dell 27 Curved Monitor (S2721HGF)</label><br /><br />

                <input type="radio" value="HP 24mh" id="hp" name="monitor" onChange={props.handleChange}></input> 

                <label htmlFor="hp">HP 24mh</label><br /><br />

                <input type="radio" value="Lenovo ThinkVision M14" id="lenovo" name="monitor" onChange={props.handleChange}></input> 

                <label htmlFor="lenovo">Lenovo ThinkVision M14</label><br /><br />

                <input type="radio" value="LG 49WL95C-W" id="lg" name="monitor" onChange={props.handleChange}></input> 

                <label htmlFor="lg">LG 49WL95C-W</label><br /><br />


                <Link to="/keyboard">
                <button type="submit" value="Next" className="text-neon">Next</button>
                </Link>
            </form>
        </div>
    )
}

export default Monitor
