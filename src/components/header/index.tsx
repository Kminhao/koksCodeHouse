import react from 'react';
import './style.css';



function header() {
    return(
        <div className="headerContainer">
            <ul className="headerLinks">
                <li><a href="">Home</a></li>
                <li><a href="">Galeria</a></li>
                <li><a href="">Enviar a braba</a></li>
                <li><a href="">Rapeize</a></li>
            </ul>
        </div>
    );
}


export default header;