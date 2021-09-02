import React from 'react'
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Case(props) {

    return (
        <div className="case">
            <Nav />
            <form onSubmit={props.formSubmit}>
                <h2 className="text-neon">Case</h2>

                <input type="radio" value="Fractal Design Meshify 2 Compact" id="fractal" name="case" onChange={props.handleChange}></input>  
                <label htmlFor="fractal">Fractal Design Meshify 2 Compact</label><br /><br />

                <input type="radio" value="Lian Li Lancool II Mesh" id="lian" name="case" onChange={props.handleChange}></input>   
                <label htmlFor="lian">Lian Li Lancool II Mesh</label><br /><br />

                <input type="radio" value="Phanteks Eclipse P360A" id="phanteks" name="case" onChange={props.handleChange}></input>    
                <label htmlFor="phanteks">Phanteks Eclipse P360A</label><br /><br />

                <input type="radio" value="Corsair Obsidian Series 4000X RGB" id="corsair" name="case" onChange={props.handleChange}></input> 
                <label htmlFor="corsair">Corsair Obsidian Series 4000X RGB</label><br /><br />

                <input type="radio" value="Antec P82 Silent" id="antec" name="case" onChange={props.handleChange}></input>            
                <label htmlFor="antec" name="case">Antec P82 Silent</label><br /><br />

                {/* <button type="submit" className="text-neon">Next</button> */}

                <Link to="/motherboard">
                <button type="submit" className="text-neon">Next</button>
                </Link>
            </form>
        </div>
    )
}

export default Case
