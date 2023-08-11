import React from "react";
import './navbar.css';
import video from '../../assets/icons/video.svg';
import music from '../../assets/icons/music.svg';
import pdf from '../../assets/icons/pdf.svg';
import image from '../../assets/icons/image.svg';

const Navbar = () => {
    return(
        <div className="navbar">
            <span>
                <img src={video} alt="video" />
            </span>
            <span>
                <img src={music} alt="video" />
            </span>
            <span>
                <img src={pdf} alt="video" />
            </span>
            <span>
                <img src={image} alt="video" />
            </span>
        </div>
    )
}

export default Navbar;