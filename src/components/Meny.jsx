import React from 'react';
import { useThemeContext } from './context';

const Meny = () => {
    const {background, setBackground} = useThemeContext("")

    return (
        <div style={{background: background}}>
            <p>This is meny component, will add components to this</p>
        </div>
    );
};

export default Meny;