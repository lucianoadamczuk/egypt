import { Route, Routes } from "react-router-dom"
import { Page_home, Page_contact } from "../pages"


export const AppRoutes = () => {
    return(
            <Routes>
                <Route path='/' element={ <Page_home/> } />
                <Route path='/contact' element={ <Page_contact/> } />
            </Routes>
    )
}