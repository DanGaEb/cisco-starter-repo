import React, {Component} from "react";

let latency;

let socket = new WebSocket('ws://localhost:55455');

socket.onmessage = function(e) {
    latency = Date.now() - Number(e.data)
}

class Socket extends Component {

    render() {
        return (
            <span className="Socket">{latency}</span>
        )
    }

}

export default Socket