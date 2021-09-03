import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Cpu(props) {
    return (
        <div className="cpu">
            <Nav />

            <form onSubmit={props.formSubmit}>
                <h2 className="text-neon">CPU</h2>

                <input type="radio" value="AMD Ryzen 9 5900X" id="r9" name="cpu" onChange={props.handleChange}></input> 

                <label htmlFor="r9">AMD Ryzen 9 5900X</label><br /><br />
                
                <input type="radio" value="Intel Core i5-10600K" id="i5" name="cpu" onChange={props.handleChange}></input> 

                <label htmlFor="i5">Intel Core i5-10600K</label><br /><br />

                <input type="radio" value="AMD Ryzen 5 3600X" id="r5" name="cpu" onChange={props.handleChange}></input> 

                <label htmlFor="r5">AMD Ryzen 5 3600X</label><br /><br />

                <input type="radio" value="AMD Ryzen 7 5800X" id="r7" name="cpu" onChange={props.handleChange}></input> 

                <label htmlFor="r7">AMD Ryzen 7 5800X</label><br /><br />

                <input type="radio" value="Intel Core i3 10100F" id="i3" name="cpu" onChange={props.handleChange}></input> 

                <label htmlFor="i3">Intel Core i3 10100F </label><br /><br />

                <input type="radio" value="AMD Athlon 300GE" id="athlon" name="cpu" onChange={props.handleChange}></input> 

                <label htmlFor="athlon">AMD Athlon 300GE</label><br /><br />

                <input type="radio" value="AMD Ryzen 3 3100" id="r3" name="cpu" onChange={props.handleChange}></input> 

                <label htmlFor="r3">AMD Ryzen 3 3100</label><br /><br />


                <Link to="/gpu">
                <button type="submit" value="Next" className="text-neon">Next</button>
                </Link>
            </form>
        </div>
    )
}

export default Cpu
