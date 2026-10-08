import { Link } from "react-router-dom";

export default function Navbar(props){
    return(
        <nav className="flex-container bg-dark text-white p-3 mb-3 d-flex justify-content-center">
            <h5>{props.titulo}</h5>
            <div className="ms-3 d-flex justify-content-center gap-3">
                <Link to={"/"}>Iniciar sesión</Link>
                <Link to={"/todo"}>Lista de tareas</Link>
                <Link to={"/blog"}>Blog</Link>
                <Link to={"/tienda"}>Tienda</Link>
            </div>
        </nav>
    )
}