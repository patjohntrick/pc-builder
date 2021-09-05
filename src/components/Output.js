import React from 'react'
import Nav from './Nav'

function Output(props) {
    return (
        <div className="output">
            <Nav />
            <div className="output-container">
                <h2 className="text-neon">Your PC</h2>
                <p><span>Case:</span> {props.build.computer.case} </p>
                <p><span>Motherboard:</span> {props.build.computer.motherboard} </p>
                <p><span>CPU:</span> {props.build.computer.cpu} </p>
                <p><span>GPU:</span> {props.build.computer.gpu} </p>
                <p><span>RAM:</span> {props.build.computer.ram} </p>
                <p><span>Storage Device:</span> {props.build.computer.storage} </p>
                <p><span>Cooling:</span> {props.build.computer.cooling} </p>
                <p><span>PSU:</span> {props.build.computer.psu} </p>
                <p><span>Monitor:</span> {props.build.computer.monitor} </p>
                <p><span>Keyboard:</span> {props.build.computer.keyboard} </p>
                <p><span>Mouse:</span> {props.build.computer.mouse} </p>
                <p><span>Headset:</span> {props.build.computer.headset} </p>
                <p><span>Chair:</span> {props.build.computer.chair} </p>
            </div>
        </div>
    )
}

export default Output
