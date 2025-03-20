import React from 'react';
import { useThemeContext } from './context';

const Home = () => {
    const {background, setBackground} = useThemeContext("")

    return (
        <div style={{background: background}}>
            <p>This is home component</p>
        </div>
    );
};

export default Home;