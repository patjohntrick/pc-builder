import React from 'react'
import Nav from './Nav'

function Output(props) {
    return (
        <div className="output">
            <Nav />
            <div className="output-container">
                <h2 className="text-neon">Your PC</h2>
                <p>Case: {props.build.computer.case} </p>
                <p>Motherboard: {props.build.computer.motherboard} </p>
                <p>CPU: {props.build.computer.cpu} </p>
                <p>GPU: {props.build.computer.gpu} </p>
                <p>RAM: {props.build.computer.ram} </p>
                <p>Storage Device: {props.build.computer.storage} </p>
                <p>Cooling: {props.build.computer.cooling} </p>
                <p>PSU: {props.build.computer.psu} </p>
                <p>Monitor: {props.build.computer.monitor} </p>
                <p>Keyboard: {props.build.computer.keyboard} </p>
                <p>Mouse: {props.build.computer.mouse} </p>
                <p>Headset: {props.build.computer.headset} </p>
                <p>Chair: {props.build.computer.chair} </p>
            </div>
        </div>
    )
}

export default Output
