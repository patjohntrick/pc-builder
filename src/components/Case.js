import React from 'react'
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Case(props) {

    function formSubmit(event) {
        event.preventDefault();
        console.log(props.item);
    }

    return (
        <div className="case">
            <Nav />
            <form onSubmit={formSubmit}>
                <h2 className="text-neon">Case</h2>

                <label>
                <input type="radio" value="Fractal Design Meshify 2 Compact" id="fractal" name="case" onChange={props.setItem}></input>  
                Fractal Design Meshify 2 Compact</label><br /><br /> 

                <input type="radio" value="Lian Li Lancool II Mesh" id="lian" name="case" onChange={props.setItem}></input>   
                <label htmlFor="lian">Lian Li Lancool II Mesh</label><br /><br />

                <input type="radio" value="Phanteks Eclipse P360A" id="phanteks" name="case" onChange={props.setItem}></input>    
                <label htmlFor="phanteks">Phanteks Eclipse P360A</label><br /><br />

                <input type="radio" value="Corsair Obsidian Series 4000X RGB" id="corsair" name="case" onChange={props.setItem}></input> 
                <label htmlFor="corsair">Corsair Obsidian Series 4000X RGB</label><br /><br />

                <input type="radio" value="Antec P82 Silent" id="antec" name="case" onChange={props.setItem}></input>            
                <label htmlFor="antec" name="case">Antec P82 Silent</label><br /><br />

                <input type="submit" value="Next" className="text-neon"></input>

                {/* <Link to="/motherboard">
                <input type="submit" value="Next" className="text-neon"></input>
                </Link> */}
            </form>
        </div>
    )
}

export default Case
