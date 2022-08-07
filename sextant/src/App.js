import './App.css';
import React, {Component} from "react";
import Banner from './Banner';
import Exhibit from './Exhibit';
import Ip from "./Ip";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText={"Sextant"}></Banner>
                <Exhibit name="IPv4">
                    <Ip url='https://api.ipify.org?format=json'/>
                </Exhibit>
                <Exhibit name="IPv6">
                    <Ip url='https://api64.ipify.org?format=json'/>
                </Exhibit>
            </div>
        )
    }
}

export default App;
