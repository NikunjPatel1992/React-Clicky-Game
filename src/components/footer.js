import React from "react";
import "../styles/footer.css";
import logo from './../logo.svg';

function Footer(props){
    return(
        <div className="">
            <div className="footer">Clicky App
            <img src={logo} alt="logo" className="App-logo" />
            </div>
        </div>
    )
}

export default Footer; 