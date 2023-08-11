import React from 'react';
import './home.css';
import Navbar from '../navbar/navbar';
// component Import
import Header from './header/header';
import AddPost from './AddPost/AddPost';
import ElementFile from '../elementFile/elementFile';

const Home = () =>{
    return(
        <div className='home'>
            <Header/>
            <Navbar/>
            <div className="containerPost">
                <AddPost/>
                <ElementFile/>
            </div>
        </div>
    )
}

export default Home;