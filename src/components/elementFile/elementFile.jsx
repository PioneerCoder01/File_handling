import React from "react";
import './elementFile.css';
import Interesction1 from '../../assets/images/Intersection1.png';
import Interesction2 from '../../assets/images/Intersection2.png';
import Interesction3 from '../../assets/images/Intersection3.png';
import Interesction4 from '../../assets/images/Intersection4.png';

const ElementFile = () =>{
    return(
        <div className="elementFile">
            <div className="contentFile">
                <div className="item large">
                    <div className="top"><img src={Interesction1} alt="Interesction1" /></div>
                    <div className="bottom">
                        <span>15/12/2023</span>
                        <span>Fichier image</span>
                        <span>Background image</span>
                    </div>
                </div>
                <div className="item medium">
                    <div className="top"><img src={Interesction2} alt="Interesction2" /></div>
                    <div className="bottom">
                        <span>15/12/2023</span>
                        <span>Fichier image</span>
                        <span>Background image</span>
                    </div>
                </div>
                <div className="item large">
                    <div className="top"><img src={Interesction3} alt="Interesction3" /></div>
                    <div className="bottom">
                        <span>15/12/2023</span>
                        <span>Fichier image</span>
                        <span>Background image</span>
                    </div>
                </div>
                <div className="item large">
                    <div className="top"><img src={Interesction4} alt="Interesction4" /></div>
                    <div className="bottom">
                        <span>15/12/2023</span>
                        <span>Fichier image</span>
                        <span>Background image</span>
                    </div>
                </div>
                <div className="item large">
                    <div className="top"><img src={Interesction3} alt="Interesction3" /></div>
                    <div className="bottom">
                        <span>15/12/2023</span>
                        <span>Fichier image</span>
                        <span>Background image</span>
                    </div>
                </div>
                <div className="item medium">
                    <div className="top"><img src={Interesction2} alt="Interesction2" /></div>
                    <div className="bottom">
                        <span>15/12/2023</span>
                        <span>Fichier image</span>
                        <span>Background image</span>
                    </div>
                </div>
                

                <div className="item large">
                    <div className="top"><img src={Interesction1} alt="Interesction1" /></div>
                    <div className="bottom">
                        <span>15/12/2023</span>
                        <span>Fichier image</span>
                        <span>Background image</span>
                    </div>
                </div>
                <div className="item medium">
                    <div className="top"><img src={Interesction2} alt="Interesction2" /></div>
                    <div className="bottom">
                        <span>15/12/2023</span>
                        <span>Fichier image</span>
                        <span>Background image</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ElementFile;