import react from 'react';
import './style.css';
import Particles from "react-tsparticles";
import Header from '../../components/header';
import Footer from '../../components/footer';


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
                                "enable": false //mudar pra true pra animação rolar
                            },
                            "size": {
                                "value": 1
                            }
                        }
                    }}
                />
            </div>

            <Footer/>
        </div>
    );
}


export default landingPage;