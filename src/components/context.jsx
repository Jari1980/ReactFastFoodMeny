import React, {createContext, useContext, useState} from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [background, setBackground] = useState("rgb(147, 147, 170)")
    const [ order, setOrder ] = useState([])

    return (
        <ThemeContext.Provider value={{background, setBackground, order, setOrder}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)