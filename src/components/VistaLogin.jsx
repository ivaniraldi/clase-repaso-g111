import Footer from "./Footer"
import Login from "./Login"
import Navbar from "./Navbar"

export default function VistaLogin (){
    return(
        <>
            <Navbar titulo={"DLatam Login"}/>
            <div className="content container">
            <Login/>

            </div>
            <Footer/>
        </>
    )
}