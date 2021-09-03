import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Gpu(props) {
    return (
        <div className="gpu">
            <Nav />

            <form onSubmit={props.formSubmit}>
                <h2 className="text-neon">GPU</h2>

                <input type="radio" value="Nvidia GeForce RTX 3060 Ti" id="rtx-3060" name="gpu" onChange={props.handleChange}></input> 

                <label htmlFor="rtx-3060">Nvidia GeForce RTX 3060 Ti</label><br /><br />
                
                <input type="radio" value="MSI GeForce RTX 3090 Gaming X Trio" id="rtx-3090" name="gpu" onChange={props.handleChange}></input> 

                <label htmlFor="rtx-3090">MSI GeForce RTX 3090 Gaming X Trio</label><br /><br />

                <input type="radio" value="AMD Radeon RX 6600 XT" id="rx-6600" name="gpu" onChange={props.handleChange}></input> 

                <label htmlFor="rx-6600">AMD Radeon RX 6600 XT</label><br /><br />

                <input type="radio" value="RX 570" id="rx-570" name="gpu" onChange={props.handleChange}></input> 

                <label htmlFor="rx-570">RX 570</label><br /><br />

                <input type="radio" value="PNY GeForce GTX 1660 Ti XLR8 Gaming OC" id="gtx-1660" name="gpu" onChange={props.handleChange}></input> 

                <label htmlFor="gtx-1660">PNY GeForce GTX 1660 Ti XLR8 Gaming OC</label><br /><br />

                <Link to="/ram">
                <button type="submit" value="Next" className="text-neon">Next</button>
                </Link>
            </form>
        </div>
    )
}

export default Gpu
