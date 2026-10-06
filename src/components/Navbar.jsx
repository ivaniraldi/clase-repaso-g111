export default function Navbar(props){
    return(
        <nav className="flex-container bg-dark text-white p-3 mb-3 d-flex justify-content-center">
            <h5>{props.titulo}</h5>
        </nav>
    )
}