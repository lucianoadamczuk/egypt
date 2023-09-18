import { createContext, useState } from "react";

export const Context_buttonMenu = createContext()

export const Context_buttonMenu_provider = ({children}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <Context_buttonMenu.Provider value={{isMenuOpen, setIsMenuOpen}}> {children} </Context_buttonMenu.Provider>
    )
}