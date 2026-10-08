import Footer from "../components/Footer"
import Login from "../components/Login"
import Navbar from "../components/Navbar"

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