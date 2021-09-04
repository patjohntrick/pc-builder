import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Chair(props) {
    return (
        <div className="chaird">
            <Nav />
            <form onSubmit={props.formSubmit}>
                <h2 className="text-neon">Chair</h2>

                <input type="radio" value="Secretlab Titan Softweave" id="secret" name="chair" onChange={props.handleChange}></input> 

                <label htmlFor="secret">Secretlab Titan Softweave</label><br /><br />
                
                <input type="radio" value="Logitech G x Herman Miller Embody
                NeueChair " id="logi" name="chair" onChange={props.handleChange}></input> 

                <label htmlFor="logi">Logitech G x Herman Miller Embody
                NeueChair </label><br /><br />

                <input type="radio" value="AndaSeat Kaiser 2
                Noblechairs Hero" id="anda" name="chair" onChange={props.handleChange}></input> 

                <label htmlFor="anda">AndaSeat Kaiser 2
                Noblechairs Hero</label><br /><br />

                <input type="radio" value="Corsair T3 Rush
                DXRacer Master" id="corsair" name="chair" onChange={props.handleChange}></input> 

                <label htmlFor="corsair">Corsair T3 Rush
                DXRacer Master</label><br /><br />

                {/* <button type="submit" className="text-neon">Next</button> */}

                <Link to="/output">
                <button type="submit" value="Next" className="text-neon">Next</button>
                </Link>
            </form>
        </div>
    )
}

export default Chair
