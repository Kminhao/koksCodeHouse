import React from 'react';
import './style.css';
import Particles from "react-tsparticles";




function header() {
    return (
        <div className="headerContainer">
           
                <ul className="headerLinks">
                    <li><a className="link" href="">Home</a></li>
                    <li><a  className="link" href="">Galeria</a></li>
                    <li><a  className="link" href="">Enviar a braba</a></li>
                    <li><a  className="link" href="">Rapeize</a></li>
                </ul>


        </div>
    );
}


export default header;