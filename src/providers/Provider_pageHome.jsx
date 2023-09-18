import { createContext } from "react";

export const Context_PageHome = createContext()

export const Provider_PageHome = () => {
    return(
        <Context_PageHome.Provider>

        </Context_PageHome.Provider>
    )
}