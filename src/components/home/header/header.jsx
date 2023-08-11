import React from "react";
import './header.css';
import navas from '../../../assets/images/user.svg';

const Header = () => {
    return(
        <div className="header">
            <header>
                <div className="logo">Fichier-Ko</div>
                <div className="search">
                    <input type="search" name="search" id="search" placeholder="search..."/>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path id="Union_1" data-name="Union 1" d="M32.744,36.234,40.993,48.5ZM.5,20.443A19.943,19.943,0,1,1,20.443,40.386,19.942,19.942,0,0,1,.5,20.443Z" transform="translate(0 0)" fill="none" stroke="#707070" stroke-width="3"/>
                        </svg>
                    </span>
                </div>
                <div className="users">
                    <img src={navas} alt="navas" />
                    <span>Navas</span>
                </div>
            </header>
        </div>
    )
}

export default Header;