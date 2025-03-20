import React, {createContext, useContext, useState} from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [background, setBackground] = useState("yellow")

    return (
        <ThemeContext.Provider value={{background, setBackground}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)