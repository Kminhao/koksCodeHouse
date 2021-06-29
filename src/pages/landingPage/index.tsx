import react from 'react';
import './style.css';
import Particles from "react-tsparticles";
import Header from '../../components/header';



function landingPage() {
    return(
        <div className="landingContainer">
            <Header />
            <div className="canvas">
                <Particles
                    options={{
                        "particles": {
                            "links": {
                                "enable": true
                            },
                            "move": {
                                "enable": true
                            },
                            "size": {
                                "value": 2
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}


export default landingPage;