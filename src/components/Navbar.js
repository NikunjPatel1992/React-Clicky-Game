import React from "react";
import "../styles/Navbar.css";
import logo from './../logo.svg';


function Navbar(props) {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <img src={logo} alt="logo" className="App-logo" />
          <h2 className="" >Clicky Game</h2>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {/* <li className="text-center">
                <h2 className=" text-center">Home </h2>
              </li> */}

            </ul>
            <ul className="text-center navbar-nav  mr-auto">
              <h3>{props.correctorincorrect}</h3>
            </ul>
            <ul className="my-2 my-lg-0">
              <h3>Score : {props.counter} | High Score : {props.highCount}</h3>
            </ul>

          </div>
        </div>
      </nav>
      <section className="instructionofgame">
        <div className="imagetext text-center">
          
          <div className="text">
            <h1>Clicky Game!</h1>
            <h2>Click on an image to earn points, but don't click on any more than once!</h2>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Navbar;
