import React from 'react';
import Nav from './Nav'
import { Link } from 'react-router-dom'


function Motherboard() {
    return (
        <div className="motherboard">
            <Nav />

            <form>
                <h2 className="text-neon">Motherboard</h2>

                <input type="radio" value="Asus ROG Maximus XII Extreme" id="maximus" name="board"></input> 
                <label htmlFor="maximus">Asus ROG Maximus XII Extreme</label><br /><br />
                
                <input type="radio" value="MSI MPG Z490 Gaming Carbon WiFi" id="msi" name="board"></input> 
                <label htmlFor="msi">MSI MPG Z490 Gaming Carbon WiFi</label><br /><br />

                <input type="radio" value="ASRock B460 Steel Legend" id="asrock" name="board"></input> 
                <label htmlFor="asrock">ASRock B460 Steel Legend</label><br /><br />

                <input type="radio" value="Gigabyte Z390 Aorus Ultra" id="gigabyte" name="board"></input> 
                <label htmlFor="gigabyte">Gigabyte Z390 Aorus Ultra</label><br /><br />

                <input type="radio" value="Asus ROG Crosshair VIII Dark Hero" id="crosshair" name="board"></input> 
                <label htmlFor="crosshair" name="case">Asus ROG Crosshair VIII Dark Hero</label><br /><br />

                <Link to="/motherboard">
                <input type="submit" value="Next" className="text-neon"></input>
                </Link>
            </form>
        </div>
    )
}

export default Motherboard
