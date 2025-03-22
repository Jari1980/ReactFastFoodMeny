import React from 'react';
import { useThemeContext } from './context';
import './home.css';

const Home = () => {
    const {background, setBackground} = useThemeContext("")

    return (
        <div style={{ backgroundColor: background,  backgroundImage: "repeating-radial-gradient( circle at 0 0, transparent 0,rgb(113, 113, 148) 20px ), repeating-linear-gradient(rgba(35, 41, 150, 0.33),rgb(137, 139, 172) )"}}>
            <div className='conatiner' id='homeContainer'>
            <p>This is home component</p>
            </div>
        </div>
    );
};

export default Home;